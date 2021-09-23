const express = require('express');
const app = express();
const drinks = require('./models/drinks.js')
const port = 3000;

app.get('//', (req, res) => {
    res.send('Welcome to the Gitpub App!');
});


app.get('/drinks/', (req, res) => {
    res.render("drinks_index.ejs");
});




app.listen(port, () => {
	console.log('Express is listening on port: ', port);
});