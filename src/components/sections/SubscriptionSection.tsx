import { FormEvent, useState } from "react";
import { Button } from "../Button";
import clx from "classnames";

const SubscriptionSection = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setIsEmailValid(false);
      setErrorMessage("Whoops, make sure it's an email");
    } else {
      setIsEmailValid(true);
      setErrorMessage("");
    }
  };

  const inputClassNames = clx(
    "w-full max-md:h-[56px] h-full pl-4 pr-12 rounded-lg outline-none relative z-10",
    "transition-colors duration-100",
    {
      "border-[2px] border-primary-red bg-white text-secondary-dark": !isEmailValid,
      "border-transparent bg-white text-secondary-dark": isEmailValid,
    }
  );

  return (
    <section className="bg-primary-blue py-16 text-center text-white">
      <div className="max-w-3xl mx-auto max-md:px-8">
        <Header />

        <SubscriptionForm
          email={email}
          setEmail={setEmail}
          isEmailValid={isEmailValid}
          handleSubmit={handleSubmit}
          inputClassNames={inputClassNames}
          errorMessage={errorMessage}
        />
      </div>
    </section>
  );
};

const Header = () => (
  <>
    <p className="uppercase tracking-wider text-sm mb-4">
      35,000+ already joined
    </p>
    <h2 className="text-3xl font-medium mb-6">
      Stay up-to-date with what we're doing
    </h2>
  </>
);

const SubscriptionForm = ({
  email,
  setEmail,
  isEmailValid,
  handleSubmit,
  inputClassNames,
  errorMessage,
}: {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  isEmailValid: boolean;
  handleSubmit: (e: FormEvent) => void;
  inputClassNames: string;
  errorMessage: string;
}) => (
  <form
    onSubmit={handleSubmit}
    className="flex flex-col md:flex-row justify-center items-stretch md:items-center gap-4 mx-auto"
  >
    <div className="relative self-stretch w-full md:max-w-[300px]">
      <div className="relative h-full">
        <input
          type="text"
          className={inputClassNames}
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!isEmailValid && (
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary-red flex z-10">
            <i className="icon-icon-error text-icon relative">
              <i className="path1 text-icon"></i>
              <i className="path2 text-icon text-white absolute top-0"></i>
              <i className="path3 text-icon text-white absolute top-0"></i>
            </i>
          </span>
        )}
      </div>
      {!isEmailValid && (
        <span className="bg-primary-red relative left-0 top-[-50%] max-md:top-[-10px] w-full h-full max-md:h-[30px] flex items-end px-3 pb-1 z-0 rounded-lg">
          <p className="text-white text-[10px] italic">{errorMessage}</p>
        </span>
      )}
    </div>

    <Button text="Contact Us" btnType="accent" className="max-md:w-full" />
  </form>
);

export default SubscriptionSection;
