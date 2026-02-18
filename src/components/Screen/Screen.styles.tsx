import { styled } from 'stitches.conf'
import { colors } from 'styles/colors'

export const ScreenContainer = styled('div', {
    position: 'relative',
    overflow: 'auto',
    width: '100%',
    height: '100%',
    paddingLeft: '$3',
})

export const ScrollableContainer = styled('div', {
    paddingTop: '$1',
    overflow: 'auto',
    height: '100%',
    bc: colors.TRANSPARENT,
    display: 'grid',
    gridTemplateRows: '155px 1fr',
    gridTemplateColumns: `275px 1fr 1fr 378px`,
    gap: '0px',
    transition: 'all 0.3s ease-in-out',

    variants: {
        variant: {
            bigger: {
                gridTemplateColumns: `275px 1fr 1fr 674px`,
            },
            open: {
                gridTemplateColumns: `275px 1fr 1fr 378px`,
            },
            closed: {
                gridTemplateColumns: `275px 1fr 1fr 40px`,
            },
        },
    },
})

export const ScreenContentContainer = styled('div', {
    background: colors.SURFACE[100],
    border: `1px solid ${colors.SURFACE[300]}`,
    transition: 'all 0.3s ease-in-out',
    borderRadius: '$1',
    marginLeft: '$5',
    marginBottom: '$4',
    gridRowStart: 2,
    gridRowEnd: 3,
    gridColumnStart: 2,
    gridColumnEnd: 4,
    marginRight: '$4',
    boxShadow: '$level1',
    overflow: 'hidden',
})

export const SideContainer = styled('div', {
    transition: 'all 0.3s ease-in-out',
    borderRadius: '$1',
    background: colors.SURFACE[100],
    border: `1px solid ${colors.SURFACE[500]}`,
    marginRight: '$5',
    marginBottom: '$4',
    gridRowStart: 2,
    gridRowEnd: 3,
    gridColumnStart: 4,
    gridColumnEnd: 4,
    position: 'relative',

    variants: {
        variant: {
            bigger: {
                width: '648px',
            },
            open: {
                width: '354px',
            },
            closed: {
                width: '18px',
                opacity: 0.6,
            },
        },
    },
})

export const Board = styled('div', {
    background: colors.SURFACE[100],
    border: `1px solid ${colors.SURFACE[300]}`,
    height: '100%',
    width: '275px',
    marginRight: '$4',
    borderRadius: '$3',
    boxShadow: '$level1',
})

export const BoardContent = styled('div', {
    paddingHorizontal: '$4',
})

export const LeftContainer = styled('div', {
    background: colors.TRANSPARENT,
    marginBottom: '$4',
    gridRowStart: 1,
    gridColumnStart: 1,
    gridRowEnd: 4,
    gridColumnEnd: 2,
    zIndex: 100,
})

export const LeftTitle = styled('div', {
    width: '100%',
    background: colors.TRANSPARENT,
    marginVertical: '$3',
    paddingLeft: '$4',
})

export const SearchContainer = styled('div', {
    width: '100%',
    background: colors.TRANSPARENT,
    paddingHorizontal: '$3',
    marginBottom: '$4',
})

export const ToggleButtonContainer = styled('span', {
    'width': '$5',
    'height': '$5',
    'background': colors.SURFACE[300],
    'borderRadius': '$pill',
    'border': `2px solid ${colors.TRANSPARENT}`,
    'position': 'absolute',
    'left': '-8px',
    'top': '50%',
    'zIndex': 200,
    'opacity': 0.6,

    '&:hover': {
        border: `2px solid ${colors.PRIMARY}`,
        opacity: 1,
    },
})
