const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let productInput = form.elements.product;
    let numInput = form.elements.qty;

    createLis(productInput.value, numInput.value);
    productInput.value = '';
    numInput.value = '';
})

function createLis(product, num) {
    let newLi = document.createElement('li');
    let info = `${num} ${product}`;
    let ul = document.querySelector('#list');

    newLi.innerText = info;
    ul.appendChild(newLi);
}