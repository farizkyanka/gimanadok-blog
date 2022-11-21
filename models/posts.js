const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    title: String,
    subtitle: String,
    headerImage: String,
    author: String,
    datePosted: Date,
    category: String,
    body: String
})

module.exports = mongoose.model('Posts', PostSchema)