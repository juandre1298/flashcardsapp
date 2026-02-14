import IconBtn from "../../components/IconBtn";
import { FaGear } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { ImLibrary } from "react-icons/im";
import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { id: 'home', label: 'Home', Icon: FaHome, link: '/' },
  { id: 'library', label: 'Library', Icon: ImLibrary, link: '/library' },
  { id: 'settings', label: 'Settings', Icon: FaGear, link: '/settings' },
] as const;

const STYLES = {
  button: "flex flex-col text-xs gap-1 justify-center items-center",
  icon: "text-3xl"
};

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0  border-t py-4 px-8 w-full bg-[#242424]">
      <div className="flex justify-between gap-4 max-w-xl mx-auto">
        {NAV_ITEMS.map(({ id, label, Icon, link }) => (
          <NavLink 
            key={id}
            to={link}
            className={STYLES.button}
          >
            <Icon className={STYLES.icon} />
            {label}
          </NavLink>
        ))}
      </div>

    </nav>
  );
};

export default Navbar;