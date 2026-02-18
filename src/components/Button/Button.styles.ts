import { styled } from 'stitches.conf'
import { colors } from 'styles/colors'

export const ButtonContainer = styled('button', {
    width: '100%',
    display: 'flex',
    height: '$button',
    outline: 'none',
    border: 'none',
    margin: 0,
    paddingHorizontal: '$2',
    paddingVertical: '$4',
    alignmentBaseline: 'central',
    alignItems: 'center',
    fontFamily: '$sans',
    borderRadius: '$1',
    cursor: 'pointer',

    variants: {
        variant: {
            action: {
                'backgroundColor': `${colors.PRIMARY}05`,
                'justifyContent': 'center',
                'alignContent': 'center',
                'alignSelf': 'center',
                'size': '$6',
                'borderRadius': '$1',
                'border': `1px solid ${colors.TRANSPARENT}`,
                '&:hover': {
                    backgroundColor: `${colors.PRIMARY}14`,
                    border: `1px solid ${colors.SECONDARY}15`,
                },
            },
            roundAction: {
                'backgroundColor': colors.PRIMARY,
                'justifyContent': 'center',
                'alignContent': 'center',
                'alignSelf': 'center',
                'width': '$6',
                'height': '$6',
                'borderRadius': '$round',
                'border': `1px solid ${colors.TRANSPARENT}`,
                '&:hover': {
                    backgroundColor: `${colors.PRIMARY}80`,
                    border: `1px solid ${colors.SECONDARY}`,
                },
            },
            icon: {
                'backgroundColor': colors.TRANSPARENT,
                'justifyContent': 'center',
                'alignContent': 'center',
                'alignSelf': 'center',
                'size': '34px',
                'borderRadius': '$pill',
                'border': 'none',

                '&:hover': {
                    backgroundColor: `${colors.TEXT}15`,
                },
            },
            clearicon: {
                backgroundColor: colors.TRANSPARENT,
                justifyContent: 'center',
                size: '24px',
                borderRadius: '$pill',
                paddingVertical: 0,
                alignmentBaseline: 'middle',
            },
            primary: {
                'backgroundColor': colors.PRIMARY,
                'border': `1px solid ${colors.PRIMARY}`,
                'justifyContent': 'center',
                'alignContent': 'center',
                'maxWidth': 168,
                'borderRadius': '$3',

                '&:hover': {
                    backgroundColor: `${colors.PRIMARY}ce`,
                },
            },
            secondary: {
                backgroundColor: colors.SECONDARY,
                border: `1px solid ${colors.SECONDARY}`,
                justifyContent: 'center',
                alignItems: 'center',
            },
            tertiary: {
                backgroundColor: colors.SECONDARY,
                border: `1px solid ${colors.TERTIARY}`,
                justifyContent: 'center',
            },
            quaternary: {
                backgroundColor: colors.TRANSPARENT,
                border: `1px solid ${colors.SECONDARY}`,
                justifyContent: 'center',
            },
        },
    },
})
