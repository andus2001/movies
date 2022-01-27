const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

//middleware
app.use(express.json())
app.use(morgan('dev'))
app.get('/',(req, res) => {
    
    res.send('hello')
})
//db connect
mongoose.connect("mongodb://localhost:27017/movies", 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
() => console.log('connected to My DB')
)

//routes
app.use('/movies', require('./routes/movieRouter.js'))
app.use('/tvshows', require('./routes/tvshowRouter.js'))


app.listen(9000, ()=>{
    console.log(`running 9K`);
})