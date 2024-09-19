import React from 'react'
import { headerNavData } from '../data/navData'
import Navbar from '../components/nav/Navbar'

const Header = () => {

  return (
    <header className='sticky top-0 md:mt-6 bg-white z-50'>
      <Navbar items={headerNavData} />
    </header>
  )
}

export default Header