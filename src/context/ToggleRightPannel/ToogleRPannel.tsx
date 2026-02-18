import { PropsWithChildren, createContext, FunctionComponent, useContext } from 'react'
import { PANNELS } from 'hooks/useTogglePannel/useTogglePannel'

export type ToggleContextType = {
    isPannelOpen: Record<PANNELS, boolean>
    openPanel: (item: PANNELS) => void
    closePanel: (item: PANNELS) => void
    togglePanel: (item: PANNELS) => void
}

export const TogglePannelContext = createContext<ToggleContextType | undefined>(undefined)

export const TogglePannelContextProvider: FunctionComponent<
    PropsWithChildren & { toogleSystem: ToggleContextType }
> = ({ children, toogleSystem }) => {
    return (
        <TogglePannelContext.Provider value={toogleSystem}>{children}</TogglePannelContext.Provider>
    )
}

export const useTogglePannelContext = () => {
    const context = useContext(TogglePannelContext)

    if (context === undefined) {
        throw new Error('useTogglePannelContext must be used within a TogglePannelContextProvider')
    }

    return context
}
