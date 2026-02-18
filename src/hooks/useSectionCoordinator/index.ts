import { useContext } from 'react'
import { SectionCoordinatorContext } from 'context/SectionCoordinator/SectionContext'

export const useSectionCoordinator = () => {
    const dispatch = useContext(SectionCoordinatorContext)

    if (!dispatch) {
        throw new Error('useSectionCoordinator must be used within a SectionCoordinatorContext')
    }

    const { sectionName, changeSection } = dispatch
    return {
        sectionName,
        changeSection,
    }
}
