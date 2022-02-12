import React from 'react';
import Navigation from './components/Navigation'
import routes from './routes';
import socket from './sockets'
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() { 
  socket.on('con',() => {})
  return (

    <BrowserRouter>
      <Navigation />
      <Routes> 

        {
          routes.map((val,index) => {
            return (
              <Route key = { index } path = { val.path } element = { <val.element /> }  />
            )
          })
        }

      </Routes> 
      
    </BrowserRouter>

  );
}

export default App;
