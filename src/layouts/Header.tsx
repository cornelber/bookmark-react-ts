import React, { useCallback, useEffect, useState } from 'react'
import { BookmarkLogo } from '../components/icons/BookmarkLogo'
import Navbar from '../components/Navbar'
import BurgerMenuButton from '../components/BurgerMenuButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Memoize the function to prevent unnecessary re-renders
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []); // toggleMenu doesn't get recreated on every render


  useEffect(() => {
    document.documentElement.style.overflowY = isMenuOpen ? "hidden" : "";

    return () => {
      // Cleanup function to reset the overflow style
      document.documentElement.style.overflowY = '';
    };
  }, [isMenuOpen]);

  return (
    <header className='sticky top-0 md:mt-6 px-6 bg-white z-50'>
        <div className="container mx-auto py-6 flex justify-between items-center">
            <BookmarkLogo className='z-50' isMenuOpen={isMenuOpen}/>
            <Navbar isMobileMenuOpen={isMenuOpen} />
            <BurgerMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
    </header>
  )
}

export default Header