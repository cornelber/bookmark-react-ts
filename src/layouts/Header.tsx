import React from 'react'
import { BookmarkLogo } from '../constants/Logo'
import Navbar from '../components/Navbar'

const Header = () => {
  return (
    <header className='bg-white relative pt-6 '>
        <div className="container mx-auto py-6 flex justify-between items-center">
            <a href="/">
                <BookmarkLogo />
            </a>
            <Navbar />
        </div>
    </header>
  )
}

export default Header