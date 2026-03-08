import { Typography } from 'components/Typography'
import { Check, RowElement, RowMenuSection } from './DataTable.styles'
import { TableDataSet, RowDataTypes } from 'models'
import { PANNELS } from 'hooks/useTogglePannel/useTogglePannel'
import { Fragment, SyntheticEvent, useState } from 'react'
import { RowMenu } from './RowMenu'
import { mapHeaderTitles, mapPrintables, rowVariant, sizes } from './tableUtils'
import { useTranslation } from 'hooks/useTranslations'

type RowProps =
    | {
          idx?: number
          checkable?: boolean
          isHeader?: boolean
          tableType?: PANNELS
          editMenu?: boolean
          editable?: boolean
          elements: Partial<Pick<TableDataSet<RowDataTypes>, 'data'>>
          header?: undefined
      }
    | {
          idx?: number
          checkable?: boolean
          isHeader?: boolean
          tableType?: PANNELS
          editMenu?: boolean
          editable?: boolean
          elements?: undefined
          header: Partial<Pick<TableDataSet<RowDataTypes>, 'header'>>
      }

export const Row = ({
    elements,
    header,
    checkable,
    isHeader,
    idx,
    tableType = PANNELS.UNKNOWN,
    editMenu,
    editable,
}: RowProps) => {
    const { t, selectedLanguage } = useTranslation()
    const [isEditable, setIsEditable] = useState(editable)
    const [rowInfo] = useState(elements ? elements : { uuid: '-' })
    const makeEditable = () => {
        setIsEditable(!isEditable)
    }
    const handleDeletion = (uuid: string) => {
        const res = window.prompt(`Do you want to delete this row?\n${uuid}`, 'yes')
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

    const items = mapPrintables(elements, tableType)
    const headerItems = mapHeaderTitles(header as Record<string, boolean>)

    return (
        <RowElement variant={rowVariant(isHeader, idx)} editable={isEditable}>
            {isHeader && (
                <>
                    {headerItems.map(({ label, visible, field }, idx) => {
                        if (!visible) return null
                        return (
                            <Typography.Header key={`table_title_${field}_${idx}`}>
                                {t(label as keyof typeof selectedLanguage)}
                            </Typography.Header>
                        )
                    })}
                </>
            )}
            {/* {!isHeader &&
                Items.length &&
                Items.map((item,i) => {

                    return (
                        <Fragment key={`fr_table_${i}_${item.uuid}`}>
                            {checkable && <Check type={'checkbox'} />}
                            {editMenu && (
                                <RowMenu
                                    edit={makeEditable}
                                    onDelete={() => handleDeletion(item.uuid ?? '')}
                                />
                            )}
                            <span key={`row_item_${item}_rowT`}>
                                <Typography.Regular
                                    editable={isEditable}
                                    contentEditable={isEditable}
                                    onBlur={(e) => handleChanges(e)}
                                >
                                    {item}
                                </Typography.Regular>
                            </span>
                        </Fragment>
                    )
                })} */}
        </RowElement>
    )
}
