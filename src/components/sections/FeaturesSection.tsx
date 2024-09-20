import React, { useCallback, useState } from "react";
import { FeaturesDataProps } from "../../types/interfaces";
import SectionContainer from "../SectionContainer";
import SectionHeader from "../SectionHeader";
import Tabs from "../Tabs";
import BlockWithImage from "../BlockWithImage";

interface FeaturesSectionProps {
    featuresData: FeaturesDataProps;
  }

const FeaturesSection = ({ featuresData } : FeaturesSectionProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = useCallback((index: number) => {
    setActiveTab(index);
  }, []);

  return (
    <SectionContainer>
      <SectionHeader
        title={featuresData.title}
        description={featuresData.description}
      />
      <Tabs tabs={featuresData.tabs} activeTab={activeTab} onTabClick={handleTabClick} />
      <BlockWithImage
        title={featuresData.tabsContent[activeTab].title}
        description={featuresData.tabsContent[activeTab].description}
        buttons={featuresData.tabsContent[activeTab].buttons}
        imageSrc={featuresData.tabsContent[activeTab].imageSrc}
        imageAlt={featuresData.tabsContent[activeTab].imageAlt}
        imageClassName="relative max-h-[400px] w-full object-contain"
        reverse={true}
      />
    </SectionContainer>
  );
};

export default FeaturesSection;
