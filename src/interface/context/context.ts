import { IUser } from "../user";
import { IReducer } from './reducer'

export interface IAuthState {
  USER: IUser | null,
  TOKEN: string,
  ONLINE: boolean
}

export const defaultIAuthState = {
  USER: null,
  TOKEN: '',
  ONLINE: false
}

export interface IAuthContextState {
  userState: IAuthState,
  userDispatch: React.Dispatch<IReducer>
}


