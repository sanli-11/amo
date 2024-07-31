import Logo from "../assets/svg/Logo.jsx";
import NavLinks from "./NavLinks.jsx";
import NavButton from "./NavButton.jsx";

const Header = () => {
  return (
    <header className="px-8 py-3 flex items-center justify-between bg-white">
      <Logo />
      <NavLinks />
      <NavButton />
    </header>
  );
};

export default Header;
