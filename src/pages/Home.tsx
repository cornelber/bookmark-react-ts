import React from "react";
import Layout from "../layouts/Layout";
import SectionWithImage from "../components/SectionWithImage";
import heroIllustration1 from "../assets/illustration-hero.svg";
import TabsSection from "../components/TabsSection";
import DownloadSection from "../components/DownloadSection";

const Home = () => {
  return (
    <Layout>
      {/* <HeroSection /> */}
      <SectionWithImage
        title="A Simple Bookmark Manager"
        titleClassName="text-[30px] leading-4 sm:text-4xl"
        description="A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free."
        buttons={[
          { text: "Get it on Chrome" },
          { text: "Get it on Firefox", btnType: "secondary" },
        ]}
        imageSrc={heroIllustration1}
        imageAlt="Hero Illustration 1"
      />
      <TabsSection />
      <DownloadSection />
    </Layout>
  );
};

export default Home;
