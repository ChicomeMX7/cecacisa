import { styled } from 'stitches.conf'
import { colors } from 'styles/colors'

export const Container = styled('div', {
    background: colors.WHITE,
    fontFamily: '$sans',
    display: 'flex',
    flexDirection: 'column',
    width: 600,
    height: '100%',
    padding: '$1',
    gap: '$1',

    variants: {},
})

export const TextArea = styled('textarea', {
    border: `1px solid ${colors.DARK[200]}38`,
    borderRadius: '$2',
    fontFamily: '$sans',
    fontSize: '$normal',
    padding: '$4',
    display: 'flex',
    width: '100%',
    height: '80%',
    outline: 'none',
    resize: 'none',
    boxShadow: 'inset -2px 3px 11px 0px #1f2e34b5',
    background: '#efeeebf0',
    color: '#404e4f',
    letterSpacing: '1px',

    variants: {},
})
