const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

// EXPRESS HBS  engine
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', {
        tituloPagina: 'Home - Inicio',
        nombre: 'JuAnCHOa',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {

    res.render('about', {
        tituloPagina: 'About',
        anio: new Date().getFullYear()
    });
});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});