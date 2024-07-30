import { navigationItems } from "../constants/header";
import { ShoppingBasket } from "lucide-react";

const NavLinks = () => {
  return (
    <nav>
      <ul className="flex justify-evenly items-center">
        {navigationItems.map((link) => (
          <li key={link.id} className="px-5 text-lg">
            <a href={link.href}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
