import { Screen, ScreenContent, SidePannel } from 'components/Screen'
import { Typography } from 'components/Typography'
import { Container } from './Dashboard.styles'
import { useInstanceData } from 'hooks/useInstanceData'
import { useTranslation } from 'hooks/useTranslations'
import { PANNELS } from 'hooks/useTogglePannel/useTogglePannel'
import { ScreenHeader } from 'components/ScreenHeader'

export const Dashboard = () => {
    const { t } = useTranslation()
    const title = t('common:menu.home')
    const { getLatestChanges } = useInstanceData()
    const activeBullets = getLatestChanges()

    return (
        <Screen pannel={PANNELS.DASHBOARD}>
            <ScreenHeader title={'Dashboard(Wall) notifications'} actions={<></>}></ScreenHeader>
            <ScreenContent pannel={PANNELS.DASHBOARD}>
                <Container>
                    <Typography.Boom>{`Typography.Boom: ${title}`}</Typography.Boom>
                    <Typography.Title>{`Typography.Title: ${title}`}</Typography.Title>
                    <Typography.Subtitle>{`Typography.Subtitle: ${title}`}</Typography.Subtitle>
                    <Typography.Big>{`Typography.Big: ${title}`}</Typography.Big>
                    <Typography.Header>{`Typography.Header: ${title}`}</Typography.Header>
                    <Typography.Heavy>{`Typography.Heavy: ${title}`}</Typography.Heavy>
                    <Typography.Regular>{`Typography.Regular: ${title}`}</Typography.Regular>
                    <Typography.Short>{`Typography.Short: ${title}`}</Typography.Short>
                    <Typography.Small>{`Typography.Small: ${title}`}</Typography.Small>
                    <hr />
                </Container>
            </ScreenContent>
            <SidePannel pannel={PANNELS.SCHEMAS}>
                <Typography.Small>{new Date().toLocaleString(navigator.language)}</Typography.Small>
                {activeBullets.map((txt, i) => {
                    return <Typography.Small key={`id_key_${i}`}>{txt}</Typography.Small>
                })}
            </SidePannel>
        </Screen>
    )
}
