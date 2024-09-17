import React from "react";

const NavItems = () => {
  return (
    <ul className="hidden md:flex space-x-12 items-center">
      <li>
        <a className="link uppercase text-xs" href="/">Features</a>
      </li>
      <li>
        <a className="link uppercase text-xs" href="/">Pricing</a>
      </li>
      <li>
        <a className="link uppercase text-xs" href="/">Contact</a>
      </li>
      <li>
        <a className="btn btn-accent uppercase text-xs" href="/">Login</a>
      </li>
    </ul>
  );
};

export default NavItems;
