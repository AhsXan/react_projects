import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive");


  }
  return (
    
    <div className="h-screen w-full duration-200 " style={{backgroundColor:color } }>
    
     <div className="fixed flex flex-wrap bottom-16 justify-center inset-x-0 px-2" >
          
    <div className="flex flex-wrap justify-center gap-3 shadow-2xl rounded-2xl px-4 py-4 bg-white bg-opacity-50">
   <button onClick={()=>setColor=("red")} className="bg-red-500 outline-none rounded-lg px-3 py-2" >
     Red
   </button>
   <button className="bg-blue-500 rounded-lg px-3 py-2" >
     Blue
   </button>
   <button className="bg-green-500 rounded-lg px-3 py-2" >
     Green
   </button>
   <button className="bg-gray-500 rounded-lg px-3 py-2" >
     Grey
   </button>
   <button className="bg-black rounded-lg px-3 py-2"  style={{color: "white"}} >
     Black
   </button>
   <button className="bg-white rounded-lg px-3 py-2" >
     White
   </button>
    </div>
     </div>
     </div>  
  )
}

export default App
