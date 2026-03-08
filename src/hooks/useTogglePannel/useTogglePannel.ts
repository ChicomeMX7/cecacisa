import { useState } from 'react'

export enum PANNELS {
    CONTENT,
    SCHEMAS,
    ENDPOINTS,
    UPLOADS,
    NODES,
    DASHBOARD,
    UNKNOWN,
}

const initialRecords: Record<PANNELS, boolean> = {
    [PANNELS.CONTENT]: true,
    [PANNELS.SCHEMAS]: true,
    [PANNELS.ENDPOINTS]: false,
    [PANNELS.UPLOADS]: true,
    [PANNELS.NODES]: true,
    [PANNELS.DASHBOARD]: true,
    [PANNELS.UNKNOWN]: false,
}

export const useTogglePannel = () => {
    const [isPannelOpen, setPannelOpen] = useState(initialRecords)

    const openPanel = (item: PANNELS) => {
        setPannelOpen({ ...isPannelOpen, [item]: true })
    }

    const closePanel = (item: PANNELS) => {
        setPannelOpen({ ...isPannelOpen, [item]: false })
    }

    const togglePanel = (item: PANNELS) => {
        setPannelOpen({ ...isPannelOpen, [item]: !isPannelOpen[item] })
    }

    return {
        isPannelOpen,
        openPanel,
        closePanel,
        togglePanel,
    }
}
