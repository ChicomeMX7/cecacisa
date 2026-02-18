export enum MecuatePage {
    HOME,
    VISION,
    MISSION,
    CONTACT,
}

export const MecuateRoutesMap: Record<MecuatePage, string> = {
    [MecuatePage.HOME]: '/',
    [MecuatePage.VISION]: '/vision',
    [MecuatePage.MISSION]: '/mission',
    [MecuatePage.CONTACT]: '/contact',
}
