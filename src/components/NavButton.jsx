import { navigationIcons } from "../constants/header";

const NavButton = () => {
  return (
    <nav>
      <ul className="flex text-lg text-white">
        {navigationIcons.map((item) => (
          <li
            key={item.id}
            className="px-3 hover:scale-115 transition-transform duration-150 ease-in"
          >
            <a href={item.href}>
              <img src={`../assets/svg/${item.alt.toLowerCase()}.svg`} alt={item.alt} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavButton;
