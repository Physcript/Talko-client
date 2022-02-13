

import ProtectedComponent from '../components/ProtectedComponent'
import { IRoutes } from '../interface/routes'
import HomePage from '../pages/HomePage'
import MainPage from '../pages/MainPage'
import RLPage from '../pages/RLPage'

const mainRoutes: IRoutes[] = [

  {
    path: '/',
    auth: false,
    element: MainPage
  },
  {
    path: '/home',
    auth: true,
    element: HomePage 
  }

]

const authRoutes: IRoutes[] = [

  {
    path: '/login',
    auth: false,
    element: RLPage
  },
  {
    path: '/register',
    auth: false,
    element: RLPage 
  }

]

const routes: IRoutes[] = [
  ...mainRoutes,
  ...authRoutes,
]


export default routes
