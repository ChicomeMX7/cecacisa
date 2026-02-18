import { JSONSContent, uuid, IndexedArray, HTTPstatus } from 'models'
import { PaginationParams, UUID } from './networkAPI.common'

export type UploadFilesListResponse = {
    id: uuid
    name: string
    jsRef: string
    creationDate: Date
    modificationDate: Date
    deltas: IndexedArray<uuid>
    thumbnailURL: IndexedArray<string>
}[]

export type UploadFileResponse = {
    id: uuid
    address: IndexedArray<string>
    name: string
    jsRef: string
    url: string
    creationDate: Date
    modificationDate: Date
    deltas: IndexedArray<uuid>
    fileURL: IndexedArray<string>
}

export type CRPayload_UPLOADS = {
    name: string
    transferRef: string
    parts: IndexedArray<number>
    thumbnail: BinaryType
}

export type UPPayload_UPLOAD = UUID & CRPayload_UPLOADS

export type UploadsListParams = JSONSContent & PaginationParams

export type UploadsHandlerType = {
    getUploadFilesList: (params?: UploadsListParams) => Promise<UploadFilesListResponse>
    getUploadFile: (params: UUID) => Promise<UploadFileResponse>
    createUploadFile: (params: CRPayload_UPLOADS) => Promise<HTTPstatus>
    updateUploadFile: (params: UPPayload_UPLOAD) => Promise<HTTPstatus>
    deleteUploadFile: (params: UUID) => Promise<HTTPstatus>
}
