import Quill from 'quill'
import { useEffect, useState, useRef } from 'react'
// import { useExternalScript } from 'hooks/useExternalScript'
import { EditorContainer } from './CodeEditor.styles'
// import 'styles/styles.css'
import 'quill/dist/quill.snow.css'
import { cleanFile, /* CODE, PASS, */ CodeEditorProps } from './CodeEditor.props'
import { useCleanInput } from 'hooks/useCleanInput'

let htmlEditor: any = undefined

export const CodeEditor = ({ callback, dataRequested, data }: CodeEditorProps) => {
    const { CleanCodeInput } = useCleanInput()
    const editorReference = useRef<HTMLDivElement>(null)
    const quillInstance = useRef<any>(null)

    useEffect(() => {
        if (editorReference.current) {
            quillInstance.current = new Quill(editorReference.current, {
                theme: 'snow',
                modules: {
                    toolbar: [
                        [{ font: [] }, { size: [] }],
                        [{ align: [] }, 'direction'],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ color: [] }, { background: [] }],
                        [{ script: 'super' }, { script: 'sub' }],
                        ['blockquote', 'code-block'],
                        [
                            { list: 'ordered' },
                            { list: 'bullet' },
                            { indent: '-1' },
                            { indent: '+1' },
                        ],
                        ['link', 'image', 'video'],
                        ['clean'],
                    ],
                },
            })
        }

        return () => {
            quillInstance.current = null
        }
    }, [])

    const [editorConfigured, setEditorConfigured] = useState(false)
    // const [editorLoaded, setEditorLoaded] = useState(false)
    // const [editorRequires, setEditorRequires] = useState(PASS)

    const [editorData, setEditorData] = useState(data || cleanFile)

    // const handleEditorLoaded = (val: boolean) => {
    //     setEditorLoaded(val)
    // }

    const getSelectedRange = () => {
        return { from: htmlEditor.getCursor(true), to: htmlEditor.getCursor(false) }
    }

    const commentSelection = (isComment: any) => {
        var range = getSelectedRange(),
            selStart = htmlEditor.getCursor('start')
        htmlEditor.commentRange(isComment, range.from, range.to)
        htmlEditor.setSelection(selStart, htmlEditor.getCursor('end'))
    }

    const getData = () => {
        const currentEditorData = htmlEditor.getValue()
        const [valid, newCleanData] = CleanCodeInput(currentEditorData)
        if (valid) {
            setEditorData(newCleanData)
            return newCleanData
        } else {
            console.error('Fail', newCleanData)
            return ''
        }
    }

    // useExternalScript({
    //     src: CODE.codemirror,
    //     callback: () => {
    //         setEditorRequires({ ...editorRequires, codemirror: true })
    //         handleEditorLoaded(true)
    //     },
    // })
    // useExternalScript({
    //     src: CODE.formatting,
    //     callback: () => {
    //         setEditorRequires({ ...editorRequires, formatting: true })
    //     },
    // })
    // useExternalScript({
    //     src: CODE.showHint,
    //     callback: () => {
    //         setEditorRequires({ ...editorRequires, showHint: true })
    //     },
    // })
    // useExternalScript({
    //     src: CODE.javascript,
    //     callback: () => {
    //         setEditorRequires({ ...editorRequires, javascript: true })
    //     },
    // })

    useEffect(() => {
        if (htmlEditor) {
            callback(getData())
        }

        return () => {}
    }, [dataRequested])

    return (
        <EditorContainer>
            <div id="editor_container">
                <div className="editor">
                    <div id="resizeMe" className="code">
                        <div id="editor" ref={editorReference}></div>
                    </div>
                </div>
            </div>
        </EditorContainer>
    )
}
