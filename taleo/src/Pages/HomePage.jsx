import React from 'react'
import { Link } from 'react-router-dom';

function HomePage() {

  return (
    <div className="story-card-container">
      <Link to="/create">Create story</Link>
      <h2>Stories</h2>
    </div>
  )
}

export default HomePage
