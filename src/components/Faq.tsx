import { useCallback, useState } from "react";
import { FaqProps } from "../types/interfaces";


const Faq = ({question, answer}: FaqProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  return (
    <div className="border-b border-gray-200 py-4">
      <div
        className="flex justify-between items-center cursor-pointer group"
        onClick={() => toggleFaq()}
        aria-expanded={isOpen}>
        <h3 className="text-secondary-dark/75 text-base text-left group-hover:text-primary-red transition-all duration-300">{question}</h3>
        <span>
          <i className={`icon-icon-arrow inline-block transform transition-transform text-primary-blue duration-300 ${
              isOpen ? "rotate-180 text-primary-red" : ""
            }`}
          ></i>
        </span>
      </div>
      {isOpen && (
        <p className="mt-4 text-left text-secondary-dark/50">{answer}</p>
      )}
    </div>
  );
};

export default Faq;
