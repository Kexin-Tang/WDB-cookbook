let request = new XMLHttpRequest();

request.onload = function () {
    console.log("Request Success!");
    console.log(this);
}

request.onerror = function () {
    console.log("Fail!");
    console.log(this);
}

let url = "https://api.cryptonator.com/api/ticker/btc-usd";

request.open('GET', url);
request.send();