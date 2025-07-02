// Modules required for the main route page
const express = require("express");


const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET routes = access the pages for the website
app.get('/', (req, res) => {
    res.render('dashboard');
});

app.get('/tasks', (req, res) => {
    res.render('tasks');
});

app.get('/journal', (req, res) => {
    res.render('journal');
});

app.get('/calendar', (req, res) => {
    res.render('calendar');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
})

app.listen(PORT, () => {
    console.log("The server is live now!");
    console.log(`Listen on the server http://localhost:${PORT}`);
})