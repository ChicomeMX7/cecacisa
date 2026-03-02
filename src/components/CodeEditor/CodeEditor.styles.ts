import { styled } from 'stitches.conf'
import { colors } from 'styles/colors'

export const EditorContainer = styled('div', {
    display: 'block',
    position: 'relative',
    overflow: 'hidden',
    '& .ql-toolbar': {
        borderColor: colors.SURFACE[300],
        borderRadius: '$1',
        position: 'relative',
        // top: 0,
        // width: '100%',
        zIndex: 2,
    },
    '& .ql-container': {
        height: '770px',
    },
    '& .ql-editor': {
        borderColor: colors.SURFACE[300],
        borderRadius: '$1',
        backgroundColor: colors.WHITE,
        height: '100%',
        overflowY: 'auto',
        '&.ql-blank::before': {
            color: `${colors.TEXT}60`,
            fontStyle: 'italic',
        },
    },
})
