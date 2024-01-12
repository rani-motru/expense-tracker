import React from 'react'
import SignUpForm from '../components/SignUpForm'
import LoginForm from '../components/LoginForm'

function AuthPage(props) {
  return (
    <>
    <h1>Welcome to Expen$e Tracker</h1>
    <LoginForm setUser={props.setUser} />
    <SignUpForm setUser={props.setUser}/>
   
    </>
  )
}

export default AuthPage