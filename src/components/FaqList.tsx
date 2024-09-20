import Faq from "./Faq";
import { FaqListProps } from "../types/interfaces";

const FaqList = ({ faqs, className }: FaqListProps) => {
  return (
    <div className={`max-w-3xl mx-auto ${className}`}>
      {faqs.map((faq, index) => (
        <Faq key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FaqList;
