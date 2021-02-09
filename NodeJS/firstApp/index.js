const { request } = require("express");
const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("$use get the request!");
//     res.send("This is a response by $use!");
// });

app.get('/cats', (req, res) => {
    console.log("$/cats get the request!");
    res.send("Meowwwww!");
})

app.get('/r/:sub/comments/:id', (req, res) => {
    console.log("$/r/ get the request!");
    const { sub, id } = req.params;
    res.send(`<h1>Sub page: /r/${sub}/comments/${id}</h1>`);
})

// The position is important.
// It will overwrite other `get` if put it in the beginning
app.get('*', (req, res) => {
    console.log(`I don't know the path!`)
})

app.listen(8080, () => {
    console.log("Listening port 8080");
});
