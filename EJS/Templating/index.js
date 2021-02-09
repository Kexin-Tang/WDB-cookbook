const express = require("express")
const app = express()
const path = require('path')

app.set('views', path.join(__dirname, '/views'));
app.set("view engine", 'ejs');

app.use(express.static(path.join(__dirname, '/staticFiles')))

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/random', (req, res) => {
    const randNum = Math.round(Math.random() * 9) + 1;
    res.render("random", { randNum: randNum });
})


app.listen(8080, () => {
    console.log("Listening port 8080...");
});