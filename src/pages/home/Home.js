import React from "react";
import "./Home.css";
import useFetch from "../../hooks/useFetch";
import BlogList from "../../components/BlogList";
const Home = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8000/BlogsJsonDB"
  );
  //console.log(data);
  return (
    <div className="home">
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {data && <BlogList blogs={data} />}
    </div>
  );
};

export default Home;
