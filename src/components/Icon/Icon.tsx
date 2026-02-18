import { ComponentProps } from 'react'
import { colors } from 'styles/colors'
import { IconRoot } from './Icon.styles'
import { IconNames } from './IconNames'

type IconOwnProps = ComponentProps<typeof IconRoot>
export type IconProps = IconOwnProps & {
    _name_?: string
    icon: IconNames
    label?: string
    color?: string
    css?: string
    viewBox?: string
}

export const Icon = ({
    icon,
    label,
    color,
    css,
    size = 'small',
    viewBox = '0 0 48 48',
}: IconProps) => {
    return (
        <IconRoot
            css={{
                fill: color ? color : colors.TEXT,
                ...(css as any),
            }}
            role={label ? 'img' : 'presentation'}
            size={size}
            viewBox={viewBox}
        >
            {label && <title>{label}</title>}
            <use xlinkHref={`/src/icon-sprite.svg#${icon}`}></use>
        </IconRoot>
    )
}
