import React from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import BlogList from "../../components/BlogList";
import "./Search.css";
const Search = () => {
  const queryString = useLocation().search;
  //console.log(queryString)
  const queryParams = new URLSearchParams(queryString);
  //console.log(queryParams)
  const query = queryParams.get("q");
  //console.log(query)
  // if(query===""){

  // }
  const url = "http://localhost:8000/BlogsJsonDB?q=" + query;
  const { data, loading, error } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">Searched word : "{query}"</h2>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {data && <BlogList blogs={data} />}
    </div>
  );
};

export default Search;
