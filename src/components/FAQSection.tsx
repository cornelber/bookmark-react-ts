import React, { useState } from "react";
import { Button } from "./Button";


interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem = ({ question, answer } : FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-secondary-dark/75 text-base">{question}</h3>
        <span>
        <i className={`icon-icon-arrow inline-block transform transition-transform text-primary-blue duration-300 ${isOpen ? "rotate-180 text-primary-red" : ""}`}></i>
        </span>
      </div>
      {isOpen && (
        <p className="mt-4 text-left text-secondary-dark/50">{answer}</p>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    { question: "What is Bookmark?", answer: "Bookmark is a tool that helps you save and organize your favorite websites." },
    { question: "How can I request a new browser?", answer: "You can request a new browser by contacting us through our support page." },
    { question: "Is there a mobile app?", answer: "Yes, our mobile app is available for both iOS and Android." },
    { question: "What about other Chromium browsers?", answer: "We support various Chromium-based browsers including Brave and Vivaldi." },
  ];

  return (
    <section className="text-center mt-28 mb-48">
      <div className="mb-16">
        <h2 className="text-3xl font-medium">Frequently Asked Questions</h2>
        <p className="text-[15px] sm:text-xl text-secondary-dark/50 max-w-lg mx-auto">
          Here are some of our FAQs. If you have any other questions you'd like answered, please feel free to email us.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      <div className="mt-8">
        <Button text="More Info" className="btn-primary" />
      </div>
    </section>
  );
};

export default FAQSection;
