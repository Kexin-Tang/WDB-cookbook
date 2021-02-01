let numbers = [1, 2, 3, 4, 5];
console.log(`Original number list is [${numbers}]`);


// forEach
console.log("******** forEach ********")
numbers.forEach(function (el) {
    console.log(el ** 2);
})
console.log("******** forEach ********")

// map
console.log("******** map ********")
let numSquare = numbers.map(function (num) {
    return num ** 2;
})
console.log(numSquare)
console.log("******** map ********")