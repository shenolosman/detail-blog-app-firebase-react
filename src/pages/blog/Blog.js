import React, { useEffect, useState } from "react";
import "./Blog.css";
import { useParams } from "react-router-dom";
// import useFetch from "../../hooks/useFetch"
import { useTheme } from "../../hooks/useTheme";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
const Blog = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { mode } = useTheme();
  const { id } = useParams();
  useEffect(() => {
    setLoading(false);

    const ref = doc(db, "BlogsJsonDB", id);
    getDoc(ref).then((doc) => {
      if (doc.exists) {
        setLoading(false);
        setData(doc.data());
      } else {
        setLoading(false);
        setError("We couldnt reach the data");
      }
    });
  }, [id]);
  return (
    <div className={`blog ${mode}`}>
      {error && <p className="error">{error}</p>}
      {loading && <p className="loading">Loading...</p>}
      {data && (
        <>
          <h2 className="page-title">{data.title}</h2>
          <p className="time">Reading time : {data.readableTime}</p>
          <ul>
            {data.categories.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="info">{data.description}</p>
        </>
      )}
    </div>
  );
};

export default Blog;
