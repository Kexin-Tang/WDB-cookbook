const info = function () {
    console.log("U clicked me")
};

const alt = function () {
    alert("U clicked me");
}

let btn2 = document.querySelector('#v2');
btn2.onclick = info;
btn2.onclick = alt;

let btn3 = document.querySelector('#v3');
btn3.addEventListener('click', info);
btn3.addEventListener('click', alt);

// ---------------------------------------------

let h2 = document.querySelector('#color');
let btn = document.querySelector("#colorBtn");

const changeColor = function () {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);

    h2.innerText = `rgb(${r}, ${g}, ${b})`;
    h2.style.color = `rgb(${r}, ${g}, ${b})`;
};

btn.addEventListener('click', changeColor);

// ------------------------------------------
let form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("Submit successfully!");
})

// -------------------------------------------
let userName = document.querySelector("#username");
let heading = document.querySelector('p');
userName.addEventListener('input', function (e) {
    if (userName.value === '') {
        heading.innerText = "Enter Your Username";
    }
    else {
        heading.innerText = `Welcome, ${userName.value}`;
    }
});

let change = document.querySelector("#change");
change.addEventListener('change', function (e) {
    console.log(`Change: ${change.value}`)
});

// --------------------------------------------
let delegation = document.querySelector("#delegation");
delegation.addEventListener('click', function (e) {
    e.target.nodeName === "LI" && e.target.remove();
})