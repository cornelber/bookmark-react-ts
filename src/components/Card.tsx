import React from "react";
import { Button } from "./Button";
import bgDots from '../assets/bg-dots.svg';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
}

const Card = ({ imageSrc, title, description, buttonText }: CardProps) => {
  return (
    <div className="card flex flex-col items-center text-center pb-6 pt-12 rounded-lg shadow-lg bg-white">
      <img src={imageSrc} alt={title} className="w-[100px] h-[100px] mb-8" />
      <h3 className="text-2xl font-medium mb-2">{title}</h3>
      <p className="text-secondary-dark/50 mb-8">{description}</p>
      <img className="mb-6" src={bgDots} alt="Background Dots" />
      <Button text={buttonText} className=" px-6" />
    </div>
  );
};

export default Card;
