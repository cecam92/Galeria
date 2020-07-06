import React, { Fragment } from "react";
import { Search } from "react-bootstrap-icons";

const SearchBar = () => {
  return (
    <Fragment>
      <span class="input-group-text search-icon">
        <Search />
      </span>
      <input
        class="form-control"
        type="text"
        placeholder="Search for products"
        style={{ paddingLeft: "30px" }}
      ></input>
    </Fragment>
  );
};

export default SearchBar;
