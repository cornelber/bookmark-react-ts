import React from "react";
import { footerNavData } from "../data/navData";
import SubscriptionSection from "../components/sections/SubscriptionSection";
import Navbar from "../components/nav/Navbar";

const Footer = () => {

  return (
    <footer className="bg-secondary-dark text-white">
      <SubscriptionSection />
      <Navbar items={footerNavData} isFooter />
    </footer>
  );
};

export default Footer;