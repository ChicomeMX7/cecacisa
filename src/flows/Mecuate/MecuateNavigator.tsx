import { ComponentProps } from 'react'
import { Routes, Route } from 'react-router-dom'
import { MecuateNavigatorRoot } from './MecuateNavigator.styles'
import { MecuatePage, MecuateRoutesMap } from './MecuateNavigator.models'

// import SCREEN-COMPONENTS
// import { MecuateHome } from 'screens/Mecuate/MecuateHome'

type MecuateNavigatorOwnProps = ComponentProps<typeof MecuateNavigatorRoot>
type MecuateNavigatorProps = MecuateNavigatorOwnProps & {}

export const MecuateNavigator = ({}: MecuateNavigatorProps) => {
    return (
        <MecuateNavigatorRoot>
            <Routes>
                <Route path={MecuateRoutesMap[MecuatePage.HOME]} element={'mecuates Home'} />
                <Route path={MecuateRoutesMap[MecuatePage.VISION]} element={'mecuates vision'} />
                <Route path={MecuateRoutesMap[MecuatePage.MISSION]} element={'mecuates mission'} />
                <Route path={MecuateRoutesMap[MecuatePage.CONTACT]} element={'mecuates contact'} />
            </Routes>
        </MecuateNavigatorRoot>
    )
}
