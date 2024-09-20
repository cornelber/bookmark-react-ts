import React from "react";
import {DesktopNav, MobileNav} from "./NavItems";

interface NavbarProps {
  isMobileMenuOpen: boolean;
}

const Navbar = ({isMobileMenuOpen} : NavbarProps) => {
  return <nav> {isMobileMenuOpen ? <MobileNav /> : <DesktopNav />} </nav>
};

export default Navbar;
