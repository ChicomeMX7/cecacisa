import { PANNELS } from 'hooks/useTogglePannel/useTogglePannel'
import { BotomSection, RowSection, ScrollSection, Table, TableHeader } from './DataTable.styles'
import { Row } from './TableRow'
import { TableDataSet } from 'models'

type TableProps = {
    data: TableDataSet[]
    headerData: TableDataSet
    id?: string
    checkable?: boolean
    hasMenu?: boolean
    editable?: boolean
    tableType?: PANNELS
}

export const DataTable = ({
    data,
    headerData,
    id,
    checkable,
    tableType,
    hasMenu,
    editable,
}: TableProps) => {
    return (
        <Table id={id}>
            <ScrollSection>
                <TableHeader>
                    <Row
                        elements={headerData}
                        checkable={checkable}
                        tableType={tableType}
                        editMenu={hasMenu}
                        isHeader
                    />
                </TableHeader>
                <RowSection>
                    {data.map((row, i) => (
                        <Row
                            key={`row_line_${i}_${row.name}`}
                            idx={i}
                            elements={row}
                            checkable={checkable}
                            tableType={tableType}
                            editMenu={hasMenu}
                            editable={editable}
                        />
                    ))}
                </RowSection>
            </ScrollSection>
            <BotomSection>DataTable</BotomSection>
        </Table>
    )
}
