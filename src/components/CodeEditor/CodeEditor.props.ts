export const CODE = {
    codemirror: '/src/codemirror.js',
    formatting: '/src/formatting.js',
    showHint: '/src/show-hint.js',
    javascript: '/src/javascript.js',
}

export const PASS = {
    codemirror: false,
    formatting: false,
    showHint: false,
    javascript: false,
}

export type CodeEditorProps = {
    dataRequested: boolean
    callback: (result: string) => void
    data?: string
}

declare global {
    interface Window {
        CodeMirror: any
    }
}

export const cleanFile = `/**
This is an empty file.
available:
• Access HTTP Request:          useRequest = { method, query, body, headers, url, params }
• Access your data calling:     useContext(reference_id)

All process must "return" the desired data in a serializable object, otherwise the response will be empty.
*/`
