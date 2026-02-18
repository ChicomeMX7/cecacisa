export type GenericObject = {
    [key: string | number]: any
}

export type TypedObject<T> = {
    [Property in keyof T]: keyof T
}

export type JSONSContent = {
    [key: string]:
        | string
        | number
        | boolean
        | JSONSContent
        | GenericObject
        | string[]
        | number[]
        | JSONSContent[]
        | GenericObject[]
}

export type uuid = `${string}-${string}-${string}-${string}-${string}`

export type FIleTypes = 'json' | 'node' | 'xml' | 'txt'

export type IndexedArray<T> = Array<{ [key: number]: T }>

export type HTTPstatus = 200 | 403 | 500
