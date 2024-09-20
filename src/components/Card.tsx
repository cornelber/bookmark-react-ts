import { Button } from "./Button";
import bgDots from '../assets/bg-dots.svg';
import { CardProps } from "../types/interfaces";

const Card = ({ imageSrc, title, description, buttonText, marginTopClass = '' }: CardProps) => {
  return (
    <div className={`flex w-fit flex-col items-center text-center pb-6 pt-12 rounded-lg shadow-lg bg-white ${marginTopClass}`}>
      <img src={imageSrc} alt={title} className="w-[100px] h-[100px] mb-8" />
      <h3 className="text-2xl font-medium mb-2">{title}</h3>
      <p className="text-secondary-dark/50 mb-8">{description}</p>
      <img className="mb-6" src={bgDots} alt="Background Dots" />
      <Button text={buttonText} />
    </div>
  );
};

export default Card;
