import { useCallback } from 'react'

export const useInstanceData = () => {
    const getLatestChanges = useCallback(() => {
        return [
            'changed name one',
            'updated name one',
            'conformated name one',
            'updated name one',
            'created name one',
        ]
    }, [])

    return {
        getLatestChanges,
    }
}
