import React from "react";
import "./BlogList.css";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import DeleteIcon from "../assets/delete-icon.svg";
import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";
const BlogList = ({ blogs }) => {
  const { mode } = useTheme();
  if (blogs.length === 0) {
    return <div className="error">Search word not found</div>;
  }
  const handleDelete = async (id) => {
    console.log(id);
    const ref = doc(db, "BlogsJsonDB", id);

    await deleteDoc(ref);
  };

  return (
    <div className="blog-list">
      {blogs.map((item) => (
        <div key={item.id} className={`card ${mode}`}>
          <h3>{item.title}</h3>
          <p>{item.readableTime}</p>
          <div>{item.description.substring(0, 100)}...</div>
          <Link to={`/blog/${item.id}`}>More</Link>
          <img
            src={DeleteIcon}
            alt="Delete Blog"
            className="delete"
            onClick={() => handleDelete(item.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
