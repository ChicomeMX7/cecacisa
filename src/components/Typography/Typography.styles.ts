import { styled } from 'stitches.conf'
import { colors } from 'styles/colors'

export const TextContainer = styled('span', {
    color: colors.TEXT,
    fontFamily: '$sans',
    display: 'inline-block',

    variants: {
        selectable: {
            true: {
                userSelect: 'text',
            },
            false: {
                userSelect: 'none',
            },
        },
        font: {
            sans: {
                fontFamily: '$sans',
            },
            serif: {
                fontFamily: '$serif',
            },
            mono: {
                fontFamily: 'monospace',
            },
        },
        size: {
            small: {
                fontSize: '10pt',
            },
            short: {
                fontSize: '11pt',
            },
            normal: {
                fontSize: '12pt',
            },
            mid: {
                fontSize: '14pt',
            },
            header: {
                fontSize: '16pt',
            },
            big: {
                fontSize: '20pt',
            },
            subtitle: {
                fontSize: '24pt',
            },
            title: {
                display: 'block',
                fontSize: '28pt',
                lineHeight: 1.2,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
            },
            max: {
                fontSize: '38pt',
                letterSpacing: 2.4,
                lineHeight: 1.01,
            },
        },
        weight: {
            thin: {
                fontWeight: '200',
            },
            regular: {
                fontWeight: '400',
            },
            semi: {
                fontWeight: '500',
            },
            bold: {
                fontWeight: '600',
            },
            fat: {
                fontWeight: '800',
            },
        },
        color: {
            default: {
                color: colors.TEXT,
            },
            light: {
                color: colors.WHITE,
            },
            primary: {
                color: colors.PRIMARY,
            },
            tertiary: {
                color: colors.TERTIARY,
            },
            midtone: {
                color: `${colors.TEXT}95`,
            },
            faint: {
                color: `${colors.TEXT}45`,
            },
            success: {
                color: colors.SUCCESS[100],
            },
            danger: {
                color: colors.DANGER[100],
            },
            warn: {
                color: colors.WARN[200],
            },
        },
        paragraph: {
            left: {
                textAlign: 'left',
                textJustify: 'none',
            },
            right: {
                textAlign: 'right',
                textJustify: 'none',
            },
            center: {
                textAlign: 'center',
                textJustify: 'none',
            },
            justified: {
                textAlign: 'justify',
                textJustify: 'inter-word',
            },
        },
        editable: {
            true: {
                '&:focus-visible': {
                    outline: `3px solid ${colors.SECONDARY}80`,
                    borderRadius: '$2',
                    padding: '$1 $3',
                    boxShadow: `inset $level1`,
                },
            },
            false: {},
        },
    },

    defaultVariants: {
        size: '$regular',
        font: '$sans',
    },
})
