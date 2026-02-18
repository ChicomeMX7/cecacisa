import { Container, LeftSection, RightSection, ProfileHolder } from './UpperBarControler.styles'
import { Typography } from 'components/Typography'
import { Image } from 'components/Image'
import { useSectionCoordinator } from 'hooks/useSectionCoordinator'
import { Button } from 'components/Button'
import { colors } from 'styles/colors'
import { SearchBar } from 'components/SearchBar'

export const UpperBarControler = () => {
    const { sectionName } = useSectionCoordinator()

    const handleOpenSettings = () => {
        console.log('open settings')
    }
    return (
        <Container>
            <LeftSection>
                <Typography.Subtitle color={'default'}>{sectionName}</Typography.Subtitle>
            </LeftSection>

            <SearchBar section="top" />

            <RightSection>
                <Button.RoundAction
                    text={null}
                    color={colors.PRIMARY}
                    iconColor={colors.SURFACE[300]}
                    icon={'settings'}
                    action={handleOpenSettings}
                />
                <Button.RoundAction
                    text={null}
                    color={colors.PRIMARY}
                    iconColor={colors.SURFACE[300]}
                    icon={'notifications'}
                    action={handleOpenSettings}
                />
                <ProfileHolder>
                    <Image
                        variant={'round'}
                        label={'user-profile-picture-or-image'}
                        source="https://i.imgur.com/rdQkFEv.png"
                    />
                </ProfileHolder>
            </RightSection>
        </Container>
    )
}
