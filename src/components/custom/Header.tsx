import React from 'react'
import logo from '../../assets/logo.png'
import { Button } from '../ui/button'
import { SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'

const Header = () => {
  const{user} = useUser()
  return (
    <div className='flex items-center justify-between px-10 shadow'>
        <img src={logo} alt = 'logo' width={150} height={150}/>
        {!user ?
        <SignInButton mode='modal'>
        <Button>Get Started</Button>
        </SignInButton>
        :<div className='flex gap-5 items-center'>
        <UserButton/>
        <Link to="/Workspace">
           <Button>Go to Workspace</Button>
        </Link>
        </div>}
        
    </div>
  )
}

export default Header