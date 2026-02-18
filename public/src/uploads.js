const Bearer =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5ldy11c2VyLm1haWxAdGVzdGluZy5jb20iLCJyZWFsbXMiOnsiYXBpcyI6IjA2NjYiLCJtZWRpYSI6IjA2NjYiLCJtZWN1YXRlIjoiMDY2NiJ9LCJpc3MiOiJtZWN1YXRlLWFzdHJvcGh5dHVtIiwic3ViIjoiODE4YjY0OGUtNDM2My00ZDRjLTgyMGYtNzhlMDA2NGJkZTBjIiwiYXVkIjpbIm1lY3VhdGUiLCJtZWRpYSIsImFwaXMiXSwiZXhwIjoxNzMzODY4NDQ5LCJuYmYiOjE3MzIxNTk2NDksImlhdCI6MTczMjE1OTY0OSwianRpIjoidXNlci10b2tlbiJ9.AvNTGLcQWS1wgOe1-dtDlyht8-gcOxzUD34lZPAvoQw'
// const CHUNK_MAX_SIZE = 1000 * 1000 * 3
const CHUNK_MAX_SIZE = 128 * 10
let CONCURRENT_UPLOADS = 4
let CURRENT_FILE_ID = ''
let TRANSFER_FILE_ID = ''
let RESOLVES = 0
let _UTS = 0
let _FIN = 0
let Upl_Data = []

const URL_CREATE = 'http://localhost:6080/oso/film/04872bb3-fcab-44b6-9b54-d849184a8239/new'
const BASE_URL_UPDATE = 'http://localhost:6080/oso/film/04872bb3-fcab-44b6-9b54-d849184a8239/'
let URL_UPDATE = ''
const fileInput = document.querySelector('#automatic')
const fileManual = document.querySelector('#manual')
const toggleBtn = document.querySelector('#toggle-btn')
let loaderAct = document.getElementById('loader-progress')
let upload = null
let uploadIsRunning = false

function testFile() {
    loaderAct.style.width = '0%'
    _UTS = Math.ceil(fileInput.files[0].size / CHUNK_MAX_SIZE)
    _FIN = 0
    CURRENT_FILE_ID = ''
    TRANSFER_FILE_ID = ''
    RESOLVES = 0
    Upl_Data = []
    PrepareUpload()
}
function readOnePart(chunkStart, chunkEnd) {
    return new Promise((resolve, reject) => {
        let Data = ''
        const file = fileInput.files[0]
        if (!file) return Data
        const blob = file.slice(chunkStart, chunkEnd)

        const reader = new FileReader()
        reader.onload = function (e) {
            const arrayBuffer = e.target.result
            Data = btoa(arrayBuffer)
        }
        reader.onloadend = function () {
            resolve(Data)
        }
        reader.onerror = function (e) {
            console.error('Error reading file:', e)
            reject(e)
        }
        reader.readAsBinaryString(blob)
    })
}

function spacedReq() {
    const T = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    if (CONCURRENT_UPLOADS > 2 && _UTS < 200) return T(50, 500)
    if (CONCURRENT_UPLOADS > 2 && _UTS >= 200) return T(850, 1000)
    if (CONCURRENT_UPLOADS > 2 && _UTS >= 300) return T(1000, 2000)
    if (CONCURRENT_UPLOADS > 2 && _UTS >= 500) return T(3000, 5000)
    return T(1, 100)
}

function PrepareUpload() {
    const size = fileInput.files[0].size

    for (let i = 0; i < _UTS; i++) {
        const chunkStart = i * CHUNK_MAX_SIZE
        const chunkEnd = size - chunkStart > CHUNK_MAX_SIZE ? chunkStart + CHUNK_MAX_SIZE : size
        const newID = uuid()

        Upl_Data.push({
            id: newID,
            one: i + 1,
            start: chunkStart,
            end: chunkEnd,
            data: chunkEnd - chunkStart,
        })
    }
    CURRENT_FILE_ID = uuid()
    CreateFile(CURRENT_FILE_ID)
        .then((res) => {
            let { item_uuid, file_uuid } = res
            URL_UPDATE = BASE_URL_UPDATE + file_uuid
            TRANSFER_FILE_ID = item_uuid
            if (CONCURRENT_UPLOADS > Upl_Data.length) {
                CONCURRENT_UPLOADS = 1
            }
            processUpload()
        })
        .catch((e) => {
            console.error('Error:', e)
            alert(e)
        })
}

