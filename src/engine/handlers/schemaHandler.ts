import { DataRootURL } from 'engine/network'
import { mecuateUser } from 'engine/cookies'
import { SchemaHandlerType } from 'models/networkAPI.schemas'

export const schemaHandler: SchemaHandlerType = {
    getSchemasList: (params) =>
        DataRootURL.read(`/data/schema/${mecuateUser.access_token}/list`, {
            params,
        }),
    getSchema: ({ id }) =>
        DataRootURL.read(`/data/schema/${mecuateUser.access_token}/${id}`, {}),
    createSchema: (params) =>
        DataRootURL.create(`/data/schema/${mecuateUser.access_token}/new`, {
            data: params,
        }),
    updateSchema: ({ id, ...data }) =>
        DataRootURL.update(`/data/schema/${mecuateUser.access_token}/${id}`, {
            data: data,
        }),
    deleteSchema: ({ id }) =>
        DataRootURL.delete(`/data/schema/${mecuateUser.access_token}/${id}`, {}),
}
