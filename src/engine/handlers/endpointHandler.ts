import { DataRootURL } from 'engine/network'
import { mecuateUser } from 'engine/cookies'
import { EndpointsHandlerType } from 'models/networkAPI.endpoints'

export const endpointHandler: EndpointsHandlerType = {
    getEndpointsList: (params) =>
        DataRootURL.read(`/data/${mecuateUser.instance_name}/endpoint/list/all`, {
            params,
        }),
    getEndpoint: ({ id }) =>
        DataRootURL.read(`/data/${mecuateUser.instance_name}/endpoint/item/${id}`, {}),
    createEndpoint: (params) =>
        DataRootURL.create(`/data/${mecuateUser.instance_name}/endpoint/item/new`, {
            data: params,
        }),
    updateEndpoint: ({ id, ...data }) =>
        DataRootURL.update(`/data/${mecuateUser.instance_name}/endpoint/item/${id}`, {
            data: data,
        }),
    deleteEndpoint: ({ id }) =>
        DataRootURL.delete(`/data/${mecuateUser.instance_name}/endpoint/item/${id}`, {}),
}
