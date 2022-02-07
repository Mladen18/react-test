import React, { useEffect } from "react";
import logCompName from "../../helper/logCompName";

const Search: React.FC<{ searchHandler: (e: string) => string; message: string }> = ({ searchHandler, message }) => {
  const componentName: string = "Search";
  useEffect(() => {
    logCompName(message, componentName);
  }, [message]);

  const searchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchHandler(e.target.value);
  };

  return (
    <div className="c-search">
      <label htmlFor="search">Search:</label>
      <input onChange={searchChangeHandler} id="search" name="search" className="c-search__input" type="text" placeholder="Search..." />
    </div>
  );
};

export default Search;
