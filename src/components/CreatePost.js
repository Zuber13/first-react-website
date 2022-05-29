import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function CreatePost() {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const navigate = useNavigate();

  async function handlePost(e) {
    e.preventDefault();
    try {
      const res = await Axios.post("/create-post", {
        title,
        body,
        token: localStorage.getItem("token")
      });
      navigate(`/post/${res.data}`)
    } catch {
      console.log("There some error occured while creating post");
    }
  }
  return (
    <div className="container">
      <form onSubmit={handlePost}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input onChange={e => setTitle(e.target.value)} type="text" name="title" placeholder="title" />
        </div>

        {/* <div className='form-group'>
          <label htmlFor="image">Add Image</label>
          <input type="file" placeholder='image'/>
        </div> */}

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            onChange={e => setBody(e.target.value)}
            placeholder="Description"
            rows="15"
            cols="105"
            name="body"
          />
        </div>
        <button className="post-btn" type="submit">
          Save Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
