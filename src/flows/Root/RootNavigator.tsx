import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { Sidebar } from 'components/Sidebar'
import { HomeRoutes, RoutesMap } from './RootNavigator.models'
import { MecuateNavigator } from 'flows/Mecuate'

export const RootNavigator = () => {
    return (
        <Router>
            {/* <Sidebar /> */}
            <Routes>
                <Route path={RoutesMap[HomeRoutes.MECUATE]} element={<MecuateNavigator />} />
                <Route path={RoutesMap[HomeRoutes.ACCOUNT]} element={'account'} />
                <Route path={RoutesMap[HomeRoutes.SERVICES]} element={'services'} />
                <Route path={RoutesMap[HomeRoutes.DOCUWEB]} element={'docuweb'} />
                <Route path={RoutesMap[HomeRoutes.PROJECTS]} element={'projects'} />
                <Route path={RoutesMap[HomeRoutes.PUBLICATIONS]} element={'publications'} />
                <Route path={RoutesMap[HomeRoutes.CONTACT]} element={'contact'} />
            </Routes>
        </Router>
    )
}
