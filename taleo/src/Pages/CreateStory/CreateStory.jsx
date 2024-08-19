import React from 'react';
import './CreateStory.css';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function CreateStory() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [author, setAuthor] = useState("")
  const [story, setStory] = useState("")


    function handleSubmit(e){
      e.preventDefault()

      axios
      .post("http://localhost:3001/create", {
        title: title,
        description: description,
        // author: author,
        story: story
      })
      .then((result)=>{
        console.log(result);
      })
      .catch(err=>{
        console.log(err);
      })
    }


  return (
    <div className="create-story-container">
      <h1>Create a New Story</h1>

      <form className="create-story-form" onSubmit={(e)=>handleSubmit(e)}>

        <div className="form-group">
          <label htmlFor="story-title">Title</label>
          <input onChange={(e)=>setTitle(e.target.value)} type="text" id="story-title" placeholder="Enter story title" />
        </div>

        <div className="form-group">
          <label htmlFor="story-desc">Description</label>
          <input onChange={(e)=>setDescription(e.target.value)} type="text" id="story-desc" placeholder="Enter story description" />
        </div>

        <div className="form-group">
          <label htmlFor="story-content">Story</label>
          <textarea onChange={(e)=>setStory(e.target.value)} id="story-content" placeholder="Write your story here" rows="10"></textarea>
        </div>

        <button type="submit" className="submit-button">Submit</button>

      </form><br />
      <Link to="/">Go to home page</Link>

    </div>
  );
}

export default CreateStory;
