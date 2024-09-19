import tabIllustration1 from "../assets/illustration-features-tab-1.svg";
import tabIllustration2 from "../assets/illustration-features-tab-2.svg";
import tabIllustration3 from "../assets/illustration-features-tab-3.svg";

// Tabs labels
export const tabs = ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"];

// Sections data for each tab
export const tabsSections = [
  {
    title: "Bookmark in one click",
    description: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    buttons: [{ text: "More Info", className: "btn-primary" }],
    imageSrc: tabIllustration1,
    imageAlt: "Bookmark Illustration 1",
  },
  {
    title: "Intelligent search",
    description: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    buttons: [{ text: "More Info", className: "btn-primary" }],
    imageSrc: tabIllustration2,
    imageAlt: "Search Illustration",
  },
  {
    title: "Share your bookmarks",
    description: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    buttons: [{ text: "More Info", className: "btn-primary" }],
    imageSrc: tabIllustration3,
    imageAlt: "Sharing Illustration",
  },
];
