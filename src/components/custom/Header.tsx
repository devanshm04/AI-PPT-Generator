import React, { useContext } from 'react'
import logo from '../../assets/logo.png'
import { Button } from '../ui/button'
import { SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import { Link, useLocation } from 'react-router-dom'
import {Gem} from 'lucide-react'
import { UserDetailContext } from '../../../context/UserDetailContext'

const Header = () => {
  const{user} = useUser()
  const location = useLocation();
  const {userDetails,setUserDetails}=useContext(UserDetailContext);
  console.log(location.pathname);
  return (
    <div className='flex items-center justify-between px-10 shadow'>
        <img src={logo} alt = 'logo' width={150} height={150}/>
        {!user ?
        <SignInButton mode='modal'>
        <Button>Get Started</Button>
        </SignInButton>
        :<div className='flex gap-5 items-center'>
        <UserButton/>
         {location.pathname.includes('Workspace')?
         <div className='flex items-center px-2 py-3 gap-1 bg-amber-100'>
          <Gem/> {userDetails?.credits??0}
         </div>:
        <Link to="/Workspace">
           <Button>Go to Workspace</Button>
        </Link>
        }
        </div>}
      
    </div>
  )
}

export default Header