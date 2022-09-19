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
  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Searching word..."
          id="search"
          onChange={(e) => setWord(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
