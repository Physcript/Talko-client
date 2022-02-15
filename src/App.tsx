import React , { useState,useContext,useReducer,useEffect } from 'react';
import { IUser } from './interface/user';
import reducer from './context/auth/reducer'
import { IReducer } from './interface/context/reducer'
import Navigation from './components/Navigation'
import routes from './routes';
import socket from './sockets'
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { defaultIAuthState, IAuthContextState } from './interface/context/context';
import UserContext, { UserContextProvider } from './context/auth/context';
import ProtectedComponent from './components/ProtectedComponent';


function App() { 
  
  const [ userState,userDispatch ] = useReducer(reducer,defaultIAuthState)
    
  const AuthContext = useContext(UserContext)
  const [ user,setUser ] = useState<IUser | null >(AuthContext.userState.USER)  
  const [ token,setToken ] = useState<string>(localStorage.getItem('token') || '') 
  
  const [ loading,setLoading ] = useState<boolean>(true)

  useEffect(() => {
    
    if(user)
    {

    }
    
    if(token !== '' )
    {
      fetchCredentials(token) 
    }
    else 
    {
      setLoading(false)
    }

  },[])  

  const fetchCredentials = (authToken: string) => {

    console.log('credit')

    const token  = localStorage.getItem('Token') || ''
    const url = 'http://localhost:1337/api/authenticate'
    
    const request = new Request(url,{
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Token': authToken } 
    })
    
    fetch(request)
      .then((val) => {
        if(val.status === 200) 
        {
          val.json().then((res) => {

            const USER = res.message.user
            const TOKEN = res.message.token
            
            userDispatch({ TYPE: 'LOGIN' , PAYLOAD: { USER,TOKEN } })

          })  
        }
        else
        {
          val.json().then((res) => {
            console.log('No credentials found')

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
  

  const UserContextValue = {
    userState,
    userDispatch
  }  
  socket.on('con',() => {})



  if(loading)
  {
   <div>
      Loading..
    </div> 
  }

  
  return (
    <UserContextProvider value = { UserContextValue }>
      <BrowserRouter>
        <Navigation />
        <Routes> 

          {
            routes.map((val,index) => {
              
              if(val.auth)
                {
                  return (
                    <Route 
                      path = { val.path }
                      key = { index }
                      element = {
                        <ProtectedComponent>
                          <val.element /> 
                        </ProtectedComponent>
                      }
                    />
                  )
                }
              return (
                <Route 
                  path = { val.path }
                  key = { index }
                  element = { <val.element /> }
                />
              )
            })
          }

        </Routes> 
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
