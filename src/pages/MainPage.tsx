

import React, { useContext } from 'react'
import UserContext from '../context/auth/context'
export interface IMainPage {}

const MainPage = (props: React.FunctionComponent<IMainPage>) => {
  const AuthContext = useContext(UserContext)
  // testing context
  const testHandler = () => {
    const iasd = {
      USER: null,
      TOKEN: '',
      ONLINE: false
    } 
    AuthContext.userDispatch({ TYPE: 'LOGIN', PAYLOAD: iasd })
    
  }

  return (

    <div>
      Main Page
      <button onClick = { testHandler }>test</button>
    </div>
      
  )
}

export default MainPage
