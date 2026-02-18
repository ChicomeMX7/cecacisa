import {
    nodeHandler,
    fileHandler,
    schemaHandler,
    uploadHandler,
    endpointHandler,
} from 'engine/handlers'
// TODO: [` implement api versioning setup `]-{2023-10-17}
export const networkHandlers = {
    nodesAPI: nodeHandler,
    filesAPI: fileHandler,
    schemaAPI: schemaHandler,
    uploadsAPI: uploadHandler,
    endpointsAPI: endpointHandler,
}
