import React from "react";
import Layout from "../layouts/Layout";
import DownloadSection from "../components/sections/DownloadSection";
import FaqSection from "../components/sections/FaqSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import HeroSection from "../components/sections/HeroSection";

import { heroData, featuresData, downloadData, faqsData } from "../data/sectionsData";

const Home = () => {
  return (
    <Layout>
      <HeroSection heroData={heroData} />
      <FeaturesSection featuresData={featuresData} />
      <DownloadSection downloadData={downloadData}/>
      <FaqSection faqsData={faqsData} />
    </Layout>
  );
};

export default Home;
