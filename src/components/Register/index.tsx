
import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap'

export interface IRegister {}

const Register: React.FC<IRegister> = (props) => {
  
  const [ userData, setUserData ] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [ loading,setLoading ] = useState<boolean>(false)
  const [ success,setSuccess ] = useState<string>('')
  const [ error,setError ] = useState<string>('')
  
  const registerHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setLoading(true)    
    const url = 'http://localhost:1337/api/register'
    const makingBody = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      confirmPassword: userData.confirmPassword
    }
    const body = JSON.stringify(makingBody)
    const request = new Request(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body
    })
    
    fetch(request)
      .then((val) => {
        if(val.status === 200)
        {
          val.json().then((res) => {
            setError('')
            setSuccess('Account created')
            setUserData((val) => ({
              name: '',
              email: '',
              password: '',
              confirmPassword: '' 
            }))
          })
        }
        else 
        {
          val.json().then((res) => {
            setSuccess('')
            setError(res.message)
          })
        }
      })
      .catch((error) => {
        setError(`${ error }, Network proble,`)
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
      })
    )

  }
  if(loading) 
  {
    return (
      <div className = 'd-flex align-items-center justify-content-center' style = {{ height: '90vh' }}>  
        <Spinner animation = 'border' />
      </div>
    )
  }
  return (
    <div className = 'd-flex align-items-center justify-content-center' style = {{ height: '90vh' }}>
      <div className = 'd-flex flex-column gap-2'>
        { success? ( <label className = 'text-success'>{success}</label> ) : '' }
        { error ? ( <label className = 'text-danger'>{error}</label> ) : '' }
        <label>Register</label>

        <input 
          type = 'text'
          name = 'name'
          placeholder = 'Name'
          value = { userData.name }
          onChange = { onChange }
         />

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
      
        <input
          type = 'password'
          name = 'confirmPassword'
          placeholder = 'Confirm password'
          value = { userData.confirmPassword }
          onChange = { onChange }
        />

        <button onClick = { registerHandler}>Register</button>

      </div> 
    </div>
  )
}

export default Register
