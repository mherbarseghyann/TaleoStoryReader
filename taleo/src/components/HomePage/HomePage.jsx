import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Popup from '../PopUp/PopUp';
import StoryCard from '../StoryCard/StoryCard';
import './HomePage.css'

function HomePage() {
  const [data, setData] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [clickedBtn, setClickedBtn] = useState()

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setData(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (story) => {
    setSelectedStory(story);
    setShowPopup(true);
  };

  const handleDelete = (story) => {
    setClickedBtn('delete')
    setSelectedStory(story);
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setSelectedStory(null);
  };

  const handleConfirmDelete = (id) => {
    axios
      .delete(`http://localhost:3001/delete/${id}`)
      .then((result) => {
        setData(data.filter(story => story._id !== id));
        console.log('Deleted story:', id);
        handlePopupClose();
      })
      .catch((err) => console.log(err));
    }

  const handleConfirmEdit = () => {
    // edit functionality here
    console.log('Editing story:', selectedStory);
    handlePopupClose();
  };

  return (
    <div className="story-card-container">
      <Link to="/create">Create story</Link>
      <h2>Stories</h2>
      <div className='grid-container'>
      {data.map((story, index) => (
        <div key={index} className="story-card-wrapper">
          <StoryCard
            id={story._id} 
            title={story.title}
            description={story.description}
            wordsCount={story.story.split(' ').length}
            author="Mher Barseghyan"
            onEdit={() => handleEdit(story)}
            onDelete={() => handleDelete(story)}  
          />
        </div>
      ))}
      </div>
  
      <Popup
        story={selectedStory}
        show={showPopup}
        clickedBtn = {clickedBtn}
        onClose={handlePopupClose}
        onConfirmEdit={handleConfirmEdit}
        onConfirmDelete={handleConfirmDelete} 
      />
    </div>
    )
}

export default HomePage;
