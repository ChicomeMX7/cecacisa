import { DataRootURL } from 'engine/network'
import { mecuateUser } from 'engine/cookies'
import { NodeHandlerType } from 'models/networkAPI.nodes'

export const nodeHandler: NodeHandlerType = {
    getNodesList: (params) =>
        DataRootURL.read(`/data/endpoint/${mecuateUser.access_token}/list`, {
            params,
        }),
    getNode: ({ id }) =>
        DataRootURL.read(`/data/endpoint/${mecuateUser.access_token}/${id}`, {}),
    createNode: (params) =>
        DataRootURL.create(`/data/endpoint/${mecuateUser.access_token}/new`, {
            data: params,
        }),
    updateNode: ({ id, ...data }) =>
        DataRootURL.update(`/data/endpoint/${mecuateUser.access_token}/${id}`, {
            data: data,
        }),
    deleteNode: ({ id }) =>
        DataRootURL.delete(`/data/endpoint/${mecuateUser.access_token}/${id}`, {}),
}
