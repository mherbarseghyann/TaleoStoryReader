import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const EditStory = () => {
  const { id } = useParams();
  const history = useHistory();

  const [story, setStory] = useState({
    title: "",
    description: "",
    content: "",
  });

  useEffect(() => {
    axios
      .get(`/api/stories/${id}`)
      .then((response) => {
        setStory(response.data);
      })
      .catch((error) => console.error("Error fetching story:", error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStory((prevStory) => ({
      ...prevStory,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/api/stories/${id}`, story)
      .then(() => {
        history.push("/");
      })
      .catch((error) => console.error("Error updating story:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={story.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <textarea
        name="description"
        value={story.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <textarea
        name="content"
        value={story.content}
        onChange={handleChange}
        placeholder="Story Content"
      />
      <button type="submit">Update Story</button>
    </form>
  );
};

export default EditStory;
