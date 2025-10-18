import React from 'react'
import logo from '../../assets/logo.png'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <div className='flex items-center justify-between px-10 shadow'>
        <img src={logo} alt = 'logo' width={150} height={150}/>
        <Button>Get Started</Button>
    </div>
  )
}

export default Header