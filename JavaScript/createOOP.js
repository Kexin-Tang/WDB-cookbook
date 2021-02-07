// // factory function
// function colorMaker(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//         let { r, g, b } = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     };
//     color.hex = function () {
//         let { r, g, b } = this;
//         return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     };

//     return color;
// }

// const myColor = colorMaker(100,200,255);
// console.log(colorMaker.rgb());
// console.log(colorMaker.hex());

// -------------------------------------------------------

// // constructor function
// function colorMaker(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// colorMaker.prototype.rgb = function () {
//     let { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
// }
// colorMaker.prototype.hex = function () {
//     let { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// const myColor = new colorMaker(100, 200, 255);
// console.log(myColor.rgb());
// console.log(myColor.hex());

// -------------------------------------------------------

// class
class colorMaker {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    rgb() {
        let { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    }
    hex() {
        let { r, g, b } = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
}

let myColor = new colorMaker(100, 200, 255);
console.log(myColor.rgb());
console.log(myColor.hex());