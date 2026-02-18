import { PropsWithChildren, createContext, FunctionComponent, useContext } from 'react'
import { LocalStorageContextType } from './LocalStorageContextType.model'

export const LocalStorageContext = createContext<LocalStorageContextType | undefined>(undefined)

export const LocalStorageContextProvider: FunctionComponent<
    PropsWithChildren & { storageSystem: LocalStorageContextType }
> = ({ children, storageSystem }) => {
    return (
        <LocalStorageContext.Provider value={storageSystem}>
            {children}
        </LocalStorageContext.Provider>
    )
}

export const useLocalStorageContext = () => {
    const context = useContext(LocalStorageContext)

    if (context === undefined) {
        throw new Error('useLocalStorageContext must be used within a LocalStorageContextProvider')
    }

    return context
}
