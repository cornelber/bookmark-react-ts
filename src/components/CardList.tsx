import React from "react";
import Card from "./Card";
import chromeLogo from "../assets/logo-chrome.svg";
import firefoxLogo from "../assets/logo-firefox.svg";
import operaLogo from "../assets/logo-opera.svg";

const cardData = [
  {
    imageSrc: chromeLogo,
    title: "Add to Chrome",
    description: "Minimum version 62",
    buttonText: "Add & Install Extension",
  },
  {
    imageSrc: firefoxLogo,
    title: "Add to Firefox",
    description: "Minimum version 55",
    buttonText: "Add & Install Extension",
  },
  {
    imageSrc: operaLogo,
    title: "Add to Opera",
    description: "Minimum version 46",
    buttonText: "Add & Install Extension",
  },
];

const CardList = () => {
    
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
      {cardData.map((card, index) => {
        const marginTopClass = index === 1 ? "md:mt-10" : index === 2 ? "md:mt-20" : "md:mt-0";

        return (
          <div key={index} className={`w-full md:w-auto ${marginTopClass}`}>
            <Card
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
