import { Button } from 'components/Button'
import { Container, TextArea } from './TextEditor.styles'

export const TextEditor = () => {
    return (
        <Container>
            <TextArea
                name="editor"
                id=""
                cols={200}
                rows={10}
                spellCheck={false}
                defaultValue={'no info {{variable}} terms and extras'}
            />
            <Button
                variant={'tertiary'}
                text={'save'}
                action={() => {
                    console.log('button save')
                }}
            />
        </Container>
    )
}
