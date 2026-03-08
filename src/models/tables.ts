export type SchemasRowData = {
    uuid: string
    name: string
    description: string
    properties: number
    timesUsed: number
    locked?: boolean
    lastChange: number
    createdAt: number
    changedBy: string
    createdBy: string
    parent?: string
    children?: string[]
}

export type HeaderTitlesType = {
    label: string
    visible: boolean
    field: string
}

export type RowDataTypes = SchemasRowData

export type TableDataSet<T> = {
    uuid: string
    title: string
    locked?: boolean
    hasMenu?: boolean
    header: Record<keyof T, boolean>
    data: T[]
}