async function processUpload() {
    let now = Date.now()

    const iterator = iteratorGenerator(Upl_Data)
    const SendOne = async (items, isHead = false) => {
        for (const item of items) {
            readOnePart(item.start, item.end)
                .then((D) => {
                    try {
                        UploadFile({ ...item, data: D }, isHead)
                            .then((res) => {
                                if (isHead) {
                                    console.log('@@@ HEAD:', res)
                                }
                                if (res.success) {
                                    _FIN++
                                    let progress = (_FIN / _UTS) * 100
                                    loaderAct.style.width = `${progress}%`
                                    Upl_Data = Upl_Data.filter(
                                        (dataItem) => dataItem.id !== res.target
                                    )
                                    console.log('@@@ Upl_Data:', Upl_Data)
                                    console.log(
                                        '@@@ RESOLVES === CONCURRENT_UPLOADS:',
                                        RESOLVES === CONCURRENT_UPLOADS
                                    )
                                    console.log(
                                        '@@@ RESOLVES | CONCURRENT_UPLOADS:',
                                        RESOLVES,
                                        CONCURRENT_UPLOADS
                                    )
                                }
                                if (++RESOLVES === CONCURRENT_UPLOADS) {
                                    RESOLVES = 0
                                    setTimeout(() => {
                                        if (iterator.hasNext(CONCURRENT_UPLOADS)) {
                                            SendOne(iterator.current(CONCURRENT_UPLOADS))
                                        }
                                    }, spacedReq())
                                }
                                if (Upl_Data.length === 0) {
                                    let ms = Date.now() - now
                                    console.log('Operation took:', ms / 1000, 'seconds')
                                    console.log('@@@ end :', Upl_Data)
                                }
                            })
                            .catch((e) => {
                                console.error('Error in uploadFile promise:', e)
                            })
                    } catch (error) {
                        console.log('Error:', error)
                    }
                })
                .catch((e) => console.error('Error:', e))
        }
    }
    if (iterator.hasNext(CONCURRENT_UPLOADS)) {
        SendOne(iterator.current(1), true)
    }
}

function UploadFile(item, head) {
    return new Promise((resolve, reject) => {
        const formData = new FormData()
        formData.append('file_name', fileInput.files[0].name)
        if (head) {
            formData.append('file_type', fileInput.files[0].type)
            formData.append('head', '-h')
        }
        formData.append('id', TRANSFER_FILE_ID)
        formData.append('chunk_id', item.id)
        formData.append('chunk', item.data)
        formData.append('start', item.start)
        formData.append('end', item.end)

        const myHeaders = new Headers()
        myHeaders.append('User-Token', 'user-token')
        myHeaders.append('Authorization', Bearer)

        try {
            fetch(URL_UPDATE, {
                method: 'UPDATE',
                headers: myHeaders,
                redirect: 'follow',
                body: formData,
            }).then((res) => {
                try {
                    resolve(res.json())
                } catch (error) {
                    log('Error:', error)
                    log('Res:', res)
                }
            })
        } catch (error) {
            reject({ success: false, target: item.id })
        }
    })
}

async function CreateFile(id) {
    const formData = new FormData()
    formData.append('data', JSON.stringify({ id, Upl_Data: convertToObject(Upl_Data) }))
    formData.append('file_ID', CURRENT_FILE_ID)
    formData.append('file_type', fileInput.files[0].type)
    formData.append('file_name', fileInput.files[0].name)
    formData.append('file_size', fileInput.files[0].size)

    const myHeaders = new Headers()
    myHeaders.append('User-Token', 'user-token')
    myHeaders.append('Authorization', Bearer)

    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(URL_CREATE, {
                method: 'CREATE',
                headers: myHeaders,
                redirect: 'follow',
                body: formData,
            })

            if (response.ok) {
                const result = await response.json()
                resolve(result)
            } else {
                reject(response.statusText)
            }
        } catch (error) {
            reject(error)
        }
    })
}

function convertToObject(data) {
    let res = {}
    for (let i = 0; i < data.length; i++) {
        const item = data[i]
        res[item.id] = { ...item }
    }
    return res
}

function uuid() {
    return 'xxxxxxxx-xexx-yxxx-xxxx-xxxx7yexxxxx'.replace(/[xy]/g, function (c) {
        var n = Math.round(Math.random() * 9)
        var r = (Math.random() * 16) | 0
        var v = c === 'x' ? r : c === 'e' ? n : (r & 0x3) | 0x8
        return v.toString(16)
    })
}

function iteratorGenerator(data) {
    let _cur = 0
    const Data = [...data]
    function hasNext(range = 1) {
        if (Data.length == 0) return false
        let expected = _cur + range
        let max = Data.length
        let valid = expected < max
        return valid ? valid : max ? true : false
    }
    function current(range = 1) {
        if (range === 0 || Data.length == 0) {
            return null
        }
        let selected = Data.slice(_cur, _cur + range)
        for (let i = 0; i < selected.length; i++) {
            Data.shift()
        }
        return selected
    }
    return { hasNext, current }
}

fileInput.addEventListener('change', testFile, true)
