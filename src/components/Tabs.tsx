import React from "react";
import { TabButton } from "../components/Button";

interface TabsProps {
  tabs: string[];
  activeTab: number;
  onTabClick: (index: number) => void;
}

const Tabs = ({ tabs, activeTab, onTabClick }: TabsProps) => {
  return (
    <div className="flex flex-col md:flex-row max-w-3xl mx-auto mb-16 max-md:border-t-[1px] md:border-b-[1px]">
      {tabs.map((label, index) => (
        <TabButton
          key={index}
          label={label}
          isActive={activeTab === index}
          onClick={() => onTabClick(index)}
        />
      ))}
    </div>
  );
};

export default Tabs;