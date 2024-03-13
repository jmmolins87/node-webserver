const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()

const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials' );

// Servir contenido estático
app.use( express.static( 'public' ));

app.get('/', (req, res) => {
  res.render( 'home', {
    name: 'Juanma Molins Cortés',
    title: 'Node/Express Tutorial'
  });
});

app.get('/generic', (req, res) => {
  res.render( 'generic', {
    name: 'Juanma Molins Cortés',
    title: 'Node/Express Tutorial'
  });
});

app.get('/elements', (req, res) => {
  res.render( 'elements', {
    name: 'Juanma Molins Cortés',
    title: 'Node/Express Tutorial'
  });
});

app.get('*', (req, res) => {
  res.sendFile( __dirname + '/public/404.html' );
});

app.listen(port, () => {
    console.log( `Listening on port ${ port }` );
})