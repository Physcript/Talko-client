
import { IAuthState } from './context'

export interface IReducer {
  TYPE: 'LOGIN' | 'LOGOUT' | 'AUTH',
  PAYLOAD: IAuthState 
}
