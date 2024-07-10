/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
function Github() {
    const data=useLoaderData()
// const [data,setData]=useState([])

//     useEffect(() => {
//   fetch("https://api.github.com/users/hiteshchoudhary")
//   .then(response=>response.json()).then(data=>{
//     console.log(data);
//     setData(data);
//   })

    //   }, [])
    
    return (
        <>
        <div className=' m-4 bg-gray-600 text-white p-4 text-3xl text-center'>
        Github Followers : {data.followers}
        <img src={data.avatar_url} alt="Git pic" width={300} />

        </div>
        </>
   );
}

export default Github;
export const githubInfoLoader= async()=>{
const response = await fetch('https://api.github.com/users/msufyan634')
return response.json()
}

// React Router, a loader function is a special type of function that's used to preload data for a route.
//  When a user navigates to a route,
//   React Router will call the associated loader function to fetch the necessary data,
//    and then pass that data as an argument to the route's component using the useLoaderData hook.