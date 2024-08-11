import React from "react";
import { NavbarContainer, NavSideBar } from "./styles";
import NavItem from "./NavItem";
import {
  AccountCircle,
  Camera,
  GitHub,
  LinkedIn,
  Mail,
  PhotoLibrary,
  School,
  Work,
} from "@mui/icons-material";

const navItems = [
  {
    icon: <></>,
    text: "Saiteja Varma",
    letter: "H",
    href: "/",
  },
  {
    icon: <AccountCircle color="inherit" />,
    text: "About",
    letter: "A",
    href: "/about",
  },
  {
    icon: <School color="inherit" />,
    text: "Education & Experince",
    letter: "B",
    href: "/background",
  },
  {
    icon: <Work color="inherit" />,
    text: "Projects",
    letter: "P",
    href: "/projects",
  },
  {
    icon: <PhotoLibrary color="inherit" />,
    text: "Photos",
    letter: "O",
    href: "/photos",
  },
];

const contactNavItems = [
  {
    icon: <Mail color="inherit" />,
    text: "Email",
    letter: "E",
    href: "/",
    contact: true,
  },
  {
    icon: <GitHub color="inherit" />,
    text: "Github",
    letter: "G",
    href: "https://github.com/Saitejavarma30",
    contact: true,
  },
  {
    icon: <School color="inherit" />,
    text: "Read.cv",
    letter: "R",
    href: "https://read.cv/saitejavarma",
    contact: true,
  },
  {
    icon: <LinkedIn color="inherit" />,
    text: "LinkedIn",
    letter: "L",
    href: "https://www.linkedin.com/in/j-saiteja-varma/",
    contact: true,
  },
  {
    icon: <Camera color="inherit" />,
    text: "Unsplash",
    letter: "U",
    href: "https://unsplash.com/@saiteja_varma",
    contact: true,
  },
];

const Navbar = ({ className }: { className?: string }) => {
  return (
    <NavbarContainer className={className}>
      <NavSideBar className={`border-solid border-2 m-6 mt-8 p-4 rounded-3xl`}>
        <ul className="list-none">
          {navItems.map((item, index) => (
            <NavItem {...navItems[index]} key={index} />
          ))}
        </ul>
      </NavSideBar>
      <NavSideBar
        className={` border-solid border-2 m-6 mt-8 p-4 rounded-3xl `}
      >
        <ul className="list-none">
          {contactNavItems.map((item, index) => (
            <NavItem {...item} key={index} />
          ))}
        </ul>
      </NavSideBar>
    </NavbarContainer>
  );
};

export default Navbar;
