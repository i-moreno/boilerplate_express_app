const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Define paths for Express Server
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Define directory for public assets
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
  res.render('index', { title: 'Express Server' })
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About me' })
})

app.listen(3000, () => {
  console.log('Server running on port 3000');
})
