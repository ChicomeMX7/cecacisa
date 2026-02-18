import { GenericObject } from 'models'

const set_cookie_time = (value: number) => {
    try {
        return new Date(new Date().setHours(value, 0, 0)).toUTCString()
    } catch (error) {
        return standard_cookie_duration()
    }
}

const standard_cookie_duration = () => {
    return new Date(new Date().setHours(1, 0, 0)).toUTCString()
}

const create_cookie = (name: string, data: string | Object, time = 0) => {
    const _time = time ? set_cookie_time(time) : standard_cookie_duration()
    const string_data = typeof data === 'string' ? data : JSON.stringify(data)
    document.cookie = `${name}=${string_data}; SameSite=Lax; Secure; ${_time}; path=/`
}

const read_cookie = () => {
    const all = document.cookie.split('; ').map((item) => {
        const cookieSection = item.split('=')
        const res: GenericObject = {
            [`${cookieSection[0]}`]: JSON.parse(cookieSection[1]),
        }
        return res
    })
    return all
}

const get_cookie = (cname: string) => {
    const target = document.cookie
        .split('; ')
        .find((row) => row.startsWith(`${cname}=`))
        ?.split('=')[1]
    return target ? JSON.parse(target) : {}
}

export const _cookie = {
    create: create_cookie,
    read: read_cookie,
    get: get_cookie,
}
