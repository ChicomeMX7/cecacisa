import { styled } from 'stitches.conf'
import { colors } from 'styles/colors'

export const Container = styled('div', {
    'margin': 0,
    'width': '100%',
    'height': '100%',
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
    'gap': '$5',
    'justifyContent': 'center',
    'background': colors.SURFACE[100],
    'border': `1px solid ${colors.SURFACE[300]}`,

    '& > span:last-child': {
        bottom: '$5',
        position: 'absolute',
    },
    '& > a:nth-child(1)': {
        top: '$2',
        position: 'absolute',
    },
})

export const Logo = styled('img', {
    margin: 0,
    paddingTop: '$1',
    width: '38px',
    height: 'auto',
    cursor: 'pointer',
})
