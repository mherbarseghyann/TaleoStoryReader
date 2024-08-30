import React from "react";
import "./Popup.css";

const Popup = ({
  clickedBtn,
  story,
  show,
  onClose,
  onConfirmEdit,
  onConfirmDelete,
}) => {
  if (!show) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        {/* <h3>{story ? `Delete ${story.title}` : ""}</h3>
        <button onClick={onConfirmEdit}>Confirm Edit</button>
        <button onClick={() => onConfirmDelete(story._id)}>
          Confirm Delete
        </button>
        <button onClick={onClose}>Close</button> */}

        {clickedBtn === "delete" ? (
          <div>
            <h3>{story ? `Are you sure you want to delete ${story.title}?` : ""}</h3>
            <button onClick={() => onConfirmDelete(story._id)}>
              Confirm Delete
            </button>
            <button onClick={onClose}>Close</button>
          </div>
        ) : (
          <div>
            <button onClick={onConfirmEdit}>Confirm Edit</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
