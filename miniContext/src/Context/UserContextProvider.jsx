/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */ 
import React from "react";
import UserContext from "./useContext";


const UserContextProvider= ({children})=>{

    const [user,setUser]=  React.useState(0);
return (
<UserContext.Provider value= {{user,setUser}}>

{children}

</UserContext.Provider>

)
}

export default UserContextProvider;