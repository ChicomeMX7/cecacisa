import { PropsWithChildren } from 'react'
import {
    ScreenContainer,
    ScrollableContainer,
    ScreenContentContainer,
    Board,
    LeftContainer,
    LeftTitle,
    SearchContainer,
    BoardContent,
    SideContainer,
    ToggleButtonContainer,
} from './Screen.styles'
import { Typography } from 'components/Typography'
import { SearchBar } from 'components/SearchBar'
import { Button } from 'components/Button'
import { useTogglePannelContext } from 'context/ToggleRightPannel/ToogleRPannel'
import { PANNELS } from 'hooks/useTogglePannel/useTogglePannel'
import { iKeyTranslations } from 'locales/translationKeys'
import { useTranslation } from 'hooks/useTranslations'

type ScreenProps = PropsWithChildren & {
    pannel: PANNELS
    id?: string
}
export enum PANNEL_ID {
    CONTENT = 'LP_CONTENT',
    UPLOAD = 'LP_UPLOADS',
    SCHEMAS = 'LP_SCHEMAS',
    ENDPOINTS = 'LP_ENDPOINTS',
    NODES = 'LP_NODES',
    USER = 'LP_USER',
}
const TITLES: Record<PANNEL_ID, iKeyTranslations> = {
    [PANNEL_ID.CONTENT]: 'common:leftPannelTitle.content',
    [PANNEL_ID.UPLOAD]: 'common:leftPannelTitle.uploads',
    [PANNEL_ID.SCHEMAS]: 'common:leftPannelTitle.schemas',
    [PANNEL_ID.ENDPOINTS]: 'common:leftPannelTitle.endpoints',
    [PANNEL_ID.NODES]: 'common:leftPannelTitle.nodes',
    [PANNEL_ID.USER]: 'common:leftPannelTitle.user',
}

type LeftPannelProps = PropsWithChildren & {
    id: PANNEL_ID
    showTitle?: boolean
    searchable?: boolean
}

export const Screen = ({ children, pannel, id }: ScreenProps) => {
    const { isPannelOpen } = useTogglePannelContext()
    const pannelSize =
        pannel === PANNELS.UPLOADS && isPannelOpen[pannel]
            ? 'bigger'
            : isPannelOpen[pannel]
            ? 'open'
            : 'closed'

    return (
        <ScreenContainer id={id}>
            <ScrollableContainer variant={pannelSize}>{children}</ScrollableContainer>
        </ScreenContainer>
    )
}

export const ScreenContent = ({ children, id }: ScreenProps) => {
    return <ScreenContentContainer id={id}>{children}</ScreenContentContainer>
}

export const SidePannel = ({ children, pannel, id }: ScreenProps) => {
    const { isPannelOpen, togglePanel } = useTogglePannelContext()
    const pannelSize =
        pannel === PANNELS.UPLOADS && isPannelOpen[pannel]
            ? 'bigger'
            : isPannelOpen[pannel]
            ? 'open'
            : 'closed'
    return (
        <SideContainer id={id} variant={pannelSize}>
            <ToggleButtonContainer>
                <Button.ClearIcon
                    icon={isPannelOpen[pannel] ? 'expand-right' : 'expand-left'}
                    action={() => togglePanel(pannel)}
                />
            </ToggleButtonContainer>
            {isPannelOpen[pannel] && children}
        </SideContainer>
    )
}

export const LeftSidePanel = ({
    children,
    id,
    showTitle = false,
    searchable = false,
}: LeftPannelProps) => {
    const { t } = useTranslation()

    return (
        <LeftContainer>
            <Board id={id}>
                {showTitle && (
                    <LeftTitle>
                        <Typography.Subtitle>{t(TITLES[id])}</Typography.Subtitle>
                    </LeftTitle>
                )}
                {searchable && (
                    <SearchContainer>
                        <SearchBar section="left" />
                    </SearchContainer>
                )}
                <BoardContent>{children}</BoardContent>
            </Board>
        </LeftContainer>
    )
}

Screen.displayName = 'Screen'
