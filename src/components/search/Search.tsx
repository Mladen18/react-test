import React, { useEffect } from "react";
import logCompName from "../../helper/logCompName";

const Search: React.FC<{ searchHandler: (e: string) => string; message: string }> = ({ searchHandler, message }) => {
  // Log message
  const componentName: string = "Search";
  useEffect(() => {
    logCompName(message, componentName);
  }, [message]);

  // Serach change handler
  const searchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchHandler(e.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input onChange={searchChangeHandler} id="search" name="search" type="text" placeholder="Search..." />
    </div>
  );
};

export default Search;
