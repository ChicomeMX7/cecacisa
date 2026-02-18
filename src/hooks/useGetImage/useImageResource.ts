import { imageRepository, iKeyNames } from 'sources/imageRepository'

export const useImage = () => {
    return {
        gi: (key: iKeyNames) => {
            return imageRepository[key]
        },
    }
}
