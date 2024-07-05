//import React from 'react'
/* eslint-disable no-unused-vars */
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";

import UserID from "./Components/User/UserID.jsx";
import Github,{githubInfoLoader} from "./Components/Github/Github.jsx";

// const router =createBrowserRouter([
//     {
//         path:'/',
//         element: <Layout/>,
//         children:[
//             {
//                 path:"",
//                 element:<Home/>

//             },{

//                 path:"About",
//                 element:<About/>
//             },
//             {
//                 path:"Contact",
//                 element:<Contact/>
//             }
//         ]
//     }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="UserID/:userID" element={<UserID />} />
      <Route 
      path="Github" 
      element={<Github />}
      loader={githubInfoLoader}
      />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
