import { styled } from 'stitches.conf'
import { colors } from 'styles/colors'

export const LayoutContainer = styled('main', {
    margin: 0,
    padding: 0,
    bc: colors.SURFACE[400],
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
})

export const LeftPannel = styled('div', {
    display: 'flex',
    overflowX: 'auto',
    background: colors.SURFACE[200],
    width: '$7',
    height: '100%',
    boxShadow: '$level1',
    zIndex: 100,
})

export const MainRoot = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: 0,
    width: 'calc(100% - $7)',
    height: '100%',
})
