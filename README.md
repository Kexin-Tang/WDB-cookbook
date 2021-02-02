# The Web Developer Bootcamp 2021 cookbook
This file is the notebook about [The Web Developer Bootcamp 2021](https://www.udemy.com/course/the-web-developer-bootcamp/) in [Udemy](www.udemy.com/). The content mainly include **HTML**, **CSS** and **Javascript**. Also, there are lots of **coding practice** to help us to remember the syntax and concepts.

## S1: Course Orientation
---
## S2: An Intro to Web Development
1. What is HTML, CSS and JavaScript?

> HTML -- <i>Like the nouns in a sentence, it just describes the content on the page.</i><br>
> CSS -- <i>Like the adj. in a sentence, it makes the page more beautiful.</i><br>
> JS -- <i>Like the verbs in a sentence, it achieves some actions, windows pop, calculations, etc.</i>

2. Some concepts.

>WWW -- <i>World Wide Web</i><br>
>HTTP -- <i>Hyper Text Transfer Protocol</i>

3. What are Front-end & Back-end?

>the front-end mainly focus on <i><b>Clinet</b></i><br>
>the back-end mainly focus on <i><b>Server</b></i>

4. What are Clinet and Server?
> * Clinet: The computer that accesses the server.
> * Server: The computer that satisfy requests on the Internet.

5. What are Request & Response?

>"request": Clinet &rarr; Server<br>
>"response": Server &rarr; Clinet

6. What are Internet and Web?
> * The Internet is a global network of interconnected computers via TCP/IP. It is a network of networks.
> * The Web is an information system where documents and others resources are available over the Internet. Doucments are transferred via HTTP.

7. Internet can olny transfer the box which contains HTML, CSS, JS and other codes. The web page presented to you is attributed to the browser (Chrome, Firefox, IE, ...) processing the code accordingly.
---
## S3-5: HTML
<a href="https://developer.mozilla.org/en-US/docs/Web/Reference">MDN</a> is a very useful website for searching HTML elements and their usages.

###### Code for HTML
- [header, paragraph, list, img, anchor](./HTML/HTML0.html)
- [block vs inline](./HTML/HTML1.html)
- [table](./HTML/HTML2.html)
- [form](HTML/HTML3.html)

###### Notes:
1. In documents and files, programmers are supposed to contain several elements even though these elements do not affect representations in the page.
```html
<!DOCTYPE html>
<html>
    <heda>
        <title>TITLE</title>
        ...
    </head>
    <body>
        ...
    </body>
</html>
```
2. In practice, please use <b>semantic elements</b>, such as &lt;header&gt;, &lt;footer&gt;, &lt;section&gt;, &lt;main&gt;, etc, rather than <b>&lt;div&gt;</b>.
3. <a href="https://docs.emmet.io/cheat-sheet/">Emmet</a> contains lots of shortcut key commands.
```html
<!--For example, when enter "h1>p"-->
<h1>
    <p>
    </p>
</h1>
<!--"p+a"-->
<p><a></a></p>
```
---
## S6-13: CSS
###### Code for CSS
- [Selector](./CSS/Selector.css)
- [Box](./CSS/Box.css)
- [em & rem](./CSS/em_rem.css)
- [opacity & alpha](CSS/opacity_rgba.css)
- [position](./CSS/position.css)
- [transition](./CSS/transitions.css)
- [transform](./CSS/transform.css)
- [fancy button](./CSS/fancy_button.css)
- [background img](./CSS/img_background.css)
- [flexbox](./CSS/flexbox.css)
- [BootStrap](./HTML/bootstrap.html)

###### Proj
- [PriceTable](./Proj/PriceTable)
- [Museum of Candy](./Proj/Museum_of_Candy)


###### Notes:
1. CSS is a **cascade** language, which means the order in .css file will affect the page.
```css
/* final color is blue */
p {
    color: red;
}

p {
    color: blue;
}
```
2. **Specificity** is how the browser decides which rules to apply when multiple rules could apply to the same element.
> !import >> ID > Class > Element
3. In CSS, box is an import concept! Box has three concepts which are **Margin**, **Padding** and **Border**.<br>
![CSS.png](https://i.loli.net/2021/01/25/4w8DIOdP1pTLHhg.png)
4. Inline, Block and Inline-Block
> * inline -- *only has horizontal margin, can not set width and height*
> * block -- *has horizontal and vertical margins, can set width and height*
> * inline-block -- *combine inline and block, which means it displaying like inline elements, but every element is a block*
5. px Vs em Vs rem
> * px -- ***Absolute scale**. It will not change with other parts' changes*
> * em & rem -- ***Relative scale**.*
>   * em: 
>       * With font-size, 1em equals the font-size of the parent. 2em is twice the font-size of parent. 
>       * With other properties, 1em is equal to the computed font-size of the element itself.
>   * rem:
>       * Relative to the root html element's font-size. If the root font-size is 20px, 1 rem is always 20px, 2rem is always 40px.
6. Transition: [property name, duration, timing function, delay], [ ... ]
7. [Flexbox](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html) 
> * is a one-dimensional layout method for laying out items in rows or columns. Flexbox allows us to distribute space dynamically across elements of an unknown size.
> * Flex has two axis called *main axis* & *cross axis*, set property 'flex-direction' to set the main axis.
> ![flex-direction](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png)
> * Difference between *align-content* and *align-items* -- *align-items* focus on **one-row** situation while *align-content* focus on **multi-row** situation.
> ![align-items](https://www.w3.org/TR/css-flexbox-1/images/flex-align.svg)
> ![align-content](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png)
> * Setting *flex-basis* rather than *width* or *height* will ignore the parameters (width/ height) in the main axis direction, so that when changing the main axis direction, there is no need to adjust the corresponding width or height.
8. Responsive Design -- show different pages according to different devices.<br>
9. Media Query -- allow us to modify our styles depending on particular parameters like screen width or device type.
```css
@media (case) {
    selector {
        ...
    }
}
```
10. [BootStrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/) is a package which help programmer to save their time by providing various templates. For video instructions, you can click [here](https://www.udemy.com/course/the-web-developer-bootcamp/learn/lecture/21917862#overview)!

---

## S14-23: JavaScript

###### Code for JS
- [Basic syntax](./JavaScript/todo.js)
- [Callbacks & Array Methods](./JavaScript/callbacks.js)

###### Notes:
1. JS has several primative types: `bigint`, `string`, `boolean`, `null`, `number`, `undefined` and `symbol`.
2. `NaN` is a numeric value that represents something that is not a number
```js
0/0 // NaN
1+NaN
```
3. Value setting
```js
let Name = Value;       // normal
const Name = Unchanged; // cannot be changed
var Name = Value;       // old version, not recommend!
```
4. String
```js
let name = "Ke-Hsin";
name[1]         // "e"
name+"Tang"     // Ke-HsinTang

// Property
name.length     // 7

// Method
let userInput = '  Hello woRld ';

userInput.toUpperCase()     // '  HELLO WORLD '

userInput.trim()            // 'Hello woRld'

userInput.indexof('Hel')    // the first fit -- 3
userInput.indexof('abc')    // not found -- -1

userInput.slice(2, 7)       // 'Hello'
userInput.slice(10)         // 'Rld '
userInput.slice(-4, -1)     // 'Rld'

userInput.replace('Rld', 'rld').trim()  // 'Hello world'

// Template Literals
`My name is ${firstName} ${lastName} ! I have $${3+4}.`
```
5. Null & Undefined
> * null -- Intentional absence of some value
> * undefined -- do not have an assigned value
> ```js
> let userName = null;  // null
> let a;                // undefined
> ```
6. double equals Vs triple equals
> * ==
>   * Checks for equality of value, but not equality of type. This can lead to some unexpected results!
> * ===
>   * Checks for equality of value and equality of type.
> ```js
> 0 == false;           // true
> null == undefined;    // true
> 1 == '1';             // true
> 
> 0 === false;          // false
> 1 === '1';            // false
> ```
7. Console, Alert & Prompt
```js
console.log("I am a log")   // I am a log
console.error('Error!')
console.warn('Warning!')

alert('Alert in the web page')

let num = prompt("Enter a number")
```
8. False values
> * false
> * 0
> * ""
> * null
> * undefined
> * NaN
9. Array *(Notice the difference between the **in-place** methods and other methods!)*
> * push/pop & shift/unshift
> ```js
> let num = [1,2]
> num.push(3,4);  // [1,2,3,4], in-place
> num.pop();      // [1,2,3], in-place
> num.shift();    // [2,3], in-place
> num.unshift(1); // [1,2,3], in-place
> ```
> * concat & includes & indexOf & reverse
> ```js
> let num1 = [1,2]
> let num2 = [3,4]
> let num = num1.concat(num2);   // num = [1,2,3,4], not in-place 
> // not in-place
> num.includes(100);  // false
> num.includes(1);    // true
> 
> // not in-place
> num.indexOf(2);     // 1
> num.indexOf(100);   // -1
> 
> num.reverse();      // [4,3,2,1], in-place
> ```
> * slice & splice
> ```js
> let colors = ['red', 'blue', 'purple', 'white']
> 
> // not in-place
> let part1 = colors.slice(2);      // ['purple', 'white']
> let part2 = colors.slice(0,2);    // ['red', 'blue']
> 
> // in-place
> // splice(index, ?deleteNum, ...item)
> let deleteTwo = colors.splice(-1,2);              // colors=['red','blue']            & deleteTwo=['purple', 'white']
> let deleteZero = colors.splice(1,0,'green');      // colors=['red','green','blue']    & deleteZero=[] 
> let deleteOne = colors.splice(0, 1, 'black');     // colors=['black','green','blue']  & deleteOne=['red']
> ```
> * sort
> ```js
> let num = [100,5,23,7,0];
> num.sort();   // [0,5,7,23,100], in-place
> ```
1.  Due to `Reference` and `Address`, you should pay attention to the equality between two arrays.
```js
let num1 = [1,2,3]
let num2 = [1,2,3]

// Although they look the same, num1 and num2 store in different places (addresses).
// And === or == will compare their addresses
num1 === num2;  // false
num1 == num2;   // false

// In this case, numCopy is a reference of num1, they share the same address.
let numCopy = num1
numCopy === num1;   // true
num1.pop();     // num1 & numCopy = [1,2]
```
11. `Const Array` is an array that cannot be re-assigned, but it can be changed.
```js
const num = [1,2,3];
num.push(4);    // it's ok, num=[1,2,3,4], no address is changed.
num = [5,6];    // error! [5,6] has a different address, you cannot assign an new address to a const.
```
12. Object -- consist with key-value pairs, just like *dict* in Python.
```js
// let obj = { key: value }
let stu = {name:"tom", age:18, motto:"my work is in my heart", favorate:['bike', 'game']}

let name = stu["name"]; // "tom"
let motto = stu[motto]; // error
let age = stu.age       // 18
```
```js
let years = {2000:'good', 2020:'bad'};
let birth = 2000;

let y1 = years["2000"]; // good
let y2 = years[2020];   // bad
let y3 = years.2000;    // error
let y4 = years."2020";  // error
let y5 = years[birth];  // good
let y6 = years.birth;   // error
```
> All keys will be converted into *string* except symbol keys.
13. `for(value of iterable)` can be used to iterate arrays, maps or other type **except objects** (Notice: IE doesn't support)
14. `for(key in objects)` can be used to iterate an object, and get the keys.
```js
let stu = {'tom':100, 'jack':85};
for(let name in stu)
{
    console.log(`${name} has score: ${stu.name}`);
}

console.log(Object.keys(stu));      // ['tom','jack']
console.log(Object.values(stu));    // [100,85]
console.log(Object.entries(stu));   // [['tom',100], 
                                    //  ['jack',85]]
```
15. Function
```js
// function defination
function add(x, y){
    return x+y;
}
// function expression
const mul = function (x,y){
    return x*y;
}
// arrow function
const square = (x) => {
    return x*x;
}
```
16. Scope -- `Function`, `Block` & `Lexical`
> * `function` & `block` scopes are the same as other languages like Python and C++
> * `lexical` scope is very different. It can access its outter variables.
> ```js
> // the `print` function can run successfully due to lexical property.
> function print(){
>   let heros = ['spiderman', 'ironman']
>   function lexical(){
>       for(let hero of heros){
>           console.log(hero)
>       }
>   }
>   lexical()
> }
> ```
17. Higher order functions -- functions can accept other functions as arguments, or return functions
```js
function executeFunc(func, times){
    for(let i=0; i<times; i++){
        func();
    }
}

function hello(){
    console.log("hello world")
}

executeFunc(hello(), 2);
```
```js
function isBetweenFunc(min, max){
    return function(num){
        return num>=min && num<=max;
    }
}
const isBetween1 = isBetweenFunc(10, 50);
isBetween1(30);  // true

const isBetween2 = isBetweenFunc(1, 5);
isBetween1(30);  // false
```
18. **Method** -- we can add functions as properties on objects.
```js
const math = {
    mul: function(x,y){return x*y},
    div: function(x,y){return x/y},
    add: function(x,y){return x+y},
    min: function(x,y){return x-y}
}

math.add(1,1);  // 2
```
19. **this** -- key word for accessing object's other nested values.
> Notice: It is important that ***this*** in ***arrow functions*** can only access *function scope* variables. In other words, it cannot access other nested values. 
```js
let cat = {
    name: 'bobo',
    sex: 'female',
    info1: function (){console.log(`${this.name} says meow`)},
    info2: () => {console.log(`${this.name} says meow`)}
}
cat.info1();    // bobo says meow
cat.info2();    // undefined says meow
```
```js
let person = {
    firstName: 'Ke-Hsin',
    lastName: 'Tang',
    fullName: function (){
        return this.firstName+' '+this.lastName;
    },
    shoutName1: function() {
        return setTimeout(function (){
            console.log(this);
            console.log(this.fullName())
        }, 100)
    },
    shoutName2: function() {
        return setTimeout(() => {
            console.log(this);
            console.log(this.fullName())
        }, 100)
    }
}

person.shoutName1();    // window \n undefined undefined
person.shoutName2();    // person \n Ke-Hsin Tang
```
1.  **try-catch**
```js
try{
    // something may be wrong
} catch(e) {
    console.log(e);
    // other warnings or logs
}
```
21. For other advanced function methods, you can refer [html](./HTML/callbacks.html).
22. Default params
```js
// old version
function func1(a){
    if(a===undefined)   a=1;
    return a;
}
// new version
function func2(b=1){
    return b;
}
```
23. `Spread` allows an iterable such as an array to be **expanded** in places where zero or more arguments (function calls) or elements (array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs are expected.
```js
let numbers = [1,56,203,42];
Math.max(...numbers);   // 203
console.log(...'cat');  // 'c', 'a', 't'

let arr1 = ['CHN', 'USA'];
let arr2 = ['UK'];
let arr = [...arr1, ...arr2];   // ['CHN', 'USA', 'UK']

let info1 = {name:'tom', dep:'cs'};
let info2 = {age:18, dep:'ece'};
let stu1 = {...info1, ...info2, sex:'man'}; // {name:'tom', age:18, dep:'ece', sex:'man'}
let stu2 = {...info2, ...info1, sex:'man'}; // {name:'tom', age:18, dep:'cs', sex:'man'}
```

---