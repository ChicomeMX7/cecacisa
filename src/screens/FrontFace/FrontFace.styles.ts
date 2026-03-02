import { keyframes, styled } from 'stitches.conf'
import { colors } from 'styles/colors'

const BKA = keyframes({
    '0%': { backgroundPosition: '0% 15%' },
    '50%': { backgroundPosition: '100% 88%' },
    '100%': { backgroundPosition: '0% 15%' },
})

export const Container = styled('div', {
    'margin': 0,
    'overflow': 'hidden',
    'position': 'relative',
    'paddingHorizontal': '$1',
    'paddingTop': '$2',
    'display': 'grid',
    'gridTemplateColumns': '100%',
    'gridTemplateRows': '100%',
    'gridGap': '10px',
    'width': '100vw',
    'height': '100vh',
    'justifyItems': 'center',
    'alignItems': 'center',
    'background': `linear-gradient(116deg, ${colors.DARK[300]}, ${colors.PRIMARY})`,
    'backgroundSize': '400% 400%',
    '-webkit-animation': `${BKA} 12s ease infinite`,
    '-moz-animation': `${BKA} 12s ease infinite`,
    'animation': `${BKA} 12s ease infinite`,
})

export const LogInBox = styled('div', {
    margin: '50%',
    overflow: 'hidden',
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: '35% 65%',
    width: 'clamp(320px, 1100px, 70%)',
    height: 'clamp(280px, 770px, 80%)',
    borderRadius: '$2',
    boxShadow: '$level3',
    background: colors.SURFACE[100],
})

export const UserEmail = styled('input', {
    'width': '100%',
    'height': '48px',
    'borderRadius': '$2',
    'marginTop': '$5',
    'marginBottom': '$1',
    'border': `2px solid ${colors.TEXT}60`,
    'paddingHorizontal': '$2',
    'outline': 'none',
    '&:focus': {
        border: `2px solid ${colors.PRIMARY}`,
    },
})

export const UserPassword = styled('input', {
    'width': '100%',
    'height': '48px',
    'borderRadius': '$2',
    'marginTop': '$5',
    'marginBottom': '$1',
    'border': `2px solid ${colors.TEXT}60`,
    'paddingHorizontal': '$4',
    'fontSize': '$title',
    'letterSpacing': '4px',
    'outline': 'none',
    '&:focus': {
        border: `2px solid ${colors.PRIMARY}`,
    },
})
export const LogInBoxLeft = styled('div', {
    padding: '$6',
    display: 'grid',
    alignContent: 'center',
})
export const NoticeSection = styled('span', {
    paddingVertical: '$6',
    paddingHorizontal: '$2',
    display: 'flex',
    flexDirection: 'row',
    justifyItems: 'flex-start',
    justifyContent: 'space-between',
    alignContent: 'center',
})

export const Check = styled('input', {
    color: colors.PRIMARY,
})

export const SpanS = styled('span', {
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'row',

    variants: {
        variant: {
            gap: {
                gap: '$2',
            },
            centred: {
                justifyContent: 'center',
                justifyItems: 'center',
                marginHorizontal: '$9',
                paddingHorizontal: '$12',
            },
            buttonize: {
                'cursor': 'pointer',
                '&:hover': {
                    color: colors.PRIMARY,
                    textDecoration: 'underline',
                },
            },
        },
    },
})

export const LogInBoxRight = styled('div', {
    backgroundImage:
        'url("https://cdna.artstation.com/p/assets/images/images/062/873/416/4k/jordi-van-hees-shot-001-copy2.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'right -150px bottom 0px',
})
