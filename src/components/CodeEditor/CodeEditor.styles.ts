import { styled } from 'stitches.conf'
import { colors } from 'styles/colors'

export const EditorContainer = styled('div', {
    display: 'block',
    position: 'relative',
    '& .ql-toolbar': {
        borderColor: colors.SURFACE[300],
        borderRadius: '$1',
    },
    '& .ql-container': {
        borderColor: colors.SURFACE[300],
        borderRadius: '$1',
        backgroundColor: colors.WHITE,
    },
    '& .ql-editor': {
        minHeight: '300px',
        color: colors.TEXT,
        fontFamily: '$sans',

        '&.ql-blank::before': {
            color: `${colors.TEXT}60`,
            fontStyle: 'italic',
        },
    },
})
