import { PANNELS } from 'hooks/useTogglePannel/useTogglePannel'
import { TableDataSet, RowDataTypes, SchemasRowData, HeaderTitlesType } from 'models'

export type S = 'schemas' | undefined

export const sizes: Record<PANNELS, S> = {
    [PANNELS.SCHEMAS]: 'schemas',
    [PANNELS.DASHBOARD]: undefined,
    [PANNELS.CONTENT]: undefined,
    [PANNELS.ENDPOINTS]: undefined,
    [PANNELS.UPLOADS]: undefined,
    [PANNELS.NODES]: undefined,
    [PANNELS.UNKNOWN]: undefined,
}

export const rowVariant = (isHeader?: boolean, idx?: number) => {
    if (isHeader) return 'header'

    if (idx !== undefined && idx % 2 === 0) {
        return 'even'
    }
    return 'odd'
}

const dataMaps = {
    [PANNELS.SCHEMAS]: ['name', 'changes', 'userReference'],
    [PANNELS.DASHBOARD]: ['name', 'changes', 'userReference'],
    [PANNELS.CONTENT]: ['name', 'changes', 'userReference'],
    [PANNELS.ENDPOINTS]: ['name', 'changes', 'userReference'],
    [PANNELS.UPLOADS]: ['name', 'changes', 'userReference'],
    [PANNELS.NODES]: ['name', 'changes', 'userReference'],
    [PANNELS.UNKNOWN]: ['name', 'changes', 'userReference'],
}

export const mapPrintables = (
    elems: Partial<Pick<TableDataSet<RowDataTypes>, 'data'>> | undefined,
    dm: PANNELS
) => {
    if (!elems) return [] as SchemasRowData[]
    return dataMaps[dm].map(
        (item) => elems[item as keyof Partial<Pick<TableDataSet<RowDataTypes>, 'data'>>]
    )
}

export const mapHeaderTitles = (elems: undefined | Record<string, boolean>): HeaderTitlesType[] => {
    if (!elems) return [] as HeaderTitlesType[]
    const titles: HeaderTitlesType[] = []
    const arr = Object.keys(elems)
    for (let i = 0; i < arr.length; i++) {
        const key = arr[i]
        const title: HeaderTitlesType = {
            label: `tables:headerTitle.${key}`,
            visible: elems[key],
            field: key,
        }

        titles.push(title)
    }
    return titles
}
