import heroIllustration1 from "../assets/illustration-hero.svg";
import tabIllustration1 from "../assets/illustration-features-tab-1.svg";
import tabIllustration2 from "../assets/illustration-features-tab-2.svg";
import tabIllustration3 from "../assets/illustration-features-tab-3.svg";
import chromeLogo from "../assets/logo-chrome.svg";
import firefoxLogo from "../assets/logo-firefox.svg";
import operaLogo from "../assets/logo-opera.svg";
import {
  BlockWithImageProps,
  DownloadDataProps,
  FaqDataProps,
  FeaturesDataProps,
} from "../types/interfaces";

export const heroData: BlockWithImageProps = {
  title: "A Simple Bookmark Manager",
  titleClassName: "text-[30px] leading-4 sm:text-4xl",
  description:
    "A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.",
  buttons: [
    { text: "Get it on Chrome" },
    { text: "Get it on Firefox", btnType: "secondary" },
  ],
  imageSrc: heroIllustration1,
  imageAlt: "Hero Illustration 1",
};

export const featuresData: FeaturesDataProps = {
  title: "Features",
  description:
    "Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.",
  tabs: ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"],
  tabsContent: [
    {
      title: "Bookmark in one click",
      description:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      buttons: [{ text: "More Info" }],
      imageSrc: tabIllustration1,
      imageAlt: "Bookmark in one click",
    },
    {
      title: "Intelligent search",
      description:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      buttons: [{ text: "More Info" }],
      imageSrc: tabIllustration2,
      imageAlt: "Intelligent search",
    },
    {
      title: "Share your bookmarks",
      description:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      buttons: [{ text: "More Info" }],
      imageSrc: tabIllustration3,
      imageAlt: "Share your bookmarks",
    },
  ],
};

export const downloadData: DownloadDataProps = {
  title: "Download the extension",
  description:
    "We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.",
  cards: [
    {
      imageSrc: chromeLogo,
      title: "Add to Chrome",
      description: "Minimum version 62",
      buttonText: "Add & Install Extension",
    },
    {
      imageSrc: firefoxLogo,
      title: "Add to Firefox",
      description: "Minimum version 55",
      buttonText: "Add & Install Extension",
    },
    {
      imageSrc: operaLogo,
      title: "Add to Opera",
      description: "Minimum version 46",
      buttonText: "Add & Install Extension",
    },
  ],
};

export const faqsData: FaqDataProps = {
  title: "Frequently Asked Questions",
  description: "Here are some of our FAQs. If you have any other questions you'd like answered, please feel free to email us.",
  faqs: [
    {
      question: "What is Bookmark?",
      answer:
        "Bookmark is a tool that helps you save and organize your favorite websites.",
    },
    {
      question: "How can I request a new browser?",
      answer:
        "You can request a new browser by contacting us through our support page.",
    },
    {
      question: "Is there a mobile app?",
      answer: "Yes, our mobile app is available for both iOS and Android.",
    },
    {
      question: "What about other Chromium browsers?",
      answer:
        "We support various Chromium-based browsers including Brave and Vivaldi.",
    },
  ],
};
