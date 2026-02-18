import { ChangeEvent, useState } from 'react'
import {
    Check,
    Container,
    LogInBox,
    LogInBoxLeft,
    LogInBoxRight,
    NoticeSection,
    SpanS,
    UserEmail,
    UserPassword,
} from './LogIn.styles'
import { Typography } from 'components/Typography'
import { Button } from 'components/Button'
import { _cookie } from 'engine/cookies/cookies'
import { globalStyles } from '../../stitches.conf'
import { AUTH_LOGIN_URL } from 'config'

export const LogIn = () => {
    globalStyles()
    const [rememberMe, setRememberMe] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [userEmail, setUserEmail] = useState('email@example.com')
    const [userPassword, setUserPassword] = useState('••••••••')
    const handleCheck = ({ target }: ChangeEvent<HTMLInputElement>) =>
        setRememberMe(Boolean(target.checked))
    const handleEmailChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
        setUserEmail(target.value)
    const handlePasswordChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
        setUserPassword(target.value)

    const handleSubmit = () => {
        fetch(AUTH_LOGIN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: userEmail, password: userPassword, long: rememberMe }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.token) {
                    _cookie.create('mct', data, rememberMe ? 360 : 1)
                }
                return data
            })
            .then((data) => {
                fetch('/success', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${data.token}`,
                        'User-Token': 'user-token',
                    },
                    body: JSON.stringify({ long: rememberMe }),
                })
                    .then((response) => response.json())
                    .then((res) => {
                        if (res.status === 'OK') {
                                window.location.href = '/index.html'
                        } else {
                            setUserEmail('')
                            setUserPassword('')
                        }
                    })
            })

            .catch((error) => {
                console.error('Error:', error)
                setUserEmail('')
                setUserPassword('')
            })
    }

    const handleForgottenPass = () => {
        window.location.href = 'mailto:admin@mecuate.org'
    }

    return (
        <Container>
            <LogInBox>
                <LogInBoxLeft>
                    <Typography.Subtitle>{'Inicio de sesíon'}</Typography.Subtitle>
                    <UserEmail placeholder={userEmail} onChange={handleEmailChange} />
                    <span
                        style={{
                            position: 'relative',
                        }}
                    >
                        <UserPassword
                            placeholder={userPassword}
                            onChange={handlePasswordChange}
                            type={showPassword ? 'text' : 'password'}
                            id="pwd_input_field"
                        />
                        <span
                            style={{
                                position: 'absolute',
                                right: '6px',
                                top: '32px',
                            }}
                        >
                            <Button.Icon
                                icon={showPassword ? 'eye' : 'hide'}
                                action={() => setShowPassword(!showPassword)}
                            />
                        </span>
                    </span>
                    <NoticeSection>
                        <SpanS variant={'gap'}>
                            <Check type="checkbox" onChange={handleCheck} />
                            <Typography.Short color={'primary'}>{'Recordarme'}</Typography.Short>
                        </SpanS>
                        <SpanS variant={'buttonize'}>
                            <Typography.Short color={'primary'} onClick={handleForgottenPass}>
                                {'Olvidaste la contraseña'}
                            </Typography.Short>
                        </SpanS>
                    </NoticeSection>
                    <SpanS variant={'centred'}>
                        <Button
                            action={handleSubmit}
                            text={'Iniciar sesión'}
                            size={'big'}
                            variant={'primary'}
                        />
                    </SpanS>
                </LogInBoxLeft>
                <LogInBoxRight />
            </LogInBox>
        </Container>
    )
}
