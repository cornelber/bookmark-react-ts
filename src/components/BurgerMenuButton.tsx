import React from "react";
import clx from "classnames";

interface BurgerMenuButtonProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const BurgerMenuButton = ({ isMenuOpen, toggleMenu }: BurgerMenuButtonProps) => {
  const baseClasses = 'block w-[18px] h-[3px] bg-secondary-dark group-hover:bg-primary-red transition-all duration-300';

  return (
    <button onClick={toggleMenu} className="relative z-40 md:hidden flex items-center focus:outline-none group" aria-label="Toggle Menu">
      <div className="space-y-[3px]">
        <span className={clx(baseClasses, {"transform rotate-45 translate-y-1.5 bg-white": isMenuOpen})}></span>
        <span className={clx(baseClasses, {"opacity-0" : isMenuOpen,})}></span>
        <span className={clx(baseClasses, {"transform -rotate-45 -translate-y-1.5 bg-white": isMenuOpen})}></span>
      </div>
    </button>
  );
};

export default BurgerMenuButton;
