const express = require('express');
const app = express();
const drinks = require('./models/drinks.js')
const foods = require('./models/food.js')
const port = 3000;
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('//', (req, res) => {
    res.send('Welcome to the Gitpub App!');
});


app.get('/drinks/', (req, res) => {
    res.render("drinks_index.ejs", { allDrinks: drinks, foods: foods });
});




app.get('/drinks/:id', (req, res) => {
	res.render('drinks_show.ejs', {
		drink: drinks[req.params.id],
	})
})


app.get('/food/', (req, res) => {
    res.redirect("drinks_index.ejs", { food: foods });
});


app.get('/foods/:id', (req, res) => {
	res.render('show_food.ejs', {
		food: foods[req.params.id]
	})
})








// app.get('/drinks/:id/', (req, res) => {


//     res.render("drinks_show.ejs", {showDrink: drinks[req.params.id]});
// });


// , { allDrinks: drinks }

// app.get('/drinks/:index/', (req, res) => {
//     let response = drinks[req.params.index];
//     res.send(`<ul><li>${response.name}</li><li>${response.price}</li><li>${response.image}</li></ul>`);
// });




app.listen(port, () => {
    console.log('Express is listening on port: ', port);
});