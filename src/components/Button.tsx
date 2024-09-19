import React from 'react';
import { ButtonProps } from '../types/interfaces';
import clx from 'classnames';

interface BurgerNavbarButtonProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const Button = ({ text, btnType = 'primary', className = '' }: ButtonProps) => {
  const btnClasses = clx(
    'btn text-btn', // Base classes
    {
      'btn-primary': btnType === 'primary',
      'btn-secondary': btnType === 'secondary',
      'btn-accent': btnType === 'accent',
    },
    className // Additional classes
  );

  return (
    <button className={btnClasses}>
      {text}
    </button>
  );
};

export const BurgerNavbarButton = ({ isMenuOpen, toggleMenu }: BurgerNavbarButtonProps) => {
  const baseClasses = 'block w-[18px] h-[3px] bg-secondary-dark group-hover:bg-primary-red transition-all duration-300';

  return (
    <button onClick={toggleMenu} className="relative z-50 md:hidden flex items-center focus:outline-none group" aria-label="Toggle Menu">
      <div className="space-y-[3px]">
        <span className={clx(baseClasses, {"transform rotate-45 translate-y-1.5 bg-white": isMenuOpen})}></span>
        <span className={clx(baseClasses, {"opacity-0" : isMenuOpen,})}></span>
        <span className={clx(baseClasses, {"transform -rotate-45 -translate-y-1.5 bg-white": isMenuOpen})}></span>
      </div>
    </button>
  );
};