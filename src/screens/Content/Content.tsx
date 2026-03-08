import { LeftSidePanel, PANNEL_ID, Screen, ScreenContent, SidePannel } from 'components/Screen'
import { Container } from './Content.styles'
import { PANNELS } from 'hooks/useTogglePannel/useTogglePannel'
import { ScreenHeader } from 'components/ScreenHeader'
import { Button } from 'components/Button'
import { DataTable } from 'components/DataTable'
import { useState } from 'react'
import { schemasTestData } from 'fixtures/schemas'

export const Content = () => {

    const [tableData] = useState(schemasTestData)

    return (
        <Screen pannel={PANNELS.CONTENT}>
            <LeftSidePanel id={PANNEL_ID.CONTENT} showTitle searchable>
                {'testing content'}
            </LeftSidePanel>
            <ScreenHeader
                title={tableData.title}
                actions={
                    <>
                        <Button.MainAction action={() => {}} text={'action1'} />
                        <Button.MainAction action={() => {}} text={'action1'} />
                        <Button.MainAction action={() => {}} text={'action1'} />
                    </>
                }
            ></ScreenHeader>
            <ScreenContent pannel={PANNELS.CONTENT}>
                <DataTable
                    data={tableData}
                    tableType={PANNELS.SCHEMAS}
                />
            </ScreenContent>
            <SidePannel pannel={PANNELS.CONTENT}>
                <Container>{'Container sample'}</Container>
            </SidePannel>
        </Screen>
    )
}
