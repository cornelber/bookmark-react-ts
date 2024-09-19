import React from "react";
import { footerNavData } from "../data/navData";
import EmailSubscriptionSection from "../components/EmailSubscriptionSection";
import Navbar from "../components/nav/Navbar";

const Footer = () => {

  return (
    <footer className="bg-secondary-dark text-white">
      <EmailSubscriptionSection />
      <Navbar items={footerNavData} isFooter />
    </footer>
  );
};

export default Footer;