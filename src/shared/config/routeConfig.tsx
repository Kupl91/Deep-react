//src\shared\config\routeConfig.tsx
import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
    Main = 'main',
    ABout = 'about'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.Main]: '/',
    [AppRoutes.ABout]: '/about'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.Main]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.ABout]: {
        path: RoutePath.about,
        element: <AboutPage />
    },
}