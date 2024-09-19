import React from "react";
import clx from "classnames";
import { ButtonProps } from "../types/interfaces";
import { Button } from "./Button";

export interface SectionWithImageProps {
    title: string;
    titleClassName?: string;
    description: string;
    buttons: ButtonProps[];
    imageSrc: string;
    imageAlt: string;
    reverse?: boolean;
}

const SectionWithImage = ({
  title,
  titleClassName,
  description,
  buttons,
  imageSrc,
  imageAlt,
  reverse = false,
}: SectionWithImageProps) => {
  const sectionClasses = clx(
    "flex flex-col-reverse gap-16 min-h-[386px] mt-28 mb-48",
    { "md:flex-row-reverse": reverse, "md:flex-row": !reverse }
  );

  const titleClasses = clx(
    "text-secondary-dark pb-6 font-medium",
    titleClassName || "text-[24px] sm:text-3xl"
  );

  const decorativeSpanClasses = clx(
    "absolute top-1/4 md:top-[130px] w-screen h-4/5 md:h-2/4 xl:h-[352px] lg:h-[250px] bg-primary-blue rounded-full z-[-1]",
    { "right-1/4 md:right-[150px]": reverse, "left-1/4 md:left-[150px]": !reverse, }
  );

  const imageClasses = clx(
    "self-center lg:absolute lg:top-[-8%] xl:top-[-10%] 2xl:top-[-20%] lg:w-[120%] lg:max-w-none",
    { "right-[-7%]": reverse, "left-[-7%]": !reverse }
  );

  return (
    <section className={sectionClasses}>
      <div className="basis-1/2 text-center md:text-left">
        <h1 className={titleClasses}>{title}</h1>
        <p className="text-[15px] sm:text-xl text-secondary-dark/50 pb-8">
          {description}
        </p>
        <div className="flex space-x-4 justify-center md:justify-start">
          {buttons.map((button, index) => (
            <Button
              key={index}
              text={button.text}
              btnType={button.btnType}
              className={`max-sm:px-4 ${button.className}`}
            />
          ))}
        </div>
      </div>
      <div className="relative basis-1/2 flex">
        <span className={decorativeSpanClasses} />
        <img className={imageClasses} src={imageSrc} alt={imageAlt} />
      </div>
    </section>
  );
};

export default SectionWithImage;