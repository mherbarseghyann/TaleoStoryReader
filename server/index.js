const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const StoryModel = require('./Models/StoryModel');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://mherrbarseghyann:kovytrav@stories.adyon.mongodb.net/?retryWrites=true&w=majority&appName=Stories', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/stories/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const story = await StoryModel.findById(id);
    if (!story) return res.status(404).send('Story not found');
    res.json(story);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

app.put('/stories/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, story } = req.body;
  try {
    let existingStory = await StoryModel.findById(id);
    if (!existingStory) return res.status(404).send('Story not found');

    existingStory.title = title;
    existingStory.description = description;
    existingStory.story = story;

    await existingStory.save();
    res.json(existingStory);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

app.get("/get", (req, res) => {
  StoryModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err));
});


app.get("/story/:id", (req, res) => {
  const { id } = req.params;
  StoryModel.findById(id)
    .then(result => {
      res.json(result);
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  StoryModel.findByIdAndDelete(id)
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

app.post("/create", (req, res) => {
  StoryModel.create({
    title: req.body.title,
    description: req.body.description,
    story: req.body.story,
  })
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

const port = 3001;

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
