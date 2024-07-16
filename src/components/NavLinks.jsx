import { navigationItems } from "../constants/header";

const NavLinks = () => {
  return (
    <nav>
      <ul className="flex justify-evenly items-center">
        {navigationItems.map((link) => (
          <li key={link.id} className="px-7 text-lg text-white">
            {link.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
