import { styled } from 'stitches.conf'
import { colors } from 'styles/colors'

export const Table = styled('div', {
    display: 'grid',
    gridTemplateRows: '1fr 32px',
    gridTemplateColumns: '1fr',
    gap: '0',
    padding: '$4',
    paddingBottom: '$1',
    width: '100%',
    height: '100%',
    background: colors.TRANSPARENT,
})

export const TableHeader = styled('div', {
    display: 'grid',
    gridTemplateRows: '68px',
    gridTemplateColumns: '1fr',
    width: '100%',
    height: '68px',
    alignItems: 'center',
    background: colors.SURFACE[400],
    margin: 0,
    padding: 0,
})

export const ScrollSection = styled('div', {
    overflowX: 'scroll',
    overflowY: 'hidden',
    margin: 0,
    padding: 0,
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '68px 1fr',
    width: 'auto',
    height: 'auto',
})

export const RowSection = styled('div', {
    display: 'grid',
    gridTemplateRows: 'repeat(14,38px)',
    gridTemplateColumns: '1fr',
    width: '100%',
    height: 'auto',
    background: colors.TRANSPARENT,
    margin: 0,
    padding: 0,
})

export const RowMenuSection = styled('div', {
    background: colors.TRANSPARENT,
    display: 'flex',
    flexDirection: 'row',
    width: '$10',
    gap: '$2',
    position: 'relative',
})

export const BotomSection = styled('div', {
    display: 'grid',
    gridTemplateRows: '32px',
    gridTemplateColumns: '1fr',
    width: '100%',
    height: '32px',
    background: colors.SURFACE[400],
    margin: 0,
    padding: 0,
})

export const RowElement = styled('div', {
    'display': 'flex',
    'flexDirection': 'row',
    'gap': '$5',
    'alignItems': 'center',
    'width': '100%',
    'height': '30px',
    'background': colors.SURFACE[100],
    'marginTop': '$1',
    'paddingHorizontal': '$3',

    '& span': {
        minWidth: '200px',
    },

    'variants': {
        editable: {
            true: {
                background: `${colors.SUCCESS[300]}25`,
            },
            false: {},
        },
        variant: {
            header: {
                background: colors.TRANSPARENT,
            },
            even: {
                background: colors.SURFACE[200],
            },
            odd: {
                background: colors.SURFACE[100],
            },
        },
        sizes: {
            schemas: {
                '& span:nth-child(3)': {
                    width: '250px',
                },
                '& span:nth-child(4)': {
                    width: '300px',
                },
                '& span:nth-child(5)': {
                    width: '200px',
                },
            },
        },
    },
})

export const Check = styled('input', {
    display: 'inline-block',
    size: '$4',
    outline: 'none',
    background: colors.SUCCESS[300],
    margin: 0,
    padding: 0,
})
