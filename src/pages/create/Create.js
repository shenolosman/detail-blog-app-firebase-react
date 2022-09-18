import React, { useState, useRef } from "react";
import "./Create.css";
const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [readableTime, setReadableTime] = useState("");

  const [newCategory, setNewCategory] = useState("");
  const [categories, SetCategories] = useState([]);
  const categoryInput = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description, readableTime, categories);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    const newCat = newCategory.trim();
    if (newCat && !categories.includes(newCat)) {
      SetCategories((cat) => [...cat, newCategory]);
    }
    setNewCategory("");
    categoryInput.current.focus();
  };
  return (
    <div className="create">
      <h2 className="page-title">Create new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title: </span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Categories: </span>
          <div className="categories">
            <input
              type="text"
              required
              onChange={(e) => setNewCategory(e.target.value)}
              value={newCategory}
              ref={categoryInput}
            />
            <button onClick={handleAdd} className="btnAdd btn">
              Add
            </button>
          </div>
        </label>
        <p>
          <span className="list">
            {categories.map((x) => (
              <em key={x}>{x} ,</em>
            ))}
          </span>
        </p>

        <label>
          <span>Description: </span>
          <textarea
            rows={5}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          ></textarea>
        </label>

        <label>
          <span>Read Time: </span>
          <input
            type="number"
            onChange={(e) => setReadableTime(e.target.value)}
            value={readableTime}
            required
          />
        </label>

        <button className="btn">Create</button>
      </form>
    </div>
  );
};

export default Create;
