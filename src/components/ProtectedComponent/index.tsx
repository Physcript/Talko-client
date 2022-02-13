import React , { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import UserContext from '../../context/auth/context' 
export interface IProtectedComponent {}

const ProtectedComponent: React.FC<IProtectedComponent> = ( props ) => {
  const { USER } = useContext(UserContext).userState
  const { children } = props

  if( USER === null ) 
  {
    return <Navigate to = '/' /> 
  }

  return (
    <div> 
      <label>asd</label>
      { children }
    </div>
  ) 

}

export default ProtectedComponent
