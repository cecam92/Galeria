import React from "react";

import NavLarge from "./NavLarge";
import NavSmall from "./NavSmall";

import "./styles/Header.css";

const Header = () => {
  return (
    <header>
      <div className="d-md-none">
        <NavSmall />
      </div>
      <div className="d-none d-md-block">
        <NavLarge />
      </div>
    </header>
  );
};
export default Header;
