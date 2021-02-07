let api = "https://api.cryptonator.com/api/ticker/btc-usd";

fetch(api)
    .then(info => {
        console.log("Received the Header, waiting to parse ", info);
        return info.json();
    })
    .then(info => {
        console.log("Received the Body, waiting to parse ", info);
    })
    .catch(function (err) {
        console.log("Error: ", err);
    })