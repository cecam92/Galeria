import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Kami } from "../assets/kami.png";
import { userIcon } from "../assets/user-icon.png";

import "./styles/Header.css";

function Header() {
  return (
    <Fragment>
      <header className="header">
        <Link to="/">
          <img className="header__image-logo" src={Kami} alt="logo" />
        </Link>
        <div>
          <input
            className="header-searchBar"
            type="text"
            placeholder="Search..."
          />
        </div>
        <div className="header__menu-user">
          <img
            className="header___image-cart"
            src="../assets/images/kami.png"
            alt="cart"
          />
          <img className="header__image-user" src={userIcon} alt="userIcon" />
        </div>
      </header>
    </Fragment>
  );
}

export default Header;
