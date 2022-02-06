import React from "react";

const Search: React.FC<{ searchHandler: (e: string) => string }> = ({ searchHandler }) => {
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
