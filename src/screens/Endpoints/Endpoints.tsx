import { LeftSidePanel, PANNEL_ID, Screen, ScreenContent } from 'components/Screen'
import { Container } from './Endpoints.styles'
import { CodeEditor } from 'components/CodeEditor'
import { useTranslation } from 'hooks/useTranslations'
import { ScreenHeader } from 'components/ScreenHeader'
import { Button } from 'components/Button'
import { PANNELS } from 'hooks/useTogglePannel/useTogglePannel'
import { useState } from 'react'

export const Endpoints = () => {
    const { t } = useTranslation()
    const [petitionData, setPetitionData] = useState(false)

    const callback = (editorData: string) => {
        console.log(editorData)
    }

    return (
        <Screen pannel={PANNELS.ENDPOINTS}>
            <LeftSidePanel id={PANNEL_ID.ENDPOINTS} showTitle>{'testing content'}</LeftSidePanel>
            <ScreenHeader
                title={'data_videos.json'}
                actions={
                    <>
                        <Button.MainAction
                            action={() => setPetitionData(!petitionData)}
                            text={t('endpoints:save')}
                        />
                    </>
                }
            ></ScreenHeader>
            <ScreenContent pannel={PANNELS.ENDPOINTS}>
                <Container>
                    <CodeEditor callback={callback} dataRequested={petitionData} />
                </Container>
            </ScreenContent>
        </Screen>
    )
}
