import { useCallback } from 'react'
import logo from 'assets/logo.png'
import { Button } from 'components/Button'
import { Container, Logo } from './LeftBarControler.styles'
import { colors } from 'styles/colors'
import { APP_PATH, NavigationAppType } from 'models'
import { Link } from 'react-router-dom'
import { iKeyTranslations } from 'locales/translationKeys'
import { useSectionCoordinator } from 'hooks/useSectionCoordinator'
import { useTranslation } from 'hooks/useTranslations'

export const NavigationApp: NavigationAppType = [
    { name: 'common:menu.content', path: APP_PATH.CONTENT, icon: 'sort' },
    { name: 'common:menu.schemas', path: APP_PATH.SCHEMAS, icon: 'database' },
    { name: 'common:menu.endpoints', path: APP_PATH.ENDPOINTS, icon: 'code' },
    { name: 'common:menu.uploads', path: APP_PATH.UPLOAD, icon: 'gallery' },
    { name: 'common:menu.nodes', path: APP_PATH.NODES, icon: 'node_tree' },
    { name: 'common:menu.logout', path: APP_PATH.LOGOUT, icon: 'logout' },
]

export const LeftBarControler = () => {
    const { t } = useTranslation()
    const { changeSection } = useSectionCoordinator()
    const handleSectionChange = useCallback((item: iKeyTranslations) => {
        changeSection(t(item))
    }, [])
    const voidFn = () => {}

    return (
        <Container>
            <Link to={APP_PATH.DASHBOARD}>
                <Logo
                    src={logo}
                    alt="Logo"
                    onClick={() => {
                        handleSectionChange('common:menu.home')
                    }}
                />
            </Link>
            {NavigationApp.map(({ icon, name, path }, index) => {
                return (
                    <span key={`controllers_button_${index}`}>
                        <Link
                            to={path}
                            onClick={() => {
                                handleSectionChange(name)
                            }}
                        >
                            <Button.Action
                                text={null}
                                color={colors.PRIMARY}
                                icon={icon}
                                action={voidFn}
                            ></Button.Action>
                        </Link>
                    </span>
                )
            })}
        </Container>
    )
}
