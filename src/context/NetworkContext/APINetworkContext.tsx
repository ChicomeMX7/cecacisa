import { PropsWithChildren, createContext, FunctionComponent, useContext } from 'react'
import { NetworkHandlers } from './networks.model'

export const APINetworkContext = createContext<NetworkHandlers | undefined>(undefined)

export const APINetworkProvider: FunctionComponent<
    PropsWithChildren & { handlers: NetworkHandlers }
> = ({ children, handlers }) => {
    return <APINetworkContext.Provider value={handlers}>{children}</APINetworkContext.Provider>
}

export const useNetwork = () => {
    const context = useContext(APINetworkContext)

    if (context === undefined) {
        throw new Error('useNetwork must be used within a NetworkProvider')
    }

    return context
}
