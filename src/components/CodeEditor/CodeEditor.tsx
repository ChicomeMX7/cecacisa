import { useEffect, useState, useRef } from 'react'
import { useExternalScript } from 'hooks/useExternalScript'
import { EditorContainer } from './CodeEditor.styles'
import 'styles/styles.css'
import { cleanFile, CODE, PASS, CodeEditorProps } from './CodeEditor.props'
import { useCleanInput } from 'hooks/useCleanInput'

let htmlEditor: any = undefined

export const CodeEditor = ({ callback, dataRequested, data }: CodeEditorProps) => {
    const { CleanCodeInput } = useCleanInput()
    const editorReference = useRef<HTMLElement | null>(null)
    const [editorConfigured, setEditorConfigured] = useState(false)
    const [editorLoaded, setEditorLoaded] = useState(false)
    const [editorRequires, setEditorRequires] = useState(PASS)

    const [editorData, setEditorData] = useState(data || cleanFile)

    const handleEditorLoaded = (val: boolean) => {
        setEditorLoaded(val)
    }
    function setUpEditor() {
        htmlEditor = window.CodeMirror(document.querySelector('.editor .code .html-code'), {
            mode: 'javascript',
            value: editorData,
            tabSize: 4,
            lineNumbers: true,
        })
        window.CodeMirror.commands['selectAll'](htmlEditor)
        editorReference.current?.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === '/') {
                e.preventDefault()
                commentSelection(true)
            }
        })
    }

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

    useExternalScript({
        src: CODE.codemirror,
        callback: () => {
            setEditorRequires({ ...editorRequires, codemirror: true })
            handleEditorLoaded(true)
        },
    })
    useExternalScript({
        src: CODE.formatting,
        callback: () => {
            setEditorRequires({ ...editorRequires, formatting: true })
        },
    })
    useExternalScript({
        src: CODE.showHint,
        callback: () => {
            setEditorRequires({ ...editorRequires, showHint: true })
        },
    })
    useExternalScript({
        src: CODE.javascript,
        callback: () => {
            setEditorRequires({ ...editorRequires, javascript: true })
        },
    })

    useEffect(() => {
        if (!editorReference.current) {
            editorReference.current = document.getElementById('editor_container')
            setTimeout(() => {
                setUpEditor()
            }, 1200)
            setEditorConfigured(true)
        }
        return () => {}
    }, [editorLoaded, editorConfigured])

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
                        <div className="html-code"></div>
                    </div>
                </div>
            </div>
        </EditorContainer>
    )
}
