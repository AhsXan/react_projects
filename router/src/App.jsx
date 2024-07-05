//import { useState } from 'react'
import Header from './Components/Header/Header'
import './App.css'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'

function App() {
  //const [count, setCount] = useState(0)
  return (
    <>
    <Header/>
    <Home/>
    <Footer/>
    </>
  )
} 

//not using when router in on
export default App