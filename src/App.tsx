import { globalStyles } from './stitches.conf'
import { SectionCoordinatorProvider } from 'context/SectionCoordinator/SectionContextApp'
import { LocalStorageContextProvider } from 'context/LocalStorageContext'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { useTogglePannel } from 'hooks/useTogglePannel'
import { Layout } from 'components/Layout'
import { APINetworkProvider } from 'context/NetworkContext'
import { QueryClientProvider, QueryClient } from 'react-query'
import { useRef } from 'react'
import { networkHandlers } from 'context/NetworkContext/network.implementation'
import { TogglePannelContextProvider } from 'context/ToggleRightPannel/ToogleRPannel'
import { Notification } from 'components/Notification'

function App() {
    const queryClient = useRef<QueryClient>()

    globalStyles()

    if (!queryClient.current) {
        queryClient.current = new QueryClient()
    }
    const storageSystem = useLocalStorage()
    const toogleSystem = useTogglePannel()

    return (
        <QueryClientProvider client={queryClient.current}>
            <APINetworkProvider handlers={networkHandlers}>
                <SectionCoordinatorProvider>
                    <LocalStorageContextProvider storageSystem={storageSystem}>
                        <TogglePannelContextProvider toogleSystem={toogleSystem}>
                            <Layout />
                        </TogglePannelContextProvider>
                    </LocalStorageContextProvider>
                </SectionCoordinatorProvider>
            </APINetworkProvider>
            <Notification.Error action={() => {}} />
        </QueryClientProvider>
    )
}

export default App
