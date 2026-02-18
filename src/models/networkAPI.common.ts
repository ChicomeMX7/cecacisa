import { uuid } from './generic'

export type UUID = { id: uuid }

export type UUIDS = { ids: uuid[]}

export type PaginationParams = {
    start?: number
    limit?: number
    order?: string
}
