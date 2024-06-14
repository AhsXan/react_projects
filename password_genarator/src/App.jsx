import { useCallback, useState } from 'react'
import './App.css'


function App() {
  const [len, setLen] = useState(8)
  const [num_allowed, setNum_allowed]=useState(false)
  const [char_allowed, setChar_allowed]=useState(false)
  const [Pass_allowed, setPass_allowed]=useState("")
  
  const passwordGenarator=useCallback(()=>{
  let pass= ""
  let char="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  
  if(num_allowed) char+="0123456789";
  if(char_allowed) char+="!@#$%^&*()";

  for(let i=0;i<len;i++){
    let index =Math.floor(Math.random() * arr.length+1);
    pass= char.charAt(index)
  } 
  
  setPass_allowed(pass)
}
  ,[len,num_allowed,char_allowed,Pass_allowed]);

  return (
    <> 
        <h1 className='text-white text-center text-4xl py-14'>Password Genarator</h1>
        <div className='w-full max-w-md '>



        </div>
    </> 
  )
}

export default App