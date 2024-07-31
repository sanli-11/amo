import facebook from "../assets/svg/social-facebook.svg";
import instagram from "../assets/svg/social-instagram.svg";
import snapchat from "../assets/svg/social-snapchat.svg";
import whatsapp from "../assets/svg/social-whatsapp.svg";

const footer = [
  {
    id: 0,
    header: "Shop",
    links: [
      { id: 0, title: "Classic", href: "/browse" },
      { id: 1, title: "Modern", href: "/browse" },
      { id: 2, title: "Smart", href: "/browse" },
      { id: 3, title: "Luxury", href: "/browse" },
      { id: 4, title: "Chronograph", href: "/browse" },
    ],
  },
  {
    id: 1,
    header: "About",
    links: [
      { id: 0, title: "About Us", href: "/about" },
      { id: 1, title: "Contact Us", href: "/about" },
      { id: 2, title: "Become a Distribution", href: "/about" },
    ],
  },
  {
    id: 2,
    header: "Help",
    links: [
      { id: 0, title: "FAQ", href: "/about" },
      { id: 1, title: "Shipping", href: "/about" },
      { id: 2, title: "Return Policy", href: "/about" },
    ],
  },
  {
    id: 3,
    header: "Follow Us",
    links: [
      {
        id: 0,
        src: facebook,
        alt: "Facebook",
        href: "facebook.com",
      },
      {
        id: 1,
        src: instagram,
        alt: "Instagram",
        href: "instagram.com",
      },
      {
        id: 2,
        src: snapchat,
        alt: "Snapchat",
        href: "snapchat.com",
      },
      {
        id: 3,
        src: whatsapp,
        alt: "WhatsApp",
        href: "whatsapp.com",
      },
    ],
  },
];

export default footer;
