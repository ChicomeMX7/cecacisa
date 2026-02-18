import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'
import { colors } from 'styles/colors'

export const { styled, css, theme, config, getCssText, globalCss, keyframes } = createStitches({
    theme: {
        shadows: {
            level1: `0px 2px 8px 0px ${colors.DARK[300]}40`,
            level2: `0px 5px 12px 2px ${colors.DARK[300]}45`,
            level3: `0px 10px 24px 4px ${colors.DARK[300]}50`,
            level4: `0px 12px 28px 6px ${colors.DARK[300]}60`,
        },
        space: {
            1: '4px',
            2: '8px',
            3: '12px',
            4: '16px',
            5: '24px',
            6: '32px',
            7: '48px',
            8: '64px',
            9: '80px',
        },
        sizes: {
            1: '4px',
            2: '8px',
            3: '12px',
            4: '16px',
            5: '24px',
            6: '32px',
            7: '48px',
            8: '64px',
            9: '80px',
            10: '96px',
            11: '108px',
            12: '200px',
            button: '24px',
            input: '28px',
        },
        fonts: {
            sans: "'Roboto', sans-serif",
        },
        radii: {
            1: '4px',
            2: '6px',
            3: '8px',
            4: '12px',
            round: '50%',
            pill: '250px',
        },
        zIndices: {
            1: '100',
            2: '200',
            3: '300',
            4: '400',
            max: '999',
        },
    },
    media: {
        bp1: '(min-width: 520px)',
        bp2: '(min-width: 900px)',
        bp3: '(min-width: 1200px)',
        bp4: '(min-width: 1800px)',
        motion: '(prefers-reduced-motion)',
        hover: '(any-hover: hover)',
        dark: '(prefers-color-scheme: dark)',
        light: '(prefers-color-scheme: light)',
    },
    utils: {
        bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
            backgroundColor: value,
        }),
        bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({
            boxShadow: value,
        }),
        ox: (value: Stitches.PropertyValue<'overflowX'>) => ({
            overflowX: value,
        }),
        oy: (value: Stitches.PropertyValue<'overflowY'>) => ({
            overflowY: value,
        }),
        paddingHorizontal: (value: Stitches.PropertyValue<'margin'>) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        paddingVertical: (value: Stitches.PropertyValue<'margin'>) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
        marginHorizontal: (value: Stitches.PropertyValue<'margin'>) => ({
            marginLeft: value,
            marginRight: value,
        }),
        marginVertical: (value: Stitches.PropertyValue<'margin'>) => ({
            marginTop: value,
            marginBottom: value,
        }),
        userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
            WebkitUserSelect: value,
            userSelect: value,
        }),
        size: (value: Stitches.PropertyValue<'width'>) => {
            const str = value.toString()
            const n = str.indexOf(' ') > 0 ? str.split(' ') : [str, str]
            return {
                width: n[0],
                height: n[1],
            }
        },
        baseInputBox: (value: Stitches.PropertyValue<'borderRadius'>) => {
            return {
                'outline': 'none',
                'border': 'none',
                'borderRadius': value,
                'fontWeight': 'bold',
                'fontFamily': 'monospace',
                'fontSize': '14pt',
                'color': colors.TEXT,
                '&:focus': {
                    color: colors.PRIMARY,
                },
            }
        },
    },
})

export const globalStyles = globalCss({
    '@font-face': [
        {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 400,
            fontDisplay: 'swap',
            src: 'url("https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5Q.ttf") format("truetype")',
        },
        {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 500,
            fontDisplay: 'swap',
            src: 'url("https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9vAw.ttf") format("truetype")',
        },
        {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 700,
            fontDisplay: 'swap',
            src: 'url("https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlvAw.ttf") format("truetype")',
        },
        {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 900,
            fontDisplay: 'swap',
            src: 'url("https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmYUtvAw.ttf") format("truetype")',
        },
    ],

    '*': {
        'boxSizing': 'border-box',
        'fontSynthesis': 'none',
        'textRendering': 'optimizeLegibility',
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        '-webkit-text-size-adjust': '100%',
        'scrollbar-width': '5px',
        'scrollbar-height': '5px',
        'scrollbar-color': `${colors.PRIMARY} ${colors.SECONDARY}`,
    },
    '*::-webkit-scrollbar': {
        width: '5px',
        height: '5px',
    },
    '*::-webkit-scrollbar-track': {
        background: `${colors.PRIMARY}25`,
        width: '5px',
        height: '5px',
        borderRadius: '5px',
    },
    '*::-webkit-scrollbar-thumb': {
        background: colors.PRIMARY,
        borderRadius: '5px',
        width: '5px',
        height: '5px',
    },
    'body': {
        margin: 0,
        padding: 0,
        letterSpacing: '0px',
        background: colors.SURFACE[200],
        fontFamily: '$sans',
    },
    'a': {
        textDecoration: 'none',
        color: 'inherit',
    },
    'p': {
        color: colors.TEXT,
    },
})

export type { VariantProps } from '@stitches/react'
export type CSS = Stitches.CSS<typeof config>
export type SizeTokens = keyof typeof theme.sizes
export type SpaceTokens = keyof typeof theme.space
