import { Screen } from 'components/Screen'
import { Container } from './Settings.styles'
import { Typography } from 'components/Typography'
import { ScreenHeader } from 'components/ScreenHeader'
import { PANNELS } from 'hooks/useTogglePannel/useTogglePannel'

export const Settings = () => {
    return (
        <Screen pannel={PANNELS.CONTENT}>
            <ScreenHeader title="Settings"></ScreenHeader>
            <Container>
                <Typography>user settings?</Typography>
            </Container>
        </Screen>
    )
}
