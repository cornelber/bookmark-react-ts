import React from "react";

interface NavBurgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const NavBurger = ({ isOpen, toggleMenu }: NavBurgerProps) => {
  return (
    <button
      onClick={toggleMenu}
      className="focus:outline-none md:hidden flex items-center"
      aria-label="Toggle Menu"
    >
      <div className="space-y-[3px]">
        <span
          className={`block w-[18px] h-[3px] bg-secondary-dark transition-transform duration-300 ${
            isOpen ? "transform rotate-45 translate-y-1" : ""
          }`}
        ></span>
        <span
          className={`block w-[18px] h-[3px] bg-secondary-dark transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block w-[18px] h-[3px] bg-secondary-dark transition-transform duration-300 ${
            isOpen ? "transform -rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </div>
    </button>
  );
};

export default NavBurger;
