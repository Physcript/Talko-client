

import React , { useContext,useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../context/auth/context'
import { IUser } from '../interface/user'

export interface IMainPage {}

const MainPage = (props: React.FunctionComponent<IMainPage>) => {
  const AuthContext = useContext(UserContext)
  const navigate = useNavigate() 
  const [ user,setUser ] = useState<IUser | null >(AuthContext.userState.USER)  
  const [ token,setToken ] = useState<string>(localStorage.getItem('token') || '') 
  
  const [ loading,setLoading ] = useState<boolean>(true)

  useEffect(() => {
    
    if(user)
    {
      navigate('/home') 
    }
    
    if(token !== '')
    {
      fetchCredentials() 
    }

  },[])  

  const fetchCredentials = () => {


    const token  = localStorage.getItem('Token') || ''
    const url = 'http://localhost:1337/api/authenticate'
    
    const request = new Request(url,{
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Token': token } 
    })
    
    fetch(request)
      .then((val) => {
        if(val.status === 200) 
        {
          val.json().then((res) => {

            const USER = res.message.user
            const TOKEN = res.message.token
            
            AuthContext.userDispatch({ TYPE: 'LOGIN' , PAYLOAD: { USER,TOKEN } })
            navigate('/home') 

          })  
        }
        else
        {
          val.json().then((res) => {
            console.log('No credentials found')
            localStorage.removeItem('token')
          })
        }
      })
      .catch((error) => {
          console.log('Error connection', error)
      })
      .finally(() => {
        setLoading(false)
      })

  }


  if(loading)
  {
    return (
      <div>
        Loading
      </div>   
    )
  }

  return (
    
    <div>
      Main Page
    </div>
      
  )
}

export default MainPage
