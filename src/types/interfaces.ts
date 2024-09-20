export interface ButtonProps {
  text: string;
  btnType?: "primary" | "secondary" | "accent";
  className?: string;
}

export interface NavbarItemProps {
  to: string;
  label: string;
  isMobile?: boolean;
  isButton?: boolean;
  isOnDark?: boolean;
}

export interface BlockWithImageProps {
  title: string;
  titleClassName?: string;
  description: string;
  buttons: ButtonProps[];
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
  reverse?: boolean;
}

export interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
  marginTopClass?: string;
}

export interface CardListProps {
  cards: CardProps[];
}

export interface FeaturesDataProps {
  title: string;
  description: string;
  tabs: string[];
  tabsContent: BlockWithImageProps[];
}

export interface DownloadDataProps {
  title: string;
  description: string;
  cards: CardProps[];
}

export interface FaqProps {
    question: string;
    answer: string;
}

export interface FaqListProps {
    faqs: FaqProps[];
    className?: string;
  }
  
  export interface FaqDataProps {
    title: string;
    description: string;
    faqs: FaqProps[];
  }