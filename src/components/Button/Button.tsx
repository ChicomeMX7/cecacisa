import { ComponentProps } from 'react'
import { Icon, IconNames } from 'components/Icon'
import { Typography, TextColors } from 'components/Typography'
import { ButtonContainer } from './Button.styles'
import { colors } from 'styles/colors'

export type ButtonProps = ComponentProps<typeof ButtonContainer> & {
    text?: string | null
    action: () => void
    icon?: IconNames
    disabled?: boolean
    outline?: boolean
    color?: string
    size?: SizeType
    iconColor?: string
}
type SizeType = 'small' | 'big' | 'medium' | 'solo'
type ParamsType = { icon: IconNames; color?: string; size?: SizeType; iconColor?: string }

type GetIconType = (parms: ParamsType) => React.ReactNode

type GetFontColorType = (parms: ComponentProps<typeof ButtonContainer>) => TextColors

const getIcon: GetIconType = ({ icon, color = colors.PRIMARY, size = 'small', iconColor }) => {
    return <Icon color={iconColor ? iconColor : color} size={size} icon={icon} />
}

const getFontColor: GetFontColorType = ({ variant = 'default' }) => {
    switch (variant) {
        case 'primary':
            return 'light' as TextColors
        case 'secondary':
            return 'light' as TextColors
        case 'action':
            return 'faint' as TextColors
        case 'icon':
            return 'default' as TextColors
        default:
            return 'default' as TextColors
    }
}

export const Button = ({
    text,
    icon,
    color,
    action,
    variant = 'primary',
    disabled = false,
    outline = false,
    size,
    iconColor,
    ...rest
}: ButtonProps) => {
    return (
        <ButtonContainer variant={variant} disabled={disabled} onClick={action} {...rest}>
            {icon && getIcon({ icon, color, size, iconColor })}
            {text && <Typography.Short color={getFontColor({ variant })}>{text}</Typography.Short>}
        </ButtonContainer>
    )
}

const MainActionButton = ({
    text,
    variant,
    color = colors.TEXT,
    onClick = () => {},
    size,
    ...rest
}: ButtonProps) => {
    return <Button text={text} variant={'primary'} color={color} size={'medium'} {...rest} />
}

const ActionButton = ({
    text,
    variant,
    color = colors.TEXT,
    onClick = () => {},
    size,
    ...rest
}: ButtonProps) => {
    return <Button text={text} variant={'action'} color={color} {...rest} />
}

const RoundAction = ({
    text,
    variant,
    color = colors.TEXT,
    onClick = () => {},
    size,
    iconColor,
    ...rest
}: ButtonProps) => {
    return (
        <Button text={text} variant={'roundAction'} color={color} iconColor={iconColor} {...rest} />
    )
}

const IconButton = ({
    color = colors.PRIMARY,
    onClick = () => {},
    size = 'small',
    ...rest
}: ButtonProps) => {
    return <Button variant={'icon'} color={color} size={size} {...rest} />
}

const ClearIconButton = ({
    color = colors.PRIMARY,
    onClick = () => {},
    size = 'solo',
    ...rest
}: ButtonProps) => {
    return <Button variant={'clearicon'} color={color} size={size} {...rest} />
}

Button.MainAction = MainActionButton
Button.Action = ActionButton
Button.RoundAction = RoundAction
Button.Icon = IconButton
Button.ClearIcon = ClearIconButton
