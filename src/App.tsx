import { useState } from 'react'

import './App.css'
import Header from './components/custom/Header.tsx'
import Hero from './components/custom/Hero.tsx'
import { UserDetailContext } from '../context/UserDetailContext.tsx';


function App() {
  const [userDetails, setUserDetails] = useState<Record<string, unknown> | null>(null);


  return (
   <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      <Header />
      <Hero />
   </UserDetailContext.Provider>
  )
}

export default App
