import { styled } from 'stitches.conf'
import { colors } from 'styles/colors'

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: '$2',
    width: '100%',
    height: '$input',
    border: `2px solid ${colors.SURFACE[300]}`,
    boxShadow: '$level1',
    borderRadius: '$pill',
    background: colors.WHITE,
    position: 'relative',
})

export const SearchInput = styled('input', {
    margin: 0,
    paddingHorizontal: '$4',
    outline: 'none',
    border: 'none',
    borderRadius: '$pill',
    width: '100%',
    textOverflow: 'ellipsis',
})
