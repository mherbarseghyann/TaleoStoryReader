import React, { useState, useEffect } from "react";
import "./Popup.css";

const Popup = ({
  clickedBtn,
  story,
  show,
  onClose,
  onConfirmEdit,
  onConfirmDelete,
}) => {
  const [editedStory, setEditedStory] = useState({
    title: "",
    description: "",
    story: "",
  });

  useEffect(() => {
    if (story) {
      setEditedStory({
        title: story.title || "",
        description: story.description || "",
        story: story.story || "",
      });
    }
  }, [story]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedStory((prevStory) => ({
      ...prevStory,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirmEdit(editedStory);
  };

  if (!show) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        {clickedBtn === "delete" ? (
          <div>
            <h3>
              {story ? `Are you sure you want to delete ${story.title}?` : ""}
            </h3>
            <div className="popup-buttons">
              <button onClick={() => onConfirmDelete(story._id)}>Confirm Delete</button>
              <button onClick={onClose}>Close</button>
            </div>
          </div>
        ) : (
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                value={editedStory.title}
                onChange={handleChange}
                placeholder="Title"
              />
              <textarea
                className="description-textarea"
                name="description"
                value={editedStory.description}
                onChange={handleChange}
                placeholder="Description"
              />
              <textarea
                className="story-textarea"
                name="story"
                value={editedStory.story}
                onChange={handleChange}
                placeholder="Story Content"
              />
              <div className="popup-buttons">
                <button type="submit">Update Story</button>
                <button type="button" onClick={onClose}>Close</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
