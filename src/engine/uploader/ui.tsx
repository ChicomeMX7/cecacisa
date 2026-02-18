import { useExternalScript } from 'hooks/useExternalScript'
import 'styles/styles.css'

export const UploaderUI = () => {
    useExternalScript({
        src: '/src/tus.js',
        callback: () => {
            console.log('tus.js loaded')
        },
    })
    useExternalScript({
        src: '/src/uploads.js',
        callback: () => {
            console.log('uploader.js loaded')
        },
    })
    return (
        <div className="container">
            <h1>File Upload</h1>
            <br />
            <br />
            <hr />
            <div className="row">
                <div className="span8">
                    <input id="automatic" type="file" />
                    <label htmlFor="automatic">AUTO</label>
                    <div className="progress progress-striped progress-success">
                        <div id="loader-progress" className="bar" style={{ width: '1%' }}></div>
                    </div>
                </div>
                <hr />
                <div className="span4">
                    <input id="manual" type="file" />
                    <label htmlFor="manual">MANUAL</label>
                </div>
            </div>
            <hr />
            <style>
                {`
                #loader-progress {
                    background-color: lime;
                    height: 22px;
                    display: block;
                    width: 2%;
                    transition: all 0.2s ease-in-out;
                }`}
            </style>
        </div>
    )
}
