import { PropsWithChildren } from 'react'
import { SectionCoordinatorContext } from './SectionContext'

export const SectionCoordinatorProvider: React.FC<PropsWithChildren> = ({ children }) => {
    let sectionName = 'sectionName'
    const changeSection = () => {
        sectionName = sectionName + 'a'
    }

    return (
        <SectionCoordinatorContext.Provider value={{ sectionName, changeSection }}>
            {children}
        </SectionCoordinatorContext.Provider>
    )
}
