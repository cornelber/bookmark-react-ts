import React from 'react';
import { ButtonProps } from '../types/interfaces';
import clx from 'classnames';

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

