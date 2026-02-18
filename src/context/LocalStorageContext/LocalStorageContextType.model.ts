import { LocalSItem } from 'hooks/useLocalStorage'
import { JSONSContent } from 'models'

export type LocalStorageContextType = {
    getItem: (name: LocalSItem) => void
    setItem: (name: LocalSItem, data: JSONSContent) => void
    removeAll: () => void
    remove: (name: LocalSItem) => void
}
