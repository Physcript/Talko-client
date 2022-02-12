import { IAuthState } from "../../interface/context/context";
import { IReducer } from '../../interface/context/reducer'


const reducer = (state: IAuthState, action: IReducer) => {
 
  switch(action.TYPE){
    case 'LOGIN': 
      {
        return {
          USER: null,
          TOKEN: '',
          ONLINE: true
        }
      }
    default: 
      {
        return state
      }
  }
}

export default reducer
