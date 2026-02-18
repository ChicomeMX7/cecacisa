import { DataRootURL } from 'engine/network'
import { mecuateUser } from 'engine/cookies'
import { UploadsHandlerType } from 'models/networkAPI.uploads'

export const uploadHandler: UploadsHandlerType = {
    getUploadFilesList: (params) =>
        DataRootURL.read(`/data/uploads/${mecuateUser.access_token}/list`, {
            params,
        }),
    getUploadFile: ({ id }) =>
        DataRootURL.read(`/data/uploads/${mecuateUser.access_token}/${id}`, {}),
    createUploadFile: (params) =>
        DataRootURL.create(`/data/uploads/${mecuateUser.access_token}/new`, {
            data: params,
        }),
    updateUploadFile: ({ id, ...data }) =>
        DataRootURL.update(`/data/uploads/${mecuateUser.access_token}/${id}`, {
            data: data,
        }),
    deleteUploadFile: ({ id }) =>
        DataRootURL.delete(`/data/uploads/${mecuateUser.access_token}/${id}`, {}),
}
