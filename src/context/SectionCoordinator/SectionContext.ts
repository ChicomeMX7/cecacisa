import { createContext } from 'react'

export type SectionsState = {
    sectionName: string
}

export interface SectionContextInterface {
    sectionName: string
    changeSection: (item: string) => void
}

export const SectionCoordinatorContext = createContext<SectionContextInterface | null>(null)
