import React from 'react';
import './CreateStory.css';
import { Link } from 'react-router-dom';

function CreateStory() {


    function handleTitle(){

    }

    function handleDescribtion(){

    }

    function handleStory(){

    }

    function handleSubmit(){
        
    }


  return (
    <div className="create-story-container">
      <h1>Create a New Story</h1>

      <form className="create-story-form">

        <div className="form-group">
          <label htmlFor="story-title">Title</label>
          <input onChange={handleTitle} type="text" id="story-title" placeholder="Enter story title" />
        </div>

        <div className="form-group">
          <label htmlFor="story-desc">Description</label>
          <input onChange={handleDescribtion} type="text" id="story-desc" placeholder="Enter story description" />
        </div>

        <div className="form-group">
          <label htmlFor="story-content">Story</label>
          <textarea onChange={handleStory} id="story-content" placeholder="Write your story here" rows="10"></textarea>
        </div>

        <button onSubmit={handleSubmit} type="submit" className="submit-button">Submit</button>

      </form><br />
      <Link to="/">Go to home page</Link>

    </div>
  );
}

export default CreateStory;
