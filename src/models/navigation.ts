import { IconNames } from 'components/Icon'
import { iKeyTranslations } from 'locales/translationKeys'

export enum APP_PATH {
    ROOT = '/',
    DASHBOARD = '/home',
    CONTENT = '/content',
    SCHEMAS = '/schemas',
    ENDPOINTS = '/endpoints',
    UPLOAD = '/uploads',
    NODES = '/nodes',
    USER = '/user',
    LOGOUT = '/logout',
    LOGIN = '/login',
}

export type NavigationAppType = {
    name: iKeyTranslations
    path: APP_PATH
    icon: IconNames
}[]
