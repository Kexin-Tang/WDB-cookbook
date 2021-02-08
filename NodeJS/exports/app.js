// must use `./` to indicate this is a file rather than a built-in command
const math = require('./math');

console.log(math.add(1, 3));
console.log(math.PI);

// In Dir, use `index.js` to gather seperate exports
// Use DirName to get access to all exports gathered in `index.js` 
const pet = require("./multiFiles");
console.log(pet.cat);
console.log(pet.dog);