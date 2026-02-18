import { styled } from 'stitches.conf'
import { colors } from 'styles/colors'

/* Container for the whole component */
export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '1em',
    maxWidth: '20em',
})

/* The switch - the box around the slider */
export const Switch = styled('label', {
    'alignSelf': 'center',
    'font-size': '17px',
    'position': 'relative',
    'display': 'inline-block',
    'width': '3em',
    'height': '1.5em',
})

// /* Hide default HTML checkbox */
export const Input = styled('input', {
    type: 'checkbox',
    opacity: 0,
    width: 0,
    height: 0,
})

// /* The slider */
export const Slider = styled('span', {
    'position': 'absolute',
    'cursor': 'pointer',
    'top': 0,
    'left': 0,
    'right': 0,
    'bottom': 0,
    'border-radius': '30px',
    'box-shadow': `0 0 0 1px ${colors.PRIMARY}`,
    'border': '1px solid transparent',
    'overflow': 'hidden',
    'transition': '.4s',
    'background': 'transparent',
    '&::before': {
        position: 'absolute',
        content: '',
        width: '95%',
        height: '100%',
        borderRadius: '30px',
        transform: 'translateX(-50%)',
        transition: '.4s',
    },
})
