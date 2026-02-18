import { Screen } from 'components/Screen'
import { AssetContainer } from './FileAssetPreview.styles'
import { PANNELS } from 'hooks/useTogglePannel/useTogglePannel'

export const FileAssetPreview = () => {
    return (
        <Screen pannel={PANNELS.CONTENT}>
            <AssetContainer></AssetContainer>
        </Screen>
    )
}
