import { LeftSidePanel, PANNEL_ID, Screen, ScreenContent, SidePannel } from 'components/Screen'
import { Container } from './DatabaseSchemas.styles'
import { useTranslation } from 'hooks/useTranslations'
import { SearchBar } from 'components/SearchBar'
import { ScreenHeader } from 'components/ScreenHeader'
import { PANNELS } from 'hooks/useTogglePannel/useTogglePannel'
import { Button } from 'components/Button'

export const DatabaseSchemas = () => {
    const { t } = useTranslation()

    return (
        <Screen pannel={PANNELS.SCHEMAS}>
            <LeftSidePanel id={PANNEL_ID.SCHEMAS} showTitle>{'testing content'}</LeftSidePanel>
            <ScreenHeader
                title={'Título del esquema seleccionado'}
                actions={
                    <>
                        <Button.MainAction action={() => {}} text={'action1'} />
                    </>
                }
            >
                <SearchBar section="items" />
            </ScreenHeader>
            <ScreenContent pannel={PANNELS.SCHEMAS}>
                <Container />
                {'sample'}
            </ScreenContent>
            <SidePannel pannel={PANNELS.SCHEMAS}>{'sample'}</SidePannel>
        </Screen>
    )
}
