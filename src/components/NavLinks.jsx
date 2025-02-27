import { navigationItems } from "../constants/header";

const NavLinks = () => {
  return (
    <nav>
      <ul className="flex justify-evenly items-center font-secondary">
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
