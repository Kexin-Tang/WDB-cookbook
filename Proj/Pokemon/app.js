const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const pos = document.querySelector('#container');

for (let i = 1; i <= 151; i++) {
    const newImg = document.createElement('img');
    newImg.src = `${url}${i}.png`

    pos.appendChild(newImg);
}