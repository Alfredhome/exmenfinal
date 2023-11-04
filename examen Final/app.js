const express = require('express')
const hbs = require('hbs');


require('dotenv').config();

const port = process.env.PORT
const app = express()

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static('public'))



app.get('/', (req, res) => {
    res.render('home')
})


app.get('/panels', (req, res) => {
    res.render('panels')
})

app.get('/trailers', (req, res) => {
    res.render('trailers')
})

app.get('*', (req, res) => {
    res.render('404.hbs')
})

app.listen(port, () => {
    console.log(`Escuchando en el puerto http://localhost:${port}`);

})