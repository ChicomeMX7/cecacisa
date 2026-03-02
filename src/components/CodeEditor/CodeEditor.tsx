import Quill from 'quill'
import { useEffect, useState, useRef } from 'react'
// import { useExternalScript } from 'hooks/useExternalScript'
import { EditorContainer } from './CodeEditor.styles'
// import 'styles/styles.css'
import 'quill/dist/quill.snow.css'
import { useCleanInput } from 'hooks/useCleanInput'
import type { CodeEditorProps } from './CodeEditor.props'

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

    const [editorData, setEditorData] = useState(data)


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

    useEffect(() => {
        if (htmlEditor) {
            callback(getData())
        }

        return () => {}
    }, [dataRequested, editorReference])

    return (
        <EditorContainer>
            <div id="editor" ref={editorReference} />
        </EditorContainer>
    )
}
