import React, { useEffect, useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import axios from "axios";

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

  const oldstory =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various";

  // const wordsPerPage = 126;
  // const page1 = story
  //   .split(" ")
  //   .slice(
  //     currentPage * wordsPerPage,
  //     currentPage * wordsPerPage + wordsPerPage
  //   )
  //   .join(" ");
  // const page2 = story
  //   .split(" ")
  //   .slice(
  //     (currentPage + 1) * wordsPerPage,
  //     (currentPage + 1) * wordsPerPage + wordsPerPage
  //   )
  //   .join(" ");

  //   const amountOfPages = Math.ceil(story.split(' ').length/ wordsPerPage)

  // function turnLeft() {
  //   if (currentPage > 0) {
  //     setCurrentPage(currentPage - 2);
  //   }
  // }

  // function turnRight() {
  //   if (currentPage+2<=amountOfPages)
  //       setCurrentPage(currentPage + 2);
  // }

  return (
    <div className="container">
        <h2>{story ? story.title : "Loading..."}</h2>
        <div className="book">
            <div className="page">{story ? story.story : "Loading story..."}</div>
        </div>
    </div>

    // <div className="container">
    //   <h2>Current Book</h2>
    //   <div className="book">
    //     <div className="page">{page1}</div>
    //     <div className="page">{page2}</div>
    //   </div>
    //   <p className="page-number">
    //     Page {currentPage + 1} & {currentPage + 2}
    //   </p>
    //   <div className="buttons">
    //     <button onClick={turnLeft} disabled={currentPage <= 0}>
    //       &lt;
    //     </button>
    //     <button onClick={turnRight} disabled={amountOfPages <= currentPage+2}>&gt;</button>
    //   </div>
    // </div>
  );
}

export default Reader;
