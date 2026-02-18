import { styled } from 'stitches.conf'
import { colors } from 'styles/colors'

export const TooltipMenuRoot = styled('div', {
    backgroundColor: colors.SURFACE[400],
    border: `1px solid ${colors.SURFACE[600]}ee`,
    borderRadius: '$1',
    width: '224px',
    height: '272px',
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    boxShadow: '$level2',
    padding: '$2',
    zIndex: '$max',

    variants: {
        variant: {
            small: {
                width: '200px',
                height: '200px',
                top: '$3',
                left: '-$5',
            },
            medium: {
                width: '224px',
                top: '0',
                left: '0',
            },
            large: {
                width: '224px',
                top: '$5',
                left: '-$5',
            },
        },
    },
})
