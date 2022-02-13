import { defaultIAuthState, IAuthState } from "../../interface/context/context";
import { IReducer } from '../../interface/context/reducer'


const reducer = (state: IAuthState, action: IReducer) => {
  
  const { USER,TOKEN } = action.PAYLOAD

  switch(action.TYPE) {
    
    case 'LOGIN':

      localStorage.setItem('Token',TOKEN ) 

      { 
        return {
          USER,
          TOKEN,
          ONLINE: true
        }
      }

    case 'LOGOUT':
      {
        return defaultIAuthState
      }

    default: 
      {
        return state
      }
  }
}

export default reducer
