import React, { Fragment } from "react";
import { Search } from "react-bootstrap-icons";

const SearchBar = () => {
  return (
    <Fragment>
      <span className="input-group-text search-icon">
        <Search />
      </span>
      <input
        className="form-control"
        type="text"
        placeholder="Search for products"
        style={{ paddingLeft: "30px", position: "relative" }}
      ></input>
    </Fragment>
  );
};

export default SearchBar;
