// src/components/Popup/Popup.jsx
import React from 'react';
import './Popup.css'; // Optional, for styling

const Popup = ({ story, show, onClose, onConfirmEdit, onConfirmDelete }) => {
  if (!show) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <h3>{story ? `Edit/Delete ${story.title}` : ''}</h3>
        <button onClick={onConfirmEdit}>Confirm Edit</button>
        <button onClick={onConfirmDelete}>Confirm Delete</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
