import { styled } from 'stitches.conf'
import { colors } from 'styles/colors'

export const Container = styled('div', {
    display: 'flex',
    position: 'relative',
    margin: '0px',
    overflow: 'auto',
    width: '100%',
    height: '100%',
    background: colors.SURFACE[100],
    border: `1px solid ${colors.SURFACE[300]}`,
})
