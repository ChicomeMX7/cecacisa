import { SchemaHandlerType } from 'models/networkAPI.schemas'
import { UploadsHandlerType } from 'models/networkAPI.uploads'
import { NodeHandlerType } from 'models/networkAPI.nodes'
import { FileHandlerType } from 'models/networkAPI.files'
import { EndpointsHandlerType } from 'models/networkAPI.endpoints'

export type NetworkHandlers = {
    nodesAPI: NodeHandlerType
    filesAPI: FileHandlerType
    schemaAPI: SchemaHandlerType
    uploadsAPI: UploadsHandlerType
    endpointsAPI: EndpointsHandlerType
}
