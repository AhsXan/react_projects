/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */ 
import React, { useContext } from 'react'
import UserContext from '../Context/useContext'
export const Login = () => {
  const {user}=  useContext(UserContext)


  if (!user) return <h1>Please Login</h1> 

  return <h2>Login Successful {user.username}</h2>


}
