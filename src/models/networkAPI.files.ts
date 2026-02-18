import { JSONSContent, uuid, FIleTypes, IndexedArray, HTTPstatus } from 'models'
import { PaginationParams, UUID, UUIDS } from './networkAPI.common'

export type FilesListResponse = {
    id: uuid
    jsRef: string
    creationDate: Date
    modificationDate: Date
    name: string
    deltas: IndexedArray<uuid>
    schema: uuid
    type: FIleTypes
}[]

export type FileResponse = {
    id: uuid
    name: string
    jsRef: string
    creationDate: Date
    modificationDate: Date
    deltas: IndexedArray<uuid>
    schema: uuid
    payload: JSONSContent
    type: FIleTypes
}

export type CRPayload_FILE = {
    name: string
    jsRef: string
    schema: uuid
    data: JSONSContent
}

export type UPPayload_FILE = UUID & CRPayload_FILE

export type FilesListParams = JSONSContent & PaginationParams

export type FileHandlerType = {
    getFilesList: (params?: FilesListParams) => Promise<FilesListResponse>
    getFile: (params: UUID) => Promise<FileResponse>
    getManyFiles: (params: UUIDS) => Promise<FileResponse>
    createFile: (params: CRPayload_FILE) => Promise<HTTPstatus>
    updateFile: (params: UPPayload_FILE) => Promise<HTTPstatus>
    deleteFile: (params: UUID) => Promise<HTTPstatus>
}
