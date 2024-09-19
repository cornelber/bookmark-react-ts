import React, { useState } from "react";
import { Button } from "./Button";
import clx from "classnames";

const EmailSubscriptionSection = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsEmailValid(false);
      setErrorMessage("Whoops, make sure it's an email");
    } else {
      setIsEmailValid(true);
      setErrorMessage("");
      // Handle the form submission (e.g., send the email to the server)
    }
  };

  return (
    <section className="bg-primary-blue py-16 text-center text-white">
      <div className="max-w-3xl mx-auto">
        <p className="uppercase tracking-wider text-sm mb-4">35,000+ already joined</p>
        <h2 className="text-3xl font-medium mb-6">Stay up-to-date with what we're doing</h2>
        
        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col sm:flex-row justify-center items-start sm:items-center gap-4 mx-auto"
        >
          <div className="relative w-full sm:w-auto">
            <input 
              type="text"
              className={clx(
                "w-full sm:w-[400px] h-12 px-4 rounded-lg outline-none",
                "transition-colors duration-300",
                {
                  "border border-primary-red bg-white text-secondary-dark": !isEmailValid,
                  "border-transparent bg-white text-secondary-dark": isEmailValid,
                }
              )}
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {!isEmailValid && (
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary-red">
                <i className="icon-icon-error"></i>
              </span>
            )}
            {!isEmailValid && (
              <p className="text-primary-red text-sm mt-1">{errorMessage}</p>
            )}
          </div>
          
          <Button 
            text="Contact Us" 
            btnType="accent"
          />
        </form>
      </div>
    </section>
  );
};

export default EmailSubscriptionSection;
