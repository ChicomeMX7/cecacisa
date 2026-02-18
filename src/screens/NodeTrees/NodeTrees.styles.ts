import { styled } from 'stitches.conf'
import { colors } from 'styles/colors'

export const UpsContent = styled('div', {
    border: `1px solid ${colors.SURFACE[500]}`,
    borderRadius: '$1',
    bc: colors.SURFACE[500],
    flexDirection: 'column',
    marginHorizontal: '$5',

    gridRowStart: 2,
    gridColumnStart: 2,

    gridRowEnd: 3,
    gridColumnEnd: 4,
})
