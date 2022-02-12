
import React from 'react'
import Login from '../components/Login'
import Register from '../components/Register'
import { Container } from 'react-bootstrap'

export interface IRLPage {}

const RLPage = (props: React.FunctionComponent<IRLPage>) => {
  
  

  const isLogin = window.location.pathname.includes('login')
  
  if(isLogin) {
    return (
      <Container>
        <Login />
      </Container>
    )
  }

  return (
    <Container>
      <Register />
    </Container>
  )
}


export default RLPage

