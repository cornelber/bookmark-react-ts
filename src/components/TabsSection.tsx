import React, { useCallback, useState } from "react";
import SectionWithImage from "./SectionWithImage";
import { tabs, tabsSections } from "../data/featuresData";

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Use callback to avoid unnecessary re-renders
  const handleTabClick = useCallback((index: number) => {
    setActiveTab(index);
  }, []);

  return (
    <section className="my-48">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-medium pb-4">Features</h2>
        <p className="text-[15px] sm:text-xl text-secondary-dark/50 max-w-xl mx-auto">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      <div className="flex flex-col md:flex-row max-w-3xl mx-auto mb-16 max-md:border-t-[1px] md:border-b-[1px]">
        {tabs.map((label, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`relative flex-1 text-base max-md:py-5 pb-8 border-b-[1px] md:border-b-4 ${
              activeTab === index
                ? "md:border-primary-red text-secondary-dark/100"
                : "md:border-transparent text-secondary-dark/75"
            }`}
          >
            {label}
            <span
              className={`absolute left-0 right-0 bottom-0 h-[2px] max-w-[140px] mx-auto bg-primary-red transition-all ${
                activeTab === index ? "block md:hidden" : "hidden"
              }`}
            />
          </button>
        ))}
      </div>

      <SectionWithImage
        title={tabsSections[activeTab].title}
        description={tabsSections[activeTab].description}
        buttons={tabsSections[activeTab].buttons}
        imageSrc={tabsSections[activeTab].imageSrc}
        imageAlt={tabsSections[activeTab].imageAlt}
        imageClassName="relative max-h-[400px] w-full object-contain"
        reverse={true}
      />
    </section>
  );
};

export default TabsSection;
