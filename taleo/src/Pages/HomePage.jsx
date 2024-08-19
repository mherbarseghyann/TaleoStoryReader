import React, { useEffect, useState } from 'react'
import StoryCard from '../components/StoryCard/StoryCard'
import { Link } from 'react-router-dom';
import axios from 'axios'


function HomePage() {

  const olddata = [
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

  const [data, setData] = useState([])

  useEffect(()=>{
    axios
      .get("http://localhost:3001/get")
      .then((result) => setData(result.data))
      .catch((err) => console.log(err));
  },[])


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
