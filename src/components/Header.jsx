import Logo from "../assets/svg/Logo.jsx";
import NavLinks from "./NavLinks.jsx";
import NavButton from "./NavButton.jsx";

const Header = () => {
  return (
    <div className="bg-black/50 px-8 py-3 flex items-center justify-between">
      <Logo />
      <NavLinks />
      <NavButton />
    </div>
  );
};

export default Header;
