import { DataRootURL } from 'engine/network'
import { mecuateUser } from 'engine/cookies'
import { FileHandlerType } from 'models/networkAPI.files'

export const fileHandler: FileHandlerType = {
    getFilesList: (params) =>
        DataRootURL.read(`/data/${mecuateUser.instance_name}/content/list/all`, {
            params,
        }),
    getFile: ({ id }) =>
        DataRootURL.read(`/data/${mecuateUser.instance_name}/content/item/${id}`, {}),
    getManyFiles: ({ ids }) =>
        DataRootURL.read(`/data/${mecuateUser.instance_name}/content/item/${ids.join('&')}`, {}),
    createFile: (params) =>
        DataRootURL.create(`/data/${mecuateUser.instance_name}/content/item/new`, {
            data: params,
        }),
    updateFile: ({ id, ...data }) =>
        DataRootURL.update(`/data/${mecuateUser.instance_name}/content/item/${id}`, {
            data: data,
        }),
    deleteFile: ({ id }) =>
        DataRootURL.delete(`/data/${mecuateUser.instance_name}/content/item/${id}`, {}),
}
