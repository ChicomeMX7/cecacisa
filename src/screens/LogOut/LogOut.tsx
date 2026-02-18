import { Screen } from 'components/Screen'
import { Container } from './LogOut.styles'
import { PANNELS } from 'hooks/useTogglePannel/useTogglePannel'

export const LogOut = () => {
    return (
        <Screen pannel={PANNELS.CONTENT}>
            <Container>
                <div>LogOut</div>
            </Container>
        </Screen>
    )
}
