const express = require('express')
const movieRouter = express.Router()
const Movie = require('../models/movie')


//get all
//mongo
movieRouter.get("/", (req, res, next) => {
    res.send('hello')
//    Movie.find((err, movies) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(movies)
//    }) 
})
//get one
movieRouter.get('/:movieId', (req, res) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    res.send(foundMovie)
})
//get by genre
movieRouter.get('/search/genre', (req, res) => {
   const genre = req.query.genre 
   const filteredMovies = movies.filter(movie => movie.genre === genre)
   res.send(filteredMovies)
})

//post one
movieRouter.post("/", (req, res, next) => {
    const newMovie = new Movie(req.body)
    newMovie.save((err, savedMovie) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedMovie)
    })
})

//delete one
movieRouter.delete('/:movieId', (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    movies.splice(movieIndex, 1)
    res.send(`Successfully deleted movie`)
})

//update one
movieRouter.put( '/:movieId', (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    const updatedMovie = Object.assign(movies[movieIndex], req.body)
    res.send(updatedMovie)
})


module.exports = movieRouter