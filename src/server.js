const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

// LISTEN
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Helouda', port)
})

// SETTINGS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ROUTER

app.use('/', require('./router/RutasWeb.router'));
app.use('/mascotas', require('./router/Mascotas.router'));

app.use((req, res, next) => {
    res.status(404).render('404')
});

// MIDDELWARE
// app.use(express.static(path.join(__dirname, 'public')))

// CONNECTION TO DATABASE

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.vzdjj.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(() => console.log('Database Connected'))
    .catch(e => console.log(e))


// CONFIG DOTENV
require('dotenv').config();