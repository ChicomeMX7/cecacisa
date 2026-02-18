import { styled } from 'stitches.conf'
import { colors } from 'styles/colors'

export const Container = styled('div', {
    height: '155px',
    width: 'auto',
    marginHorizontal: '$5',
    background: colors.TRANSPARENT,
    gridRowStart: 1,
    gridColumnStart: 2,
    gridRowEnd: 2,
    gridColumnEnd: 6,
})

export const Line = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    minHeight: '$6',
})

export const Left = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    width: '50%',
})

export const Right = styled('div', {
    display: 'flex',
    flexDirection: 'row-reverse',
    width: '50%',
    gap: '$4',
    alignItems: 'center',
})

export const MenuButton = styled('div', {
    size: '$7',
    border: 'none',
    background: colors.TRANSPARENT,
    textAlign: 'center',
    paddingTop: '$4',
    marginLeft: '$5',
    cursor: 'pointer',
})

export const MenuContraint = styled('div', {
    background: colors.TRANSPARENT,
    display: 'block',
    position: 'relative',
    size: '$7',
    top: '$5',
    left: '-$5',
})
