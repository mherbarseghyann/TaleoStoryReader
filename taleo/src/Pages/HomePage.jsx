import React, { useEffect, useState } from 'react';
import StoryCard from '../components/StoryCard/StoryCard';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Popup from '../components/PopUp/PopUp';

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
          <Link to={`/story/${story._id}`}>
            <StoryCard
              data={data}
              key={index}
              title={story.title}
              description={story.description}
              wordsCount={story.story.split(' ').length}
              author="Mher Barseghyan"
            />
          </Link>
          <button onClick={() => handleEdit(story)}>Edit</button>
          <button onClick={() => handleDelete(story)}>Delete</button>
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
