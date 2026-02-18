import { _cookie } from './cookies'

export const user = (() => {
    const user_cookie = _cookie.get('user')
    return user_cookie ?? {}
})()

export const mecuateUser = (() => {
    const user_cookie = _cookie.get('mct') as MCT_USER_COOKIE
    return user_cookie ?? {}
})()

type MCT_USER_COOKIE = {
    token?: string
    access_token: string
    instance_name: string
    expiration: string
    user_token: string
}