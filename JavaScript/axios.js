// axios request
axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
    .then(info => {
        console.log(info.data);
    })
    .catch(e => {
        console.log("Error: ", e);
    });

// axios set headers
const getDadJokes = async function () {
    try {
        const config = { headers: { Accept: "application/json" } }
        let joke = await axios.get("https://icanhazdadjoke.com/", config);
        console.log(joke.data.joke);
    }
    catch (e) {
        console.log(e);
    }
}

getDadJokes();