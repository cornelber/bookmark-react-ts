import Card from "./Card";
import { CardListProps } from "../types/interfaces";

const getMarginTopClass = (index: number) => {
  switch (index) {
    case 1:
      return "md:mt-10";
    case 2:
      return "md:mt-20";
    default:
      return "md:mt-0";
  }
};

const CardList = ({ cards }: CardListProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
      {cards.map((card, index) => (
        <Card
          key={index}
          imageSrc={card.imageSrc}
          title={card.title}
          description={card.description}
          buttonText={card.buttonText}
          marginTopClass={getMarginTopClass(index)}
        />
      ))}
    </div>
  );
};

export default CardList;