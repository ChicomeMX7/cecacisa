import { css, styled } from 'stitches.conf'
import { colors } from 'styles/colors'

export const NotificationContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: 80,
    right: 0,
    width: 450,
    padding: '0 20px',
    zIndex: 300,
    backgroundColor: colors.SURFACE[300],
    defaultVariants: {
        type: 'info',
    },
})

export const NotificationContent = styled('div', {
    display: 'flex',
})

export const Division = styled('div', {
    position: 'relative',
    display: 'block',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: '324px',
    height: 0,
})
export const LineLeft = styled('div', {
    position: 'absolute',
    display: 'block',
    backgroundColor: 'inherit',
    height: '3px',
    width: '100px',
    left: '0',
    top: '2px',
})
export const LineRight = styled('div', {
    position: 'absolute',
    display: 'block',
    backgroundColor: 'inherit',
    height: '3px',
    width: '100px',
    right: '0',
    top: '2px',
})
export const CurveLine = styled('div', {
    display: 'block',
    height: '24px',
    width: '124px',
    backgroundColor: 'red',
    mask: `radial-gradient(90px at 50% calc(100% + 78px),
    rgba(0, 0, 0, 0) calc(99% - 2px),
    rgb(0, 0, 0) calc(101% - 2px),
    rgb(0, 0, 0) 99%,
    rgba(0, 0, 0, 0) 101%) 
    calc(49% - 80px) calc(50% - 20.5px) / 160px 42px, 
    
    radial-gradient(88px at 50% -78px, rgba(0, 0, 0, 0) calc(99% - 2px), 
    rgb(0, 0, 0) calc(100% - 2px), 
    rgb(0, 0, 0) 99%, 
    rgba(0, 0, 0, 0) 101%)
    50% calc(50% + 21px) / 160px 42px`,
})

export const gradients = css({
    lineGradient: 'linear-gradient(90deg,#2a7b9b 0%, #57c785 50%, #eddd53 100%)',
})

export const Path = styled('path', {
    display: 'block',
    fill: 'skyblue',
    stroke: 'none',

    variants: {
        type: {
            line: {
                fill: 'url(#lineGradient)',
            },
            circle: {
                stroke: colors.TEXT,
                fill: 'none',
                strokeWidth: 0.3,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeMiterlimit: 10,
            },
            p_x5F_1: {
                fill: colors.TEXT,
            },
            p_x5F_2: {
                fill: colors.TEXT,
            },
            p_x5F_3: {
                fill: colors.TEXT,
            },
        },
    },
})
/* 
.box {
  --mask:
    radial-gradient(88.66px at 50% calc(100% + 78px),#0000 calc(99% - 2px),#000 calc(101% - 2px) 99%,#0000 101%) calc(50% - 80px) calc(50% - 21px + .5px)/160px 42px repeat-x,
    radial-gradient(88.66px at 50% -78px,#0000 calc(99% - 2px),#000 calc(101% - 2px) 99%,#0000 101%) 50% calc(50% + 21px)/160px 42px repeat-x;
  -webkit-mask: var(--mask);
          mask: var(--mask);
}
*/
