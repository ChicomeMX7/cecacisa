import { PANNELS } from 'hooks/useTogglePannel/useTogglePannel'
import { BotomSection, RowSection, ScrollSection, Table, TableHeader } from './DataTable.styles'
import { Row } from './TableRow'
import { TableDataSet } from 'models'

type TableProps = {
    data: TableDataSet<any>
    id?: string
    tableType?: PANNELS
}

export const DataTable = ({
    data,
    id,
    tableType,
}: TableProps) => {
    return (
        <Table id={id}>
            <TableHeader>
                <Row
                    header={data.header}
                    checkable={!data.locked}
                    tableType={tableType}
                    editMenu={data.hasMenu}
                    isHeader
                />
            </TableHeader>
            <ScrollSection>
                <RowSection>
                    {data.data.map((row, i) => (
                        <Row
                            key={`row_line_${i}_${row.id}`}
                            idx={i}
                            elements={row}
                            checkable={!row.locked}
                            tableType={tableType}
                            editMenu={!row.locked}
                            editable={!row.locked}
                        />
                    ))}
                </RowSection>
            </ScrollSection>
            <BotomSection>
                <div>Filers</div>
                <div>search</div>
                <div>Pagination</div>
            </BotomSection>
        </Table>
    )
}
