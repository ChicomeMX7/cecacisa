import { user } from 'engine/cookies'
import { object2Query } from './utils'
import {
    URL,
    Method,
    Data,
    ResponseType,
    FetchConfig,
    AcceptTypes,
    CORSHeaders,
} from 'models/index'
import { AUTH_API, DATA_API, MEDIA_API, API_V1 } from 'config'

export const createFetch = async (
    url: URL,
    method: Method,
    data: Data,
    headers: CORSHeaders,
    response: ResponseType = 'json'
) => {
    return fetch(url, {
        method,
        body: data as any,
        headers,
        mode: 'cors',
    })
        .then((res) => {
            if (response === 'json') {
                return res.json()
            }
            if (response === 'text') {
                return res.text()
            }
            return { data: null }
        })
        .catch((err) => err)
}

const obtainBaseURL = (baseURL:string,endpoint:string,prefix?:string) => {
    let URL = ''
    if (prefix) {
        URL += `${prefix}/`
    }
    return `${URL}${baseURL}${endpoint}`
}

export const createAPIClient = (baseURL: string, prefix?: string) => {
    async function client(endpoint: URL, method: Method, config: FetchConfig) {
        const { responseType } = config
        let url = obtainBaseURL(baseURL,endpoint,prefix)
        let data = config?.data
        const authToken = {
            type: 'Bearer',
            token: user.token,
        }
        const headers: CORSHeaders = {
            Accept: AcceptTypes.JSON,
        }
        if (user.token) {
            headers.Authorization = `${authToken.type} ${authToken.token}`
        }
        if (user.accessToken) {
            headers['User-Token'] = user.accessToken
        }
        if (data && typeof data === 'object') {
            data = JSON.stringify(data)
        }
        if (config.params) {
            url += object2Query(config.params)
        }

        return createFetch(url, method, data, headers, responseType)
    }

    client.get = (url: string, config: FetchConfig) => client(url, Method.GET, config)
    client.post = (url: string, config: FetchConfig) => client(url, Method.POST, config)
    client.create = (url: string, config: FetchConfig) => client(url, Method.CREATE, config)
    client.read = (url: string, config: FetchConfig) => client(url, Method.READ, config)
    client.update = (url: string, config: FetchConfig) => client(url, Method.UPDATE, config)
    client.delete = (url: string, config: FetchConfig) => client(url, Method.DELETE, config)

    return client
}

export const AuthRootURL = createAPIClient(AUTH_API,API_V1)
export const DataRootURL = createAPIClient(DATA_API,API_V1)
export const MediaRootURL = createAPIClient(MEDIA_API,API_V1)
