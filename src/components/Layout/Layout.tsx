import { LayoutContainer, LeftPannel, MainRoot } from './Layout.styles'
import { LeftBarControler, UpperBarControler } from 'components/Controllers'
import { Content } from 'screens/Content'
import { APP_PATH } from 'models'
import { DatabaseSchemas } from 'screens/DatabaseSchemas'
import { LogOut } from 'screens/LogOut'
import { NodeTrees } from 'screens/NodeTrees'
import { Endpoints } from 'screens/Endpoints'
import { Uploads } from 'screens/Uploads'
import { Dashboard } from 'screens/Dashboard'
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    RouterProvider,
} from 'react-router-dom'

export const Layout = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path={APP_PATH.ROOT} element={<Root />}>
                <Route path={APP_PATH.DASHBOARD} element={<Dashboard />} />
                <Route path={APP_PATH.CONTENT} element={<Content />} />
                <Route path={APP_PATH.SCHEMAS} element={<DatabaseSchemas />} />
                <Route path={APP_PATH.ENDPOINTS} element={<Endpoints />} />
                <Route path={APP_PATH.UPLOAD} element={<Uploads />} />
                <Route path={APP_PATH.NODES} element={<NodeTrees />} />
                {/* TODO user path and profile */}
                <Route path={APP_PATH.LOGOUT} element={<LogOut />} />
            </Route>
        )
    )

    return <RouterProvider router={router} />
}

const Root = () => {
    return (
        <LayoutContainer>
            <LeftPannel>
                <LeftBarControler />
            </LeftPannel>
            <MainRoot>
                <UpperBarControler />
                <Outlet />
            </MainRoot>
        </LayoutContainer>
    )
}
