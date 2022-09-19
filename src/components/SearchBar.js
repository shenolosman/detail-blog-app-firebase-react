import React, { useState } from "react";
import "./SearchBar.css";
import { useHistory } from "react-router-dom";
const Search = () => {
  const [word, setWord] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?q=${word}`);
  };

  const handleSearch = (e) => {
    var newSearch = e.currentTarget.value;
    setWord(newSearch);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Searching word..."
          id="search"
          onChange={handleSearch}
        />
      </form>
    </div>
  );
};

export default Search;
