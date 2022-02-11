

import { IRoutes } from '../interface/routes'
import MainPage from '../pages/MainPage'
import RLPage from '../pages/RLPage'

const mainRoutes: IRoutes[] = [

  {
    path: '/',
    auth: false,
    element: MainPage
  },

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
