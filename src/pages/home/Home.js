import React from "react";
import "./Home.css";
import BlogList from "../../components/BlogList";
import { useCollection } from "../../hooks/useCollection";
const Home = () => {
  const { documents: data, error, loading } = useCollection("BlogsJsonDB");

  return (
    <div className="home">
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {data && <BlogList blogs={data} />}
    </div>
  );
};

export default Home;
