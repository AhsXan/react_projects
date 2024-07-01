//import React from 'react'
import ReactDOM from 'react-dom/client'
// eslint-disable-next-line no-unused-vars
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
// eslint-disable-next-line no-unused-vars
import About from './Components/About/About.jsx'
const router =createBrowserRouter([
    {
        path:'/', 
        element: <Layout/>,
        children:[
            {
                path:"",
                element:<Home/>

            },{

                path:"About",
                element:<About/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />
  
)
