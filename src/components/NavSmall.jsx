import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import LogoG from "../assets/logoG.jsx";
import Modal from "./Modal.jsx";
import SearchBar from "./SearchBar.jsx";
import { Cart3, Person, Search } from "react-bootstrap-icons";

import "./styles/Header.css";
function NavSmall() {
  const [showBar, setShowBar] = useState(false);

  const [showLogin, setShowLogin] = useState(false);
  return (
    <Fragment>
      <div className="row">
        <Link to="/">
          <LogoG className="header__image-logo" />
        </Link>
        <div className="header__menu-user col-5">
          <i>
            <Search
              className="header__image-search pointer"
              onClick={() => setShowBar(!showBar)}
            />
          </i>

          <i>
            <Person
              className="header__image-user "
              onClick={() => setShowLogin(true)}
            />

            <Modal show={showLogin} onHide={() => setShowLogin(false)} />
          </i>

          <Link to="../checkout">
            <i className="header__icon-cart">
              <Cart3 className="header__image-cart" />
            </i>
          </Link>
        </div>
      </div>
      {showBar && (
        <div className="row">
          <div className="col">
            <SearchBar className="header__search-bar" />
          </div>
        </div>
      )}
    </Fragment>
  );
}
export default NavSmall;
