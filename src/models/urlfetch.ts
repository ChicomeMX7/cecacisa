import { GenericObject, JSONSContent } from './generic'

export type URL = string

export enum Method {
    GET = 'GET',
    POST = 'POST',
    CREATE = 'CREATE',
    READ = 'READ',
    UPDATE = 'UPDATE',
    DELETE = 'DELETE',
    OPTIONS = 'OPTIONS',
}
export type Data = BodyInit | GenericObject | string

export enum HeaderNames {
    AUTHORIZATION = 'Authorization',
    USERTOKEN = 'User-Token',
}

export type CORSHeaders = HeadersInit & {
    [HeaderNames.AUTHORIZATION]?: string
    [HeaderNames.USERTOKEN]?: string
    [key: string]: string | undefined | null
}

export type ResponseType = 'json' | 'text' | 'bytes'

export type ParamsObject = GenericObject | undefined | null

export type FetchConfig = {
    data?: Data | any
    params?: GenericObject | JSONSContent
    responseType?: ResponseType
}

export type Network = {
    createFetch: (
        url: URL,
        method: Method,
        data: Data,
        headers: Headers,
        response: ResponseType
    ) => Promise<Response>
}

export enum CT {
    OBJECT = 'object',
    STRING = 'string',
    NUMBER = 'number',
}

export type ConverterType = {
    [CT.OBJECT]: (k: string, v: any) => string
    [CT.STRING]: (k: string, v: any) => string
    [CT.NUMBER]: (k: string, v: any) => string
}
