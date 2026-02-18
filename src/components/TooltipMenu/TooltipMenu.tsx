import { ComponentProps } from 'react'
import { TooltipMenuRoot } from './TooltipMenu.styles'

type TooltipMenuOwnProps = ComponentProps<typeof TooltipMenuRoot>
export type TooltipMenuProps = TooltipMenuOwnProps & {
    size?: 'small' | 'medium' | 'large'
}

export const TooltipMenu = ({ children, size = 'medium' }: TooltipMenuProps) => {
    return <TooltipMenuRoot variant={size}>{children}</TooltipMenuRoot>
}
