import { PropsWithChildren, useCallback, useState } from 'react'
import { SectionCoordinatorContext } from './SectionContext'

export const SectionCoordinatorProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [sectionName, setSectionName] = useState('dashboard ')
    const changeSection = useCallback((item: string) => {
        setSectionName(item)
    }, [])

    return (
        <SectionCoordinatorContext.Provider value={{ sectionName, changeSection }}>
            {children}
        </SectionCoordinatorContext.Provider>
    )
}
