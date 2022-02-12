import React from "react";
import { Container } from "react-bootstrap";

export interface ILogin {}

const Login: React.FC<ILogin> = (props) => {
  return (
      <div className = 'd-flex align-items-center justify-content-center' style = {{ height: '90vh' }} >
        
        <div className = 'd-flex flex-column gap-2'>
          <label>Login</label>
          <input 
            type = 'text'
            name = 'email'
            placeholder = 'Email'
          />
          <input 
            type = 'password'
            name = 'password'
            placeholder = 'Password'
          />
          <button>
            Login
          </button>

        </div>
      
    </div>

  )
}

export default Login
