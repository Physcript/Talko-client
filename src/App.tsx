
import React , { useContext,useReducer } from 'react';
import reducer from './context/auth/reducer'
import { IReducer } from './interface/context/reducer'
import Navigation from './components/Navigation'
import routes from './routes';
import socket from './sockets'
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { defaultIAuthState, IAuthContextState } from './interface/context/context';
import { UserContextProvider } from './context/auth/context';
import ProtectedComponent from './components/ProtectedComponent';


function App() { 
  
  const [ userState,userDispatch ] = useReducer(reducer,defaultIAuthState)
  const UserContextValue = {
    userState,
    userDispatch
  }  
  socket.on('con',() => {})
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
