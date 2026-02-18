import { JSONSContent, uuid, IndexedArray, HTTPstatus } from 'models'
import { PaginationParams, UUID } from './networkAPI.common'

export type SchemasListResponse = {
    id: uuid
    name: string
    jsRef: string
    creationDate: Date
    modificationDate: Date
    deltas: IndexedArray<uuid>
}[]

export type SchemaResponse = {
    id: uuid
    name: string
    jsRef: string
    creationDate: Date
    modificationDate: Date
    deltas: IndexedArray<uuid>
    data: JSONSContent
}

export type CRPayload_SCHEMA = {
    name: string
    jsRef: string
    data: JSONSContent
}

export type UPPayload_SCHEMA = UUID & CRPayload_SCHEMA

export type SchemasListParams = JSONSContent & PaginationParams

export type SchemaHandlerType = {
    getSchemasList: (params?: SchemasListParams) => Promise<SchemasListResponse>
    getSchema: (params: UUID) => Promise<SchemaResponse>
    createSchema: (params: CRPayload_SCHEMA) => Promise<HTTPstatus>
    updateSchema: (params: UPPayload_SCHEMA) => Promise<HTTPstatus>
    deleteSchema: (params: UUID) => Promise<HTTPstatus>
}
