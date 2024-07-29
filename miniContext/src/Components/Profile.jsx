/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */ 
import React,{useContext, useState} from 'react'
import UserContext from '../Context/useContext'

export const Profile = () => {
const [username,setUsername]=useState("")
const [password,setPassword]=  useState(null)

const {setUser}=useContext(UserContext)

const  handleSubmit=(e)=>{
e.preventDefault()
setUser({username,password})

}



  return (
    <>
    <h2>Login</h2>
    <input type="text" name="" id="" placeholder='Name'
    
    value={username}
    onChange={(e)=>  setUsername(e.target.value)}
    />
    <input type="password" name="" id=""placeholder='Password' 
    value={password}
    onChange={(e)=>  setPassword(e.target.value)}
    
    />    
    <button  onClick={handleSubmit}>Submit</button>

    </>
  )
}
