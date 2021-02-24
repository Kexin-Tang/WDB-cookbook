let express = require("express")
let app = express()


app.use(express.urlencoded({ extended: true }));

app.get('/cat', function (req, res) {
    res.send("GET /cat");
})


app.post('/cat', function (req, res) {
    const { username } = req.body
    res.send(`Username: ${username}`);
})


app.listen(8080, () => {
    console.log('start sever...')
})