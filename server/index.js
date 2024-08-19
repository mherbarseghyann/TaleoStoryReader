const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const StoryModel = require('./Models/StoryModel')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://mherrbarseghyann:kovytrav@stories.adyon.mongodb.net/?retryWrites=true&w=majority&appName=Stories')


app.post("/create", (req, res)=>{
    StoryModel.create({
        title: req.body.title,
        description: req.body.description,
        story: req.body.story,
        
    }).then(result => res.json(result))
        .catch(err => res.json(err))
})

const port = 3001

app.listen(port, ()=>{
    console.log(`Server is listening to port ${port}`);
})