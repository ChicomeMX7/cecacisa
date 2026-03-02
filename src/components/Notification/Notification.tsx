import { FC, ComponentProps } from 'react'
import {
    NotificationContainer,
    NotificationContent,
    // CurveLine,
    // Division,
    // LineLeft,
    // LineRight,
} from './Notification.styles'
import { Icon, IconNames } from 'components/Icon'
import { Typography } from 'components/Typography'
import { colors } from 'styles/colors'
import { GraphicMedallion } from './GraphicMedallion'
// import { colors } from 'styles/colors'

// type SizeType = 'small' | 'big' | 'medium' | 'solo'
// type ParamsType = { icon: IconNames; color?: string; size?: SizeType; iconColor?: string }
// type GetIconType = (parms: ParamsType) => React.ReactNode

// const getIcon: GetIconType = ({ icon, color = colors.PRIMARY, size = 'small', iconColor }) => {
//     return <Icon color={iconColor ? iconColor : color} size={size} icon={icon} />
// }

export type NotificationProps = ComponentProps<typeof NotificationContainer> & {
    icon: IconNames
    color?: string
    action: () => void
}

export const Notification = ({ icon, color }: NotificationProps) => {
    return (
        <NotificationContainer
            css={{
                border: `1px solid ${color}`,
            }}
        >
            <Typography weight="fat">Notification</Typography>
            {/* <Division>
                <LineLeft />
                <CurveLine />
                <LineRight />
                </Division> */}
            <NotificationContent>
                <Icon icon={icon} size="medium" color={color} />
            </NotificationContent>
            <GraphicMedallion />
            <Icon icon="close" />
        </NotificationContainer>
    )
}

type CustomToggleProps = {
    action: () => void
}

const NotificationInfo: FC<CustomToggleProps> = ({ action }) => {
    return <Notification icon="info" color={colors.PRIMARY} action={action} />
}

const NotificationSuccess: FC<CustomToggleProps> = ({ action }) => {
    return <Notification icon="successbadge" color={colors.SUCCESS[200]} action={action} />
}

const NotificationConfirm: FC<CustomToggleProps> = ({ action }) => {
    return <Notification icon="exclamation" color={colors.TERTIARY} action={action} />
}

const NotificationError: FC<CustomToggleProps> = ({ action }) => {
    return <Notification icon="warning" color={colors.DANGER[200]} action={action} />
}

Notification.Info = NotificationInfo
Notification.Success = NotificationSuccess
Notification.Confirm = NotificationConfirm
Notification.Error = NotificationError
