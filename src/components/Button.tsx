import React from 'react';
import { ButtonProps } from '../types/interfaces';
import clx from 'classnames';

interface BurgerNavbarButtonProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
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

export const TabButton = ({ label, isActive, onClick }: TabButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`relative flex-1 text-base max-md:py-5 pb-8 border-b-[1px] md:border-b-4 ${
        isActive
          ? "md:border-primary-red text-secondary-dark/100"
          : "md:border-transparent text-secondary-dark/75"
      }`}
    >
      {label}
      <span
        className={`absolute left-0 right-0 bottom-0 h-[2px] max-w-[140px] mx-auto bg-primary-red transition-all ${
          isActive ? "block md:hidden" : "hidden"
        }`}
      />
    </button>
  );
};