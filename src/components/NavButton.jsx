import { navigationIcons } from "../constants/header";

const NavButton = () => {
  return (
    <nav>
      <ul className="flex items-center text-lg text-white">
        {navigationIcons.map((item) => (
          <li key={item.id} className="px-3">
            {item.href ? (
              <a href={item.href}>
                <img src={item.icon} alt={item.title} width={24} height={24} />
              </a>
            ) : (
              <button type="button" className="flex items-center">
                <span className="pr-2.5">{item.title}</span>
                <img src={item.icon} alt={item.title} width={24} height={24} />
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavButton;
