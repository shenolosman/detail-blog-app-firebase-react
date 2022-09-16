import React from "react";
import "./BlogList.css";
import { Link } from "react-router-dom";
const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((item) => (
        <div key={item.id} className="card">
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
