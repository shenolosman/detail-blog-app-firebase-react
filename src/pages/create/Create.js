import React, { useState, useRef} from "react";
import { useHistory } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";
import "./Create.css";
import {useTheme} from "../../hooks/useTheme"

import {db} from "../../firebase/config"
import {collection,addDoc} from "firebase/firestore"
const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [readableTime, setReadableTime] = useState("");

  const [newCategory, setNewCategory] = useState("");
  const [categories, SetCategories] = useState([]);
  const categoryInput = useRef(null);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const doc={title,categories,description,readableTime: readableTime + " mins"}

    const ref=collection(db,"BlogsJsonDB")

    try {
      await addDoc(ref,{...doc})
      history.push("/")
    } catch (error) {
      console.log(error)
    }
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

  const { mode } = useTheme();
  return (
    <div className={`create ${mode}`}>
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
