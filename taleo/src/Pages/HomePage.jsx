import React from 'react'
import StoryCard from '../components/StoryCard/StoryCard'
import { Link } from 'react-router-dom';

function HomePage() {

  const data = [
    {
      title: 'The Mysterious Forest',
      description: 'A thrilling tale of adventure and mystery in an enchanted forest.',
      wordsCount: 1200,
      author: 'Jane Doe',
      tags: ['Adventure', 'Fantasy', 'Mystery']
    },
    {
      title: 'Lost in Time',
      description: 'A journey through time that uncovers secrets from the past and future.',
      wordsCount: 1500,
      author: 'John Smith',
      tags: ['Sci-Fi', 'Time Travel']
    },
    {
      title: 'The Silent City',
      description: 'A haunting story of a deserted city with a dark secret.',
      wordsCount: 900,
      author: 'Alice Johnson',
      tags: ['Horror', 'Suspense']
    }
  ];


  return (
    <div className="story-card-container">
      <Link to="/create">Create story</Link>
      <h2>Stories</h2>
      {data.map((story, index) => (
        <Link to='/story'>
        <StoryCard
          key={index}
          title={story.title}
          description={story.description}
          wordsCount={story.wordsCount}
          author={story.author}
        />
        </Link>
      ))}
    </div>
  )
}

export default HomePage
