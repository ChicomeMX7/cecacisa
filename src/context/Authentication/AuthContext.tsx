import { PropsWithChildren, createContext, FunctionComponent, useContext } from 'react'

type AuthContextType = {
    login: (email: string, password: string) => void
    logout: () => void
    register: (email: string, password: string) => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthContextProvider: FunctionComponent<
    PropsWithChildren & { handlers: AuthContextType }
> = ({ children, handlers }) => {
    return <AuthContext.Provider value={handlers}>{children}</AuthContext.Provider>
}

export const useAuthentication = () => {
    const context = useContext(AuthContext)

    if (context === undefined) {
        throw new Error('useAuthentication must be used within a AuthContextProvider')
    }

    return context
}
