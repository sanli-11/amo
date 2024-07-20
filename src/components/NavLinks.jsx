import { navigationItems } from "../constants/header";

const NavLinks = () => {
  return (
    <nav>
      <ul className="flex justify-evenly items-center">
        {navigationItems.map((link) => (
          <li
            key={link.id}
            className="px-7 text-lg text-white"
          >
            <a href={link.href}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
