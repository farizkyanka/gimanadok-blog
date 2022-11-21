const express = require('express');
const path = require('path');
const ejsmate = require('ejs-mate');
const mongoose = require('mongoose');
const postRoutes = require('./routes/posts')

// load mongoose
mongoose.connect('mongodb://127.0.0.1:27017/gimanadok');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected")
})

// load express as app
const app = express();

app.engine('ejs', ejsmate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('statics'))
app.use(express.urlencoded({extended:true}));

// routes
app.use('/', postRoutes)

// catch any non-hit route request
app.all('*', (req,res) => {
    res.send('page not found')
})

// activate express to listen to requests on port 5000
app.listen(5000, () => {
    console.log('Express is running on Port 5000')
})

