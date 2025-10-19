import React from 'react'
import { Outlet } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

function Workspace(){
    const{user}=useUser();

    if(!user){
        return <div>Please sign in to access the workspace.</div>;
    }
  return (
    <div> 
        
         Workspace
         <Outlet/>

    </div>
  )
}

export default Workspace