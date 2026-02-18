export enum HomeRoutes {
    MECUATE,
    ACCOUNT,
    ACADEMY,
    SERVICES,
    DOCUWEB,
    PROJECTS,
    PUBLICATIONS,
    CONTACT,
}
export const RoutesMap: Record<HomeRoutes, string> = {
    [HomeRoutes.MECUATE]: '/mecuate/*',
    [HomeRoutes.ACCOUNT]: '/account',
    [HomeRoutes.ACADEMY]: '/academy/*',
    [HomeRoutes.SERVICES]: '/services',
    [HomeRoutes.DOCUWEB]: '/docuweb',
    [HomeRoutes.PROJECTS]: '/projects',
    [HomeRoutes.PUBLICATIONS]: '/publications',
    [HomeRoutes.CONTACT]: '/contact',
}
export const RouteName: Record<HomeRoutes, string> = {
    [HomeRoutes.MECUATE]: '/mecuate',
    [HomeRoutes.ACCOUNT]: '/account',
    [HomeRoutes.ACADEMY]: '/academy',
    [HomeRoutes.SERVICES]: '/services',
    [HomeRoutes.DOCUWEB]: '/docuweb',
    [HomeRoutes.PROJECTS]: '/projects',
    [HomeRoutes.PUBLICATIONS]: '/publications',
    [HomeRoutes.CONTACT]: '/contact',
}
