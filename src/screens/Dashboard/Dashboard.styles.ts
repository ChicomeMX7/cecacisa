import { styled } from 'stitches.conf'
import { colors } from 'styles/colors'

export const Container = styled('div', {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    position: 'relative',
    margin: 0,
    padding: '$2',
    overflow: 'auto',
    width: '100%',
    height: '100%',
    border: `1px solid ${colors.TERTIARY}`,
    background: colors.TRANSPARENT,
})
