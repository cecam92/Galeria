import React, { Fragment } from "react";
import "./styles/SearchBar.css";
import { Search } from "react-bootstrap-icons";
const SearchBar = () => {
  return (
    <Fragment>
      <span class="input-group-text search-icon">
        <Search />
      </span>
      <input
        class="form-control pl-5"
        type="text"
        placeholder="Search for products"
      ></input>
    </Fragment>
  );
};

export default SearchBar;
