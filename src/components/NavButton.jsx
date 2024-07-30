import { navigationIcons } from "../constants/header";

const NavButton = () => {
  return (
    <nav>
      <ul className="flex items-center text-lg">
        {navigationIcons.map((item) => {
          const icon = (
            <img src={item.icon} alt={item.title} width={24} height={24} />
          );

          return (
            <li key={item.id} className="px-3">
              {item.href ? (
                <a href={item.href}>{icon}</a>
              ) : (
                <button type="button" className="flex items-stretch">
                  <span className="pr-2.5 self-end text-sm">{item.title}</span>
                  {icon}
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavButton;
