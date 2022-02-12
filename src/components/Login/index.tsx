import React, { useState } from "react";
import { Container,Spinner } from "react-bootstrap";

export interface ILogin {}

const Login: React.FC<ILogin> = (props) => {
  const [ userData,setUserData ] = useState({
    email: '',
    password: ''
  })

  const [ loading,setLoading ] = useState<boolean>(false)
  const [ success,setSuccess ] = useState<string>('')
  const [ error,setError ] = useState<string>('')
  
  const loginHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setLoading(true)
    const toBody = {
      email: userData.email,
      password: userData.password
    } 
    const body = JSON.stringify(toBody)
    const url = 'http://localhost:1337/api/login'
    const request = new Request(url,{
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body
    })

    fetch(request)
      .then((val) => {
        if(val.status === 200) 
        {
          val.json().then((res) => {
            const { user,token } = res.message
            console.log(user)
            console.log(token)
          }) 
        }
        else
        {
           val.json().then((res) => {
            setError(res.message)
          }) 
        }
      })
      .catch((error) => {
        setError(`Error Connection, ${error}`)
      })
      .finally(() => {
        setLoading(false)
      })


  }
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name,value } = e.target
    setUserData((val) => ({
      ...val,
      [name]: value
    }))
  }

  if( loading )
  {
    return (
      <div className = 'd-flex align-items-center justify-content-center' style = {{ height: '90vh' }}>
        <Spinner animation = 'border' /> 
      </div>
    )
  }

  return (
      <div className = 'd-flex align-items-center justify-content-center' style = {{ height: '90vh' }} >
        
        <div className = 'd-flex flex-column gap-2'>
          { error ? ( <label className = 'text-danger'>{error}</label>) : '' }
          <label>Login</label>
          <input 
            type = 'text'
            name = 'email'
            placeholder = 'Email'
            value = { userData.email }
            onChange = { onChange }
          />
          <input 
            type = 'password'
            name = 'password'
            placeholder = 'Password'
            value = { userData.password }
            onChange = { onChange }
          />
          <button
            onClick = { loginHandler }
          >
            Login
          </button>

        </div>      
    </div>

  )
}

export default Login
