const express = require('express')
const tvshowRouter = express.Router()
const {v4:uuidv4} = require('uuid')

tvshows = [
    { title: "Rick and Morty", genre:"sci-fi", _id: uuidv4()},
    { title: "Watchmen", genre:"action", _id: uuidv4()},
    { title: "Westworld", genre:"fantasy", _id: uuidv4()},
    { title: "Friends", genre:"comedy", _id: uuidv4()}
]
//getall
tvshowRouter.get("/", (req, res) => {
    res.send(tvshows)
})
//get one
tvshowRouter.get('/:tvshowId', (req, res) => {
    const tvShowId = req.params.tvshowId
    const foundShow = tvshows.find(show => show._id === tvShowId)
    res.send(foundShow)
})

tvshowRouter.post("/", (req, res) => {
    const newShow = req.body
    newShow._id = uuidv4()
    movies.push(newShow)
    res.send(`Successfully added ${newShow.title} to the database`)
})

module.exports = tvshowRouter