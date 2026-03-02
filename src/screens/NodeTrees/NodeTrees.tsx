import { Screen, ScreenContent, LeftSidePanel, SidePannel, PANNEL_ID } from 'components/Screen'
// import {} from './NodeTrees.styles'
// import { useTranslation } from 'hooks/useTranslations'
import { ScreenHeader } from 'components/ScreenHeader'
import { SearchBar } from 'components/SearchBar'
import { Button } from 'components/Button'
import { PANNELS } from 'hooks/useTogglePannel/useTogglePannel'

export const NodeTrees = () => {
    // const { t } = useTranslation()

    const fake = function (): void {
        throw new Error('Function not implemented.')
    }

    return (
        <Screen pannel={PANNELS.NODES}>
            <LeftSidePanel id={PANNEL_ID.NODES} showTitle>
                {'testing content'}
            </LeftSidePanel>
            <ScreenHeader
                title={'Título del nodo abierto'}
                actions={
                    <>
                        <Button.MainAction action={fake} text={'action2'} />
                        <Button.MainAction action={fake} text={'action1'} />
                    </>
                }
            >
                <SearchBar section="items" />
            </ScreenHeader>
            <ScreenContent pannel={PANNELS.NODES}>{'sample'}</ScreenContent>
            <SidePannel pannel={PANNELS.NODES}>{'sample'}</SidePannel>
        </Screen>
    )
}
