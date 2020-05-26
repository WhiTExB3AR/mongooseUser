const mongoose = require('mongoose')

//Mô tả cấu trúc 1 object (1 table trong database)
const mangaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    chapter: {
        type: Number,
        required: true
    },
    coverImageName: {
        type: String,
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Manga', mangaSchema)