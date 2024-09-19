import React from "react";
import { Link } from "react-router-dom";
import { BookmarkLogo } from "../components/icons/BookmarkLogo";
import EmailSubscriptionSection from "../components/EmailSubscriptionSection";

const Footer = () => {
    const commonIconClasses = 'text-icon text-icon-white hover:text-icon-red transition-colors duration-300'

  return (
    <footer className="bg-secondary-dark text-white">
        <EmailSubscriptionSection />
      <div className="container mx-auto py-6 flex justify-between items-center flex-col md:flex-row">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <Link to="/" className="flex items-center space-x-2 mb-6 md:mb-0">
            <BookmarkLogo isMenuOpen={true} />
          </Link>
          <nav className="flex space-x-8 text-xs uppercase">
            <Link to="/" className="hover:text-primary-red">Features</Link>
            <Link to="/" className="hover:text-primary-red">Pricing</Link>
            <Link to="/" className="hover:text-primary-red">Contact</Link>
          </nav>
        </div>

        <div className="flex space-x-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i className={`icon-icon-facebook ${commonIconClasses}`}></i>
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className={`icon-icon-twitter ${commonIconClasses}`}></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
