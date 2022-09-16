import React from "react";
import "./Home.css";
import useFetch  from "../../hooks/useFetch";
const Home = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8000/BlogsJsonDB"
  );
  console.log(data)
  return (
    <div className="home">
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <h2 >{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
    </div>
  );
};

export default Home;
