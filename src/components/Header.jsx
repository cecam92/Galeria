import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jsx";
import LogoG from "../assets/logoG.jsx";
import SearchBar from "./SearchBar.jsx";
import Modal from "./Modal.jsx";
import { Cart3, Person, Search, List } from "react-bootstrap-icons";
import "./styles/Header.css";

const Header = () => {
  const [showBar, setShowBar] = useState(false);

  const [showLogin, setShowLogin] = useState(false);

  return (
    <Fragment>
      <header className="header container-fluid">
        <div className="row">
          {window.innerWidth > 650 ? (
            <>
              <div className="header-logo col-2">
                <Link to="/">
                  <Logo className="header__image-logo" />
                </Link>
              </div>
              <div className="col-7">
                <SearchBar />
              </div>
              <div className="header__menu-user col-3">
                <i>
                  <Person
                    className="header__image-user"
                    onClick={() => setShowLogin(true)}
                  />
                  <Modal
                    show={showLogin}
                    onHide={() => setShowLogin(false)}
                  />
                </i>
                <i className="header__icon-cart">
                  <Cart3 className="header__image-cart" />
                </i>
              </div>
            </>
          ) : (
            <>
              <Link to="/">
                <LogoG className="header__image-logo" />
              </Link>
              <div className="header__menu-user col-5">
                <List className="header__image-list" />
                <i>
                  <Search
                    className="header__image-search"
                    onClick={() => setShowBar(!showBar)}
                  />
                </i>
                <i>
                  <Person
                    className="header__image-user"
                    onClick={() => setShowLogin(true)}
                  />
                   <Modal
                    show={showLogin}
                    onHide={() => setShowLogin(false)}
                  />
                </i>
                <i className="header__icon-cart">
                  <Cart3 className="header__image-cart" />
                </i>
              </div>
            </>
          )}
        </div>
        {showBar && (
          <div className="row">
            <div className="col">
              <SearchBar className="header__search-bar" />
            </div>
          </div>
        )}
      </header>
    </Fragment>
  );
};
export default Header;
