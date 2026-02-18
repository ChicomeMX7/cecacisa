import { JSONSContent, uuid, IndexedArray, HTTPstatus } from 'models'
import { PaginationParams, UUID } from './networkAPI.common'

export type NodesListResponse = {
    id: uuid
    name: string
    jsRef: string
    creationDate: Date
    modificationDate: Date
    deltas: IndexedArray<uuid>
}[]

export type NodeResponse = {
    id: uuid
    name: string
    jsRef: string
    creationDate: Date
    modificationDate: Date
    deltas: IndexedArray<uuid>
    data: JSONSContent
}

export type CRPayload_NODE = {
    name: string
    jsRef: string
    data: JSONSContent
}

export type UPPayload_NODE = UUID & CRPayload_NODE

export type NodesListParams = JSONSContent & PaginationParams

export type NodeHandlerType = {
    getNodesList: (params?: NodesListParams) => Promise<NodesListResponse>
    getNode: (params: UUID) => Promise<NodeResponse>
    createNode: (params: CRPayload_NODE) => Promise<HTTPstatus>
    updateNode: (params: UPPayload_NODE) => Promise<HTTPstatus>
    deleteNode: (params: UUID) => Promise<HTTPstatus>
}
