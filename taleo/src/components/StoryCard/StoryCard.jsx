import React from 'react'
import './StoryCard.css'

function StoryCard({title, description, wordsCount, author}) {
  return (
    <div className="card-container">
      <h2 className="story-title">{title}</h2>
      <p className="story-description">{description}</p>
      <div className="story-details">
        <span className="story-words-count">{wordsCount} words</span>
        <span className="story-author">by {author}</span>
      </div>
    </div>
  )
}

export default StoryCard
