import { JSONSContent, uuid, IndexedArray, HTTPstatus } from 'models'
import { PaginationParams, UUID } from './networkAPI.common'

export type EndpointsListResponse = {
    id: uuid
    name: string
    creationDate: Date
    modificationDate: Date
    deltas: IndexedArray<uuid>
}[]

export type EndpointFileResponse = {
    id: uuid
    name: string
    testURL: string
    creationDate: Date
    modificationDate: Date
    deltas: IndexedArray<uuid>
    data: string
}

export type CRPayload_ENDPOINT = {
name: string
description: string
value: string
ref_id: string
schema_ref: string
bump: boolean
status: string
}

export type UPPayload_ENDPOINT = UUID & CRPayload_ENDPOINT

export type EndpointsListParams = JSONSContent & PaginationParams

export type EndpointsHandlerType = {
    getEndpointsList: (params?: EndpointsListParams) => Promise<EndpointsListResponse>
    getEndpoint: (params: UUID) => Promise<EndpointFileResponse>
    createEndpoint: (params: CRPayload_ENDPOINT) => Promise<HTTPstatus>
    updateEndpoint: (params: UPPayload_ENDPOINT) => Promise<HTTPstatus>
    deleteEndpoint: (params: UUID) => Promise<HTTPstatus>
}
