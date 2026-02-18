export enum AcceptTypes {
    JSON = 'application/json',
    PDF = 'application/pdf',
    CSV = 'application/csv',
    ZIP = 'application/zip',
    MP4 = 'video/mp4',
    H264 = 'video/H264',
    H265 = 'video/H265',
    QUICKTIME = 'video/quicktime',
    BYTES = 'bytes',
    PLAIN = 'text/plain',
    OBJ = 'model/obj',
    MTL = 'model/mtl',
    MP3 = 'audio/mpeg',
    ACC = 'audio/acc',
    OGG = 'audio/ogg',
    OPUS = 'audio/opus',
    WAV = 'audio/wav',
    MIDI = 'audio/midi',
}

export type RequestType = string

export type AllowedData = string | number | object | Array<string | number> | boolean | undefined

export type AcceptTypesU = AllowedData | undefined

export type ResponseDataType = string

export type Filters = {
    [key: string | number]: AllowedData
}

export type Request = {
    data: AllowedData
    accept: AcceptTypes
    type: RequestType
    filter?: Filters
}

export type CallOptions = {
    headers?: Headers
    data?: any
    responseType?: ResponseType
    params?: Object
    withoutContentType?: boolean
}

export type Response = {
    type: ResponseType
    data: ResponseDataType
    status: number
    statusText: string
}

export type cuatomResponseType = 'text' | 'json' | 'stream' | 'blob' | 'arrayBuffer' | 'formData'

export type NetworkHeaders = {
    RequestType: RequestType
    AllowedData: AllowedData
    AcceptTypesU: AcceptTypesU
    ResponseDataType: ResponseDataType
    Filters: Filters
    Request: Request
    Headers: Headers
    CallOptions: CallOptions
    Response: Response
}
