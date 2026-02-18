import { useState } from 'react'

type UseExternalType = {
    src: string
    callback: CallableFunction
    async?: boolean
}

export const useExternalScript = ({ src, callback, async = false }: UseExternalType) => {
    const [loaded, setLoaded] = useState(false)
    if (src && !loaded) {
        const script = document.createElement('script')
        script.async = async
        script.src = src
        script.addEventListener('load', () => {
            callback()
            setLoaded(true)
        })

        document.body.appendChild(script)
    }
}
