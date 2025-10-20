import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter} from "react-router-dom";
import {RouterProvider} from "react-router-dom";
import { ClerkProvider } from '@clerk/clerk-react';
import Workspace from '../workspace/index.tsx';
import { UserDetailContext } from './../context/UserDetailContext.tsx';
import { useState } from 'react';

const router = createBrowserRouter([
{path:"/", element:<App/>} ,
{path:"/workspace",element:<Workspace/>,
}
]);


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

// we use context api to provide user details to all components
function Root() {
  const[userDetails,setUserDetails]=useState();
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <UserDetailContext.Provider value={{userDetails,setUserDetails}}>
      <RouterProvider router={router} />
      </UserDetailContext.Provider>
    </ClerkProvider>
  )
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
