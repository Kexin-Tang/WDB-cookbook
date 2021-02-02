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

// setTimeout
console.log("******** setTimeout ********")
console.log("Hello")
setTimeout(() => (
    console.log("...are u still there?")
), 2000)
console.log("Bye")
console.log("******** setTimeout ********")

// setInterval
console.log("******** setInterval ********")
const id = setInterval(() => (
    console.log("repeat...")
), 2000)
setTimeout(() => {
    clearInterval(id)
    console.log("Stop repeating!")
}, 6000)
console.log("******** setInterval ********")

// filter
console.log("******** filter ********")
let odd = numbers.filter(num => num % 2 === 1)
console.log(odd)
console.log("******** filter ********")

// some/every
console.log("******** some/every ********")
let some = numbers.some(num => num < 3)
let all = numbers.every(num => num > 0)
console.log(some + ', ' + all)
console.log("******** some/every ********")

// reduce
console.log("******** reduce ********")
let sum = numbers.reduce((sum, curr) => sum + curr)
console.log(`Sum: ${sum}`)
let max = numbers.reduce((max, curr) => {
    if (curr > max) return curr;
    else return max;
})
console.log(`Max: ${max}`)
console.log("******** reduce ********")