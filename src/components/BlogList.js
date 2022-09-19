import React from "react";
import "./BlogList.css";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
const BlogList = ({ blogs }) => {
  const { mode } = useTheme();
  if (blogs.length === 0) {
    return <div className="error">Search word not found</div>;
  }
  return (
    <div className="blog-list">
      {blogs.map((item) => (
        <div key={item.id} className={`card ${mode}`}>
          <h3>{item.title}</h3>
          <p>{item.readableTime}</p>
          <div>{item.description.substring(0, 100)}...</div>
          <Link to={`/blog/${item.id}`}>More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
