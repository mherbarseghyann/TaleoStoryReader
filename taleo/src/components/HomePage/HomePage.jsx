import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Popup from '../PopUp/PopUp';
import StoryCard from '../StoryCard/StoryCard';

function HomePage() {
  const [data, setData] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

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
    setSelectedStory(story);
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setSelectedStory(null);
  };

  const handleConfirmDelete = () => {
    // Add your delete functionality here
    console.log('Deleting story:', selectedStory);
    handlePopupClose();
  };

  const handleConfirmEdit = () => {
    // Add your edit functionality here
    console.log('Editing story:', selectedStory);
    handlePopupClose();
  };

  return (
    <div className="story-card-container">
      <Link to="/create">Create story</Link>
      <h2>Stories</h2>
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

      <Popup
        story={selectedStory}
        show={showPopup}
        onClose={handlePopupClose}
        onConfirmEdit={handleConfirmEdit}
        onConfirmDelete={handleConfirmDelete}
      />
    </div>
  );
}

export default HomePage;
