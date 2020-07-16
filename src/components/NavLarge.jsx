import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jsx";
import SearchBar from "./SearchBar.jsx";
import { Cart3, Person } from "react-bootstrap-icons";
import Modal from "./Modal.jsx";
//
function NavLarge() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <Fragment>
      <div className="row">
        <div className="header-logo col-2">
          <Link to="/">
            <Logo className="header__image-logo" />
          </Link>
        </div>
        <div className="col-7">
          <SearchBar />
        </div>
        <div className="header__menu-user col-3">
          <i style={{ cursor: "pointer" }}>
            <Person
              className="header__image-user"
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
    </Fragment>
  );
}
export default NavLarge;
