import React, { useEffect, useState } from 'react'
import StoryCard from '../components/StoryCard/StoryCard'
import { Link } from 'react-router-dom';
import axios from 'axios'


function HomePage() {
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
        <Link key={index} to={`/story/${story._id}`}>
        <StoryCard
          data = {data}
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
