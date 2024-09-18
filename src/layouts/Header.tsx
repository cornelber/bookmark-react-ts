import React, { useCallback, useEffect, useState } from 'react'
import { BookmarkLogo } from '../components/icons/BookmarkLogo'
import Navbar from '../components/Navbar'
import BurgerMenuButton from '../components/BurgerMenuButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Memoize the function to prevent unnecessary re-renders
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []); // toggleMenu will only be created once


  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <header className='sticky top-0 md:pt-6 px-6 bg-white'>
        <div className="container mx-auto py-6 flex justify-between items-center">
            <BookmarkLogo className='z-40' isMenuOpen={isMenuOpen}/>
            <Navbar isMobileMenuOpen={isMenuOpen} />
            <BurgerMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
    </header>
  )
}

export default Header