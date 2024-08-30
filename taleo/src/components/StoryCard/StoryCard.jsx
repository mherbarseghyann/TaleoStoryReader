import React from "react";
import "./StoryCard.css";
import { Link } from "react-router-dom";

function StoryCard({ id, title, description, wordsCount, author, onEdit, onDelete }) {
  return (
    <div className="card-container">
      <Link to={`story/${id}`} className="card-link">
        <div className="story-content">
          <h2 className="story-title">{title}</h2>
          <p className="story-description">{description}</p>
          <div className="story-details">
            <span className="story-words-count">{wordsCount} words</span>
            <span className="story-author">by {author}</span>
          </div>
        </div>
      </Link>
      <div className="btns">
        <button className="editbtn" onClick={onEdit}>Edit</button>
        <button className="delbtn" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default StoryCard;
