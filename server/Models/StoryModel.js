const mongoose = require('mongoose')

const StorySchema = mongoose.Schema({
    title: String,
    description: String,
    author: String,
    story: String
})

const StoryModel = mongoose.model("stories", StorySchema)
module.exports = StoryModel