const express = require('express')
const router = express.Router()
const Manga = require('../models/manga')

//Route dùng để load toàn bộ manga trong database
router.get('/', async (req, res) => {
    res.send('All mangas')
})


//Route dùng để load 1 manga cụ thể trong databse
router.get('/new', (req, res) => {
    res.send('New mangas')
})

//Route dùng để tạo mới manga trong database
router.post('/', async (req, res) => {
    res.send('Create mangas')
})
module.exports = router