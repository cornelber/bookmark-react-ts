import React, { useState } from 'react'
import NavItems from './NavItems'
import NavBurger from './NavBurger'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

  return (
    <nav>
        <NavBurger isOpen={isOpen} toggleMenu={toggleMenu} />
        <NavItems />
    </nav>
  )
}

export default Navbar