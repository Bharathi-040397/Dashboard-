import { Route, Routes, Navigate } from 'react-router-dom'
import { rootPath } from '../../../logic/paths'
import { Home } from '../../home/Home'

const notFoundRoute: RouteDefinition = {
  path: '*',
  element: <div />,
  protected: false,
  title: '',
}

export const routes: RouteDefinition[] = [
  {
    path: rootPath,
    element: Home,
    protected: false,
    title: 'Home',
    pathType: 0,
  },
]
  .map((r) => ({ ...r, element: r.element }))
  .concat(notFoundRoute as any) // Ensure that notFound is the last route

export interface RouteDefinition {
  path: string
  protected?: boolean
  redirect?: string
  element?: any
  routes?: RouteDefinition[]
  title?: string
  requires?: any
  pathType?: number
}

interface Props {
  // userLoaded: boolean
}
interface RoutesProps {}

export interface User {
  id: string
}

function getRouteRenderWithAuth(isLoggedIn: boolean, route: RouteDefinition) {
  if (isLoggedIn === route.protected || !route.redirect) {
    const RouteComponent = route.requires ? route.requires(route.element) : route.element
    return { element: <RouteComponent /> }
  } else {
    // return (routeProps: any) => {
    // const from = route.redirect == '/login' ? `?from=${routeProps.match.url}` : ''
    return { element: <Navigate replace to={route.redirect} /> }
    // }
  }
}

export const RoutesComponent: React.FC<Props & RoutesProps> = () => {
  // const { user } = props
  const isLoggedIn = false

  // userIsLoggedIn(user) && userIsEmailVerified(user)
  // if (!props.initialLoad) {
  //   return <Loading />
  // }

  const mapRoutes = (route: RouteDefinition, i: number) => {
    const render = getRouteRenderWithAuth(isLoggedIn, route)
    return <Route key={i} path={route.path} {...render} />
  }

  return <Routes>{routes.map(mapRoutes)}</Routes>
}
