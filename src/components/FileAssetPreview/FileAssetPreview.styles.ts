import { styled } from 'stitches.conf'
import { colors } from 'styles/colors'

export const AssetContainer = styled('div', {
    height: '450px',
    width: '515px',
    background: colors.SURFACE[100],
    border: `1px solid ${colors.SURFACE[300]}`,
    boxShadow: '$level2',
    margin: '100px 0px $5 $5',
})
