const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.listen(8000, () => console.log("listening on port 8000"));

app.get('/cats', (req, res) => {
    res.render("cats");
});

app.get('/cat1', (req, res) => {
    var cat1 = {
        img: '/img/cat1.jpg',
        name: 'Franklin',
        food: 'Potato chips',
        age: 3,
        spots: ['window', 'bed', 'under the couch']
    };
    res.render("details", { cat: cat1 });
});

app.get('/cat2', (req, res) => {
    var cat2 = {
        img: '/img/cat2.jpg',
        name: 'Catera',
        food: 'Salmon',
        age: 10,
        spots: ['window', 'bed', 'on humans lap']
    };
    res.render("details", { cat: cat2 });
});

app.get('/cat3', (req, res) => {
    var cat3 = {
        img: '/img/cat3.jpg',
        name: 'Jetta',
        food: 'Cookies',
        age: 7,
        spots: ['window', 'bed', 'inside the couch']
    };
    res.render("details", { cat: cat3 });
});