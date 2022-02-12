import { IUser } from "../user";
import { IReducer } from './reducer'

export interface IAuthState {
  USER: IUser | null,
  TOKEN: string,
}

export const defaultIAuthState = {
  USER: null,
  TOKEN: '',
}

export interface IAuthContextState {
  userState: IAuthState,
  userDispatch: React.Dispatch<IReducer>
}


