import { Typography } from 'components/Typography'
import { Check, RowElement, RowMenuSection } from './DataTable.styles'
import { TableDataSet } from 'models'
import { PANNELS } from 'hooks/useTogglePannel/useTogglePannel'
import { SyntheticEvent, useState } from 'react'
import { RowMenu } from './RowMenu'
import { mapPrintables, rowVariant, sizes } from './tableUtils'

type RowProps = {
    elements: TableDataSet
    idx?: number
    checkable?: boolean
    isHeader?: boolean
    tableType?: PANNELS
    editMenu?: boolean
    editable?: boolean
}

export const Row = ({
    elements,
    checkable,
    isHeader,
    idx,
    tableType = PANNELS.UNKNOWN,
    editMenu,
    editable,
}: RowProps) => {
    const [isEditable, setIsEditable] = useState(editable)
    const [rowInfo] = useState(elements)
    const makeEditable = () => {
        setIsEditable(!isEditable)
    }
    const handleDeletion = () => {
        const res = window.prompt(`Do you want to delete this row?\n${rowInfo.id}`, 'yes')
        if (res === 'yes') {
            console.log('delete')
        }
    }
    const handleChanges = (e: SyntheticEvent<HTMLElement>) => {
        if (isEditable) {
            const newData = e.currentTarget.innerText
            console.log(newData)
        }
    }

    const Items = mapPrintables(elements, tableType)

    return (
        <RowElement
            variant={rowVariant(isHeader, idx)}
            editable={isEditable}
            sizes={tableType && sizes[tableType]}
        >
            {checkable && <Check type={'checkbox'} />}
            {!isHeader && editMenu && <RowMenu edit={makeEditable} onDelete={handleDeletion} />}
            {isHeader && editMenu && <RowMenuSection />}
            {Items.map((item) => {
                if (isHeader) {
                    return (
                        <span key={`row_item_${item}_headerT`}>
                            <Typography.Header>{item}</Typography.Header>
                        </span>
                    )
                }
                return (
                    <span key={`row_item_${item}_rowT`}>
                        <Typography.Regular
                            editable={isEditable}
                            contentEditable={isEditable}
                            onBlur={(e) => handleChanges(e)}
                        >
                            {item}
                        </Typography.Regular>
                    </span>
                )
            })}
        </RowElement>
    )
}
