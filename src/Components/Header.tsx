import {
  IconHexagonNumber6,
  IconHexagonLetterU,
  IconHexagonLetterN,
  IconHome,
  IconInfoCircle,
  IconBook,
  IconBriefcase,
  IconMessageCircle,
  IconTools,
  IconLayoutDashboard,
} from "@tabler/icons-react";
import SideBar from "./SideBar";
import { useMediaQuery } from "@mantine/hooks";
import { em } from "@mantine/core";
import { useEffect, useState } from "react";

type NavLink = {
  name: string;
  icon: JSX.Element;
};

const links: NavLink[] = [
  { name: "Home", icon: <IconHome size={20} /> },
  { name: "About", icon: <IconInfoCircle size={20} /> },
  { name: "Education", icon: <IconBook size={20} /> },
  { name: "Experience", icon: <IconBriefcase size={20} /> },
  { name: "Skills", icon: <IconTools size={20} /> },
  { name: "Projects", icon: <IconLayoutDashboard size={20} /> },
  { name: "Contact", icon: <IconMessageCircle size={20} /> },
];

const navLinks = (col: boolean, clicked: (() => void) | null) => {
  const handleClick = () => {
    if (clicked) clicked();
  };

  return links.map((link, index) => (
    <a
      key={index}
      onClick={handleClick}
      className={`${
        col ? "flex flex-col items-center" : "flex items-center"
      } text-textColor text-lg font-mono hover:text-primaryColor`}
      href={`#${link.name}`} // Link to section ID
    >
      <span className="mr-2">{link.icon}</span>
      {link.name}
    </a>
  ));
};

const Header = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(476)})`);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shadow, setShadow] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 70) {
      setShow(false);
    } else {
      setShow(true);
    }

    if (window.scrollY > 70) {
      setShadow(true);
    } else {
      setShadow(false);
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`flex ${show ? "translate-y-0" : "-translate-y-28"} ${
        shadow ? "shadow-[0px_10px_30px_-10px_#020c1b]" : ""
      } transition-transform duration-500 ease-in-out fixed w-full z-10 bg-bgColor h-28 px-10 justify-between items-center xs-mx:px-4 xs-mx:h-20`}
    >
      {/* Custom Logo: 6UN */}
      <div className="flex gap-1 items-center z-10">
        <IconHexagonNumber6
          size={isMobile ? 30 : 45}
          color="#64FFDA"
          stroke={1.25}
        />
        <IconHexagonLetterU
          size={isMobile ? 30 : 45}
          color="#64FFDA"
          stroke={1.25}
        />
        <IconHexagonLetterN
          size={isMobile ? 30 : 45}
          color="#64FFDA"
          stroke={1.25}
        />
      </div>

      {/* Nav Links for larger screens */}
      <div className="bs:flex gap-8 hidden">{navLinks(false, null)}</div>

      {/* Sidebar for mobile */}
      <SideBar />
    </nav>
  );
};

export default Header;
export { navLinks };
