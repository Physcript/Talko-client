import React from 'react';
import routes from './routes';  
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() { 
  return (

    <BrowserRouter>

      <Routes> 

        {
          routes.map((val) => {
            return (
              <Route path = { val.path } element = { <val.element props = { val?.props } /> } />  
            )
          })
        }

      </Routes> 
      
    </BrowserRouter>

  );
}

export default App;
