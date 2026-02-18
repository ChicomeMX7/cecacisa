import { useEffect, useState } from 'react'
import { LeftSidePanel, PANNEL_ID, Screen, ScreenContent, SidePannel } from 'components/Screen'
import {
    Container,
    /*
    LeftSection,
    MidSection,
    RightSection,
    UploadButton,
    ContainerHead,
    ContainerTitle,
    SearchBarDash,
    ContainerMenu,
    BlockIcon,
    BlockMenu,
    ContainerAB,
    ContainerFile,
    BlockIconFile,
    BlockFile,
    ContainerFiles,
    */
} from './Uploads.styles'
import { useNetwork } from 'context/NetworkContext'
import { useTranslation } from 'hooks/useTranslations'
import { PANNELS } from 'hooks/useTogglePannel/useTogglePannel'
import { ScreenHeader } from 'components/ScreenHeader'
import { Button } from 'components/Button'
import { SearchBar } from 'components/SearchBar'
import { Typography } from 'components/Typography'
import { TooltipMenu } from 'components/TooltipMenu'

const Menu = () => {
    return <TooltipMenu size="large">{'context menu'}</TooltipMenu>
}

export const Uploads = () => {
    const { t } = useTranslation()
    const { schemaAPI } = useNetwork()
    const [dataRes, setDataRes] = useState('')

    useEffect(() => {
        schemaAPI
            .getSchemasList({ start: 0, limit: 10 })
            .then((res: any) => {
                console.log(res)

                setDataRes('res.toString()')
            })
            .catch((err: any) => {
                setDataRes(err.message)
            })
    }, [])

    return (
        <Screen pannel={PANNELS.UPLOADS}>
            <LeftSidePanel id={PANNEL_ID.UPLOAD} showTitle>
                {'testing content'}
            </LeftSidePanel>
            <ScreenHeader
                title={'Nombre de archivo'}
                menu={<Menu />}
                metadata={<Typography.Small>{'last opened 11-10-23'}</Typography.Small>}
                actions={
                    <>
                        <Button.MainAction action={() => {}} text={'action4'} />
                    </>
                }
            >
                <SearchBar section="items" />
            </ScreenHeader>
            <ScreenContent pannel={PANNELS.UPLOADS}>
                <Container>
                    <input type="file" />
                    <pre>{dataRes}</pre>
                    {'sample'}
                </Container>
            </ScreenContent>
            <SidePannel pannel={PANNELS.UPLOADS}>{'sample'}</SidePannel>
        </Screen>
    )
}
