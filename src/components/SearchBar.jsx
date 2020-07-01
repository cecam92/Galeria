import React, { Fragment } from "react";
import "./styles/SearchBar.css";
const SearchBar = () => {
  return (
    <Fragment>
      <div className="input-group">
        <input className="form-control rounded-pill search-input" type="search" placeholder="Search..." aria-label="Search"/> 
  </div>
       
    </Fragment>
  );
};

export default SearchBar;
