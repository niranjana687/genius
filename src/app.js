const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();
const port = 3000;

//paths to public and views.
const publicDirectoryPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//view engine
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

//setting up static directory to serve
app.use(express.static(publicDirectoryPath));

//home page
app.get('', (request, response) => {
    response.render('index', {
        title: 'Genius Search',
        author: 'Niranjana',
    });
});
//sea
//about page
app.get('/about', (request, response) => {
    response.render('about', {
        title: 'Genius Search',
        author: 'Niranjana',
    });
});

//404 but about
app.get('/about/*', (request, response) => {
    response.render('404', {
        title: 'Genius Search', 
        author: 'Niranjana',
        message: 'Error 404: Page Not found',
    })
});

//404
app.get('*', (request, response) => {
    response.render('404', {
        title: 'Genius Search', 
        author: 'Niranjana',
        message: 'Error 404: Page Not found',
    });
});

app.listen(port, () => {
    console.log(`We are listening at localhost:${port}`);
})