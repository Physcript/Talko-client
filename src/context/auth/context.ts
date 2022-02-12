import React, { createContext } from 'react'
import { defaultIAuthState, IAuthContextState } from '../../interface/context/context'
import { defaultUser } from '../../interface/user'

const UserContext = createContext<IAuthContextState>({
  userState: defaultIAuthState,
  userDispatch: () => {}
})

export const UserContextProvider = UserContext.Provider
export const UserContextConsumer = UserContext.Consumer
export default UserContext
