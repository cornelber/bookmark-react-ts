import React from "react";
import { Link } from "react-router-dom";
import clx from "classnames";

interface NavLinksProps {
  isMobile?: boolean;
}

const NavLinks = ({isMobile = false} : NavLinksProps) => {
  const listStyle = clx({
    'hidden md:flex space-x-12 items-center': !isMobile,
    'flex flex-col': isMobile
  })

  const listItemStyle = clx({
    'border-t-[1px] border-white/10 py-[24px] text-center': isMobile
  })

  const linkStyle = clx('link uppercase', {
    'text-xs': !isMobile,
    'text-2xl leading-1 tracking-widest text-white': isMobile
  })

  const btnStyle = clx('btn btn-accent uppercase', {
    'text-xs': !isMobile,
    'text-2xl leading-1 tracking-widest bg-transparent text-white border-white w-full hover:bg-transparent': isMobile
  })

  return (
    <ul className={listStyle}>
      <li className={listItemStyle}>
        <Link to="/" className={linkStyle}>
          Features
        </Link>
      </li>
      <li className={listItemStyle}>
        <Link to="/" className={linkStyle}>
          Pricing
        </Link>
      </li>
      <li className={listItemStyle}>
        <Link to="/" className={linkStyle}>
          Contact
        </Link>
      </li>
      <li className={listItemStyle}>
        <Link to="/" className={btnStyle}>
          Login
        </Link>
      </li>
    </ul>
  );

};

export const DesktopNav = () => {
  return <NavLinks />;
};


export const MobileNav = () => {
  const commonIconClasses = 'text-icon text-icon-white hover:text-icon-red transition-colors duration-300'

  return (
    <div className="fixed inset-0 bg-secondary-dark/95 z-20 pt-[100px] px-6 pb-6 flex flex-col justify-between">
      <NavLinks isMobile />
      <div className="flex space-x-10 w-full justify-center">
        <Link to="https://www.facebook.com/">
          <i className={`icon-icon-facebook ${commonIconClasses}`}></i>
        </Link>
        <Link to="https://x.com/">
          <i className={`icon-icon-twitter ${commonIconClasses}`}></i>
        </Link>
      </div>
    </div>
  );
};
