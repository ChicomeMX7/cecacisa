import { JSONSContent } from 'models'

export enum LocalSItem {
    DISPLAY_MODES = 'display.modes',
}

export const useLocalStorage = () => {
    const setItem = (name: LocalSItem, data: JSONSContent) => {
        if (data) {
            localStorage.setItem(name, JSON.stringify(data))
        }
    }

    const getItem = (name: LocalSItem) => {
        const tempData = localStorage.getItem(name)
        if (tempData) {
            const resultado = JSON.parse(tempData)
            return resultado ? resultado : {}
        }
        return {}
    }

    const removeAll = () => {
        localStorage.clear()
    }

    const remove = (item: LocalSItem) => {
        localStorage.removeItem(item)
    }

    return {
        getItem,
        setItem,
        removeAll,
        remove,
    }
}
