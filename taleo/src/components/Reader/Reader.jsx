import React, { useEffect, useState } from "react";
import "./Reader.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Reader() {
  const [currentPage, setCurrentPage] = useState(0);
  const [story, setData] = useState()
  const params = useParams()

  useEffect(()=>{
    axios
    .get(`http://localhost:3001/story/${params.id}`)
    .then((result) => setData(result.data))
    .catch((err) => console.log(err));

  },[params.id])

  const wordsPerPage = 126;
  const page1 = story
    ? story.story
        .split(" ")
        .slice(currentPage * wordsPerPage, currentPage * wordsPerPage + wordsPerPage)
        .join(" ")
    : "Loading...";

  const page2 = story
    ? story.story
        .split(" ")
        .slice((currentPage + 1) * wordsPerPage, (currentPage + 1) * wordsPerPage + wordsPerPage)
        .join(" ")
    : "Loading...";

    const amountOfPages = story ? Math.ceil(story.story.split(' ').length / wordsPerPage) : 0;

  function turnLeft() {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 2);
    }
  }

  function turnRight() {
    if (currentPage+2<=amountOfPages)
        setCurrentPage(currentPage + 2);
  }

  return (
    <div className="container">
      <Link to='/'>Home</Link>
      <h2>{story ? story.title : 'Loading...'}</h2>
      <div className="book">
        <div onClick={turnLeft} className="page">{page1}</div>
        <div onClick={turnRight} className="page">{page2}</div>
      </div>
      <p className="page-number">
        Page {currentPage + 1} & {currentPage + 2}
      </p>
      <div className="buttons">
        <button onClick={turnLeft} disabled={currentPage <= 0}>
          &lt;
        </button>
        <button onClick={turnRight} disabled={amountOfPages <= currentPage+2}>&gt;</button>
      </div>
    </div>
  );
}

export default Reader;
