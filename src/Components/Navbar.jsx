import "./Navbar.css";
import React, { useState } from "react";
import "./AboutContainer.css";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  function navOpen() {
    if (!openNav) {
      setOpenNav(true);
    }
  }

  return (
    <div
      className="relative animate-upper-slide font-Jost z-50 w-full text-white flex justify-center pt-10
    max-md:justify-center"
    >
      <NavbarLink />
    </div>
  );
};

export default Navbar;
