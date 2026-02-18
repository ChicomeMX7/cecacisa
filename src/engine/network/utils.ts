import { ParamsObject, ConverterType, CT } from 'models/index'

const Converter: ConverterType = {
    [CT.OBJECT]: (k: string, v: any) => {
        if (v.length) {
            return `${k}=${v.toString()}`
        }
        let res = `${k}=[`
        for (const [key, value] of Object.entries(v)) {
            res += `${key}:${value}`
        }
        res += ']'
        return res
    },
    [CT.STRING]: (k: string, v: any) => `${k}=${v}`,
    [CT.NUMBER]: (k: string, v: any) => `${k}=${v}`,
}

export const decode = (params: ParamsObject) => {
    if (!params) return ''
    let result = '?'
    const KeyNames = [CT.OBJECT, CT.STRING, CT.NUMBER]

    for (const key in params) {
        if (Object.hasOwnProperty.call(params, key)) {
            const keyType = KeyNames.find((item) => item === typeof params[key]) ?? CT.STRING
            const item = KeyNames.includes(keyType) ? keyType : null
            if (!item) continue

            result += `${Converter[item](key, params[key])}&`
        }
    }
    return result.substring(0, result.length - 1)
}

export const object2Query = (params: ParamsObject = null) => (!params ? '' : decode(params))
