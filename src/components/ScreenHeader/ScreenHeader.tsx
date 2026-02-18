import { PropsWithChildren, FunctionComponent, ReactElement, useState } from 'react'
import { Container, Left, Line, MenuButton, MenuContraint, Right } from './ScreenHeader.styles'
import { Typography } from 'components/Typography'
import { colors } from 'styles/colors'
import { Button } from 'components/Button'

type ScreenHeaderProps = {
    title: string
    menu?: ReactElement
    metadata?: ReactElement
    actions?: ReactElement
}

export const ScreenHeader: FunctionComponent<PropsWithChildren & ScreenHeaderProps> = ({
    children,
    title,
    menu,
    metadata,
    actions,
}) => {
    const [showMenu, setShowMenu] = useState(false)
    const displayMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <Container>
            <Line>
                <Left>
                    <Typography.Title>{title}</Typography.Title>
                    {menu && (
                        <>
                            <MenuButton>
                                <Button.ClearIcon
                                    action={displayMenu}
                                    icon={'more'}
                                    color={colors.TEXT}
                                    size={'big'}
                                />
                            </MenuButton>
                            <MenuContraint>{showMenu && menu}</MenuContraint>
                        </>
                    )}
                </Left>
                <Right>{actions}</Right>
            </Line>
            <Line>{metadata}</Line>
            <Line>{children}</Line>
        </Container>
    )
}
