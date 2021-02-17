# The Web Developer Bootcamp 2021 cookbook
该文章主要作为 [The Web Developer Bootcamp 2021](https://www.udemy.com/course/the-web-developer-bootcamp/) 的笔记. 该课程主要包括了 **HTML**, **CSS**, **Javascript**等. 同样,该课程包含了许多编程项目供巩固基础知识.

目录 |
:---:
[S1: Course Orientation](#-s1-course-orientation)
[S2: An Intro to Web Development](#s2-an-intro-to-web-development)
[S3-5: HTML](#s3-5-html)
[S6-13: CSS](#s6-13-css)
[S14-23: JavaScript](#s14-23-javascript)
[S24-26: Document Object Model (DOM)](#s24-26-document-object-model-dom)
[S27: Async JavaScript](#s27-async-javascript)
[S28: AJAX](#s28-ajax)
[S29: OOP](#s29-oop)
[S30: Terminal](#s30-terminal)


## S1: Course Orientation
---
## S2: An Intro to Web Development
1. 什么是HTML, CSS 以及 Javascript?

> HTML -- <i>就像句子中的名词,主要描述了一个网页中的主要内容.</i><br>
> CSS -- <i>就像句子中的形容词,用于将内容呈现的更加美观.</i><br>
> JS -- <i>类似句子中的动词,用于控制各种逻辑的实现.</i>

2. 前端和后端是什么?

> 前端主要关注于 <i><b>客户端</b></i>, 实现网页内容的呈现<br>
> 后端主要关注于 <i><b>服务器</b></i>, 实现浏览器与服务器之间的通信

3. 什么是客户端和服务器?
> * 客户端: 请求服务器服务的终端, 一般设备如个人电脑.
> * 服务器: 响应客户端请求的终端.

4. Internet和Web?
> * Internet是一种通过**TCP/IP**协议实现全球网络互连的网络结构, 可以视为是网络的网络.
> * Web是一种信息系统, 用于文档和其他资源在Internet中传递. 与Internet基于TCP/IP不同, Web基于**HTTP**协议实现通信.

5. Internet只能传递HTML, CSS, JS和其他代码. 而浏览器能够帮助翻译这些代码并渲染出好看的网页.

---
## S3-5: HTML
<a href="https://developer.mozilla.org/en-US/docs/Web/Reference">MDN</a> 是一个非常有用的网站, 包含了各种常见的HTML元素和使用方法.

###### Code for HTML
- [header, paragraph, list, img, anchor](./HTML/HTML0.html)
- [block vs inline](./HTML/HTML1.html)
- [table](./HTML/HTML2.html)
- [form](HTML/HTML3.html)

###### Notes
1. 在编写HTML时,需要包含下列的元素, 虽然这些内容不会显示在网页中, 但是却有非常重要的作用.
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
2. 请多使用 <b>semantic elements</b>, 比如 &lt;header&gt;, &lt;footer&gt;, &lt;section&gt;, &lt;main&gt;, etc, 而不是单纯堆叠 &lt;div&gt;.
3. <a href="https://docs.emmet.io/cheat-sheet/">Emmet</a> 包含了许多HTML语法的缩写和快捷方式.
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


###### Notes
1. CSS 是一种 **级联** 语言, 也就是说.css文件中对同一个元素的定义顺序不同, 则呈现的结果也可能不同. 一般而言, 后定义的会覆盖前定义的.
```css
/* final color is blue */
p {
    color: red;
}

p {
    color: blue;
}
```
2. **Specificity** 是浏览器决定出现定义冲突时, 先执行哪个的标准. 按照如下的重要性排序, 可以解决冲突.
> !import >> ID > Class > Element

3. 在 CSS 中, box 非常重要! Box 有三个属性: **Margin**, **Padding** 和 **Border**.<br>
![CSS.png](https://i.loli.net/2021/01/25/4w8DIOdP1pTLHhg.png)

4. Inline, Block 和 Inline-Block
> * inline -- 只有垂直方向的margin, 不能设置高度和宽度, 具体表现为: 嵌入在一行内, 不会换行
> * block -- 有垂直和水平方向的margin, 可以设置高度和宽度, 具体表现为: 与之前的内容断开, 另起一行
> * inline-block -- 是inline和block的结合, 即将block的内容不换行, 嵌入到同一行中

5. px Vs em Vs rem
> * px -- ***绝对尺度**. 不会随着别的尺度变化而变化*
> * em & rem -- ***相对尺度**.*
>   * em: 
>       * 1em即和父元素的大小相同; 2em即为父元素大小的一倍. 
>   * rem:
>       * 和html元素的大小有关, 与父元素大小无关. 如果设定的html中字体大小为20px, 那么不论父元素大小为多少, 1rem都是20px.

6. [Transition](./CSS/transitions.css): 定义了某个元素进行变化的时候的策略(如渐变), 有如下的各种属性, [property name, duration, timing function, delay], [ ... ]

7. [Flexbox](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html) -- 是一种定义页面布局的方式, 让程序员更好的控制页面表现形式[[More Details]](./CSS/flexbox.css)
> * 是一种一维的布局方式. Flexbox让我们能够在不知道具体的尺寸时, 动态的分配元素到指定位置, 比如在不知道页面大小尺寸的时候, 分配元素到"居中"
> * Flex有两个轴 -- *main axis* & *cross axis*, 通过设置 'flex-direction' 去设置主轴, 那么另一个轴自然成为*cross axis*.
> ![flex-direction](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png)
> * *align-content* 与 *align-items* 的不同 -- *align-items* 关注于 **只有一行** 的情况, 而 *align-content* 关注于 **多行**.
> ![align-items](https://www.w3.org/TR/css-flexbox-1/images/flex-align.svg)
> ![align-content](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png)
> * 设置 *flex-basis* 而不是 *width* 或 *height* 将会忽略主轴上类似宽度和高度这样的参数, 因此当我们改变主轴的时候, 也不需要更改对应的宽和高.

8. Responsive Design -- 在不同大小的窗口/设备上显示对应的网页布局.

9. Media Query -- 让程序员能够根据不同的窗口/设备大小去设计不同的代码.
```css
@media (case) {
    selector {
        ...
    }
}
```
10.  [BootStrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/) 是一个非常有用的库, 通过提供许多已有的模板, 能够让我们节省时间.[[More Details]](./HTML/bootstrap.html)

---

## S14-23: JavaScript

###### Code for JS
- [Basic syntax](./JavaScript/todo.js)
- [Callbacks & Array Methods](./JavaScript/callbacks.js)

###### Notes
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
10.  Due to `Reference` and `Address`, you should pay attention to the equality between two arrays.
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
24. `REST` is the opposite concept of `spread`. It combine scattered parameters to single **array-like** parameter, which has a length property but does not have array method like push/pop. *(It is not available inside of arrow functions!)*
```js
function sum(...num){
    return num.reduce((sum, curr) => sum+=curr);
}

sum(1,1);       // 2
sum(1,2,3,4,5); // 15
```
25. `Destructuring` is used to seperate some elements from array or object.
```js
// gold = 1024
// silver = 524
// brozen = 10
// else = [2, 0]
let raceScores = [1024, 524, 10, 2, 0];
const [gold, silver, brozen, ...else] = raceScores;

// name = 'tom'
// age = 18
// birthYear = 2000
// country = 'CHN'
let person = {
    name: 'tom',
    age: 18,
    sex: 'm',
    born: 2000
}
const {name, age, born: birthYear = 1999, country = 'CHN'} = person;

function show({name, age}){
    console.log(`${name} is ${age} years old!`)
}
```

---

## S24-26: Document Object Model (DOM)

###### Code for DOM
- [DOM](./JavaScript/DOM.js)
- [Event](./JavaScript/event.js)

###### Proj
- [Pokemon](./Proj/Pokemon/)
- [ProductNum](./Proj/ProductNum/)
- [Score Keeper](./Proj/ScoreKeeper/)

###### Notes
1. DOM 是文档对象模型, 定义了访问和操作HTML文档的标准方法. 程序员可以使用JS等通过DOM操作HTML的方法和属性, 以实现JS控制HTML.

2. DOM 会将HTML和CSS内容转换为JS的objects, 你可以使用 `console.dir(document)` 去查看这些objects. 

3. `getElementById`, `getElementsByClassName` 和  `getElementsByTagName` 能够根据输入的 id, class 和 tag 返回对应的元素.
> 注: 后两个方法会返回一个HTMLCollection(可以视为多个元素的list), 因为 class 和 tag 会包含多个元素, 而 id 只会包含一个元素

4. `document.querySelectorAll` 能够选择所有满足参数的元素. `querySelector` 能够选择满足条件的第一个元素.
```js
let para = document.querySelector('p'); // return the first paragraph
let checkbox = document.querySelector("input[type='checkbox']");    // return the first checkbox input
let doneTodo = decument.querySelectorAll(".todo");  // select all elements whose class are 'todo'
```

5. * `InnerText` -- 纯文本, 和网页中显示的内容一致. 如果设置了 `display=none` 则该部分内容不会出现.
   * `InnerHTML` -- HTML文件的内容, 包含文本和标签, 能通过设置HTML语法来改变网页内容.
   * `textContent` -- HTML文件中的文本, 即使有 `display=none`, 也会显示其中的文本.
```js
// <p>There are some content <span style="display:none;">!</span></p>
let content = document.querySelector('p');
console.log(content.innerText);     // There are some content
console.log(content.textContent);   // There are some content!
console.log(content.innerHTML);     // <p>There are some content <span style="display:none;">!</span></p>
```

6. `getAttribute` 可以得到元素的属性; `setAttribute` 可以设置元素的属性. *(注: 直接通过`.attribute`的方式访问的结果可能和`getAttribute`的结果不同)*
```js
let anch = document.querySelector('a');
let link1 = anch.getAttribute('href');  // /CSS/file.css
let link2 = anch.href;                  // file:///CSS/file.css
anch.setAttribute('href', './CSS/newFile.css');
link1 = './CSS/newFile.css';
```
7. 使用 `style` 能够获取许多inline元素的style, 而这些内容不会显示在.css文件中.

8. 由于很多style相互冲突, 会互相覆盖, 而程序员可以使用 `window.getComputedStyle()` 去得到最后将显示的style.

9. `classList` 被设计用于添加.css文件中设置的关于 *class* 的属性.
```js
// origin class -- border
let h2 = document.querySelector('h2');
h2.classList.add('color');      // class -- border color
h2.classList.remove('border');  // class -- color
h2.classList.toggle('color');   // class -- color(closed)
h2.classList.toggle('color');   // class -- color(on)
```
10. `parentElement`, `children`, `previousSibling`, `previousElementSibling`, `nextSibling` 和 `nextElementSibling` 都是页面中访问各种元素的方式
11. 首先可以使用 `createElement` 创建新元素, 然后使用 `append`, `appendChild` 或 `insertAdjacentElement` 去将新元素放到指定的位置.
12. 使用 `remove()` 去删除元素, 或者在父元素中使用 `removeChild()` 去移除其子元素.
13. **Event** -- 用来响应用户的操作, 比如"单击", "键盘按键"等.
* inline 事件 *(不建议使用)*
```html
<!-- `on[event]="js command"` -->
<button onclick="alter('click me')">Click</button>
```
* 设置属性
> 将会将类似于 `onclick=function()` 中函数定义的功能赋给某个元素作为其响应, 但是这样的方法可能会覆盖之前定义的响应方法.
```js
btn.onclick = function () { ... }
```
* addEventListener(事件监听) *(建议使用)*
> 1. 并不是设置属性, 所以某一个元素可能可以对应多种响应事件, 比如一个按钮在"鼠标悬浮"和"点击"的时候分别有不同的表现.
> 2. 有其他可选的参数, 比如 `addEventListener('click', function, {once: true})` 只会使得该方法只会在第一次点击的时候响应, 之后便失效.
```js
btn.addEventListener('click', function(){ ... });
```
14. `e.preventDefault` 能够终止默认的响应方法, 比如 form 会自动提交, 导致页面跳转.
```js
// After submitting the form, the page will not change.
form.addEventListener('submit', function(e){
    e.preventDefault();
})
```
15. **Event Bubbling** -- 嵌套的响应事件会传递给其父元素, 比如父元素和子元素都定义了`click`, 那么点击子元素的时候也相当于点击了父元素, 那么就会调用两次响应.
> 使用 `e.stopPropagation()` 去制止该行为的发生.
```html
<!-- if click the button -->
<!-- button click & div click -->
<div onclick="alert('div click')">
    <button onclick="alert('button click')">Click Me</button>
</div>
```
16. **Event Delegation** -- 可以通过 `createElement()` 去添加新的元素, 但是新的元素并没有加上事件监听. 在这种情况下, 可以使用 `e.target` 去给新加的元素加上相同的事件监听.

---

## S27: Async JavaScript

###### Code for Async
- [Promise](./JavaScript/promise.js)

###### Notes
1. **Call Stack** -- JS的一个非常重要的机制, 用于追踪调用过的多个函数如何按顺序执行.

2. **Single Thread** -- JS每次都只能处理一行代码, 不能并行处理.
> 但是, 异步是通过浏览器实现的. 浏览器能够使用 **Web APIs** 去让函数在后台执行, 而不用JS来干涉. JS的call stack将会识别这些API, 然后将异步函数或操作交由浏览器负责. 一旦浏览器完成了某个异步操作, 会重新以 **callback(回调函数)** 放入call stack, 等待JS调用. 从用户的角度来看, 好像JS一次性在做多个事情.

3. **Promise** -- 代表了未来将要发生的事件，用来传递异步操作的消息. 只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态. 其有三种状态: (1) pending(等待); (2) fulfilled(完成); (3) rejected(失败). Promise 对象的状态改变，只有两种可能：从 Pending 变为 Resolved 和从 Pending 变为 Rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。就算改变已经发生了，你再对 Promise 对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的.
> 缺点: 
> 1. 无法取消 Promise，一旦新建它就会立即执行，无法中途取消.
> 2. 如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部.
> 3. 当处于 Pending 状态时，无法得知目前进展到哪一个阶段.
```js
// 构造函数包含一个参数和一个带有 resolve（解析）和 reject（拒绝）两个参数的回调。
// 在回调中执行一些操作（例如异步），如果一切都正常，则调用 resolve，否则调用 reject
let res = new Promise((resolve, reject) => {
    ...
});
``` 
4. 对于已经实例化过的 promise 对象可以调用 promise.then() 方法，传递 resolve 方法作为回调; 调用 promise.catch() 方法, 传递 rejected 方法作为回调.
```js
res
.then(function(info){
    // info 是 res 的 resolve 中的参数
})
.catch(function(info){
    // info 是 res 的 rejected 中的参数
})
```

6. Promise中可以使用多个`.then`来按照逻辑顺序处理多个异步程序
```js
res
.then(() => {
    // 如果res resolved, 则执行
})
.then(() => {
    // 等待上一个then中的promise返回resolved, 则执行
})
.catch(() => {
    // 上述then中任意一个出问题都会被捕捉到
})
```

7. `async` 关键字
> * 异步函数的返回为一个记录 Promise 状态的字典: {status: value}
> * 如果异步函数返回一个可用数据, 那么会被设置为调用后 resolved 的结果;
> * 如果异步函数抛出一个错误, 那么该数据会被设置为调用后 rejected 的结果.
> ```js
> async function hello() {
>     return 'Hey guy!';
> }
> hello();  // Promise {<resolved>: 'Hey guy!'}
> 
> async function uhOh() {
>     throw 'oh no!';
> }
> uhOh();   // Promise {<rejected>: 'oh no!'}
> ```

8. `await` 关键字
> * 只能在异步函数中使用 `await`;
> * `await` 会暂停整个函数的执行, 直到该函数正常执行完.
> ```js
> async function func () {
>     await someFuncWhichReturnPromise();
> }
> ```

9. 由于在异步函数中使用`await`并不带有错误输出, 如果等待的函数执行失败, 则会直接退出函数. 为了捕获错误, 可以使用 `try-catch`.
```js
function requestURL(url) {
    return new Promise((resolve, reject) => {
        let delay = Math.round(Math.random()*1000)+3000;
        setTimeout(()=>{
            if(delay<3500){
                resolve(`${url} finished...`);
            }
            else{
                reject("Timeout!");
            }
        }, delay);
    })
}

async function func(){
    try{
        let data1 = await requestURL("/page1");
        console.log(data1);

        let data2 = await requestURL("/page2");
        console.log(data2);
    } catch(e) {
        console.log(e);
    }
}

// if delay>=3500, console will show "Timeout!", which means `e` == "Timeout!"(content in `reject()`)
```

---

## S28: AJAX

###### Code for AJAX
- [XML HTTP Request](./JavaScript/XMLHttpRequest.js)
- [fetch](./JavaScript/fetch.js)
- [axios](./JavaScript/axios.js)

###### Proj
- [TV Show Search APP]()

###### Notes
1. 基础概念和名词解释:
> * AJAX -- Asynchronous Javascript And XML, 异步JS和XML文件
> * API -- Application Programming Interface, 编程接口
> * JSON -- JavaScript Object Notation, 一种数据格式

2. JSON 基于 JS, 但是两者有很大不同. 比如在JSON中, 没有JS中的`undefine`, 只有`null`, 并且所有的键都需要使用双引号括起来.
```json
{
    "name": "tom",
    "age" : 18,
    "act" : null,
    "stu" : true
}
```
```js
const parseData = JSON.parse(json);     // JSON -> JS
const jsonData = JSON.stringify(js);    // JS -> JSON
```

3. **HTTP** 是应用层协议, 基于 **TCP/IP协议**, 用于Web上的数据传输.
> * **Status code** -- 状态码用于反映HTTP发出请求的响应情况, 可以分为下面五种类型:
>   * Informational responses (100–199)
>   * Successful responses (200–299)
>   * Redirects (300–399)
>   * Client errors (400–499)
>   * Server errors (500–599)
> * **Body** -- HTTP body 是HTTP传输的主要信息内容.
> * **Header** -- HTTP headers 是客户端和服务器传输额外信息的部分. 主要包括各种与内容无关的信息, 比如"状态码", "请求时间"等.

4. `XMLHttpRequest()` (XHR) 是最普通的一种通过JS发起请求和得到响应的方法, 但是存在许多问题:
> 1. 不支持 `promise`, 多个请求之间如果有先后关系的话，就会出现回调地狱
> 2. 语法复杂

5. `fetch()` 是JS种新定义的一种发起请求和得到响应的方式, 基于promise进行异步控制!
> 缺点: 在收到 header 后就会判断传输成功, promise就会返回 resolve, 但是此时 body 还没有传递完成, 可能会出错.

6. `axios` 是 `fetch` 的升级版, 更加优秀.

---

## S29: OOP

###### Code for OOP
- [create OOP](./JavaScript/createOOP.js)
- [super & extends](./JavaScript/super_extends.js)

###### Notes
1. **Prototype** 原型是一系列能够被所有类对象访问的属性和方法. 比如所有 String 类的实例对象都有 `length` 的属性. 用户也能定义新的方法和属性, 但是这些一般都只能被特定的对象访问.
> 在每个类中, 有个叫做`__proto__`的属性, 里面保存的是该类所有实例共用的方法和属性.

2. **Factory Function**
```js
function colorMaker(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
        let { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    };
    color.hex = function () {
        let { r, g, b } = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };

    return color;
}
```
> ```js
> let first = colorMaker(0,0,0).rgb;
> let second = colorMaker(1,1,1).rgb;
> console.log(first === second);    // false
> ```
> > **问题**: 每个对象都会拥有该定义中方法和属性的一个拷贝, 比如 `colorMaker(0,0,0).rgb()` &NotEqual; `colorMaker(255,255,255).rgb()`. 换句话说, 这些方法和属性都不是定义在类的 `__proto__` 中.

3. **Constructor Function**
```js
function colorMaker(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

colorMaker.prototype.rgb = function () {
    let { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
}
colorMaker.prototype.hex = function () {
    let { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// when you use `colorMaker`, remeber to use key word -- `new`.
```
> 在这种定义下, 所有对象会共享相同的方法. 换言之, 方法存储在 `__proto__` 中.
> ```js
> let first = colorMaker(0,0,0).rgb;
> let second = colorMaker(1,1,1).rgb;
> console.log(first === second);    // true
> ```
> **问题**: 需要分开定义属性和方法.


4. **Class**
> 将包装属性和方法到同一个类内!
> > `constructor()` 将会在执行`new`操作后自动运行, 类似 Python 中的 `__init__(self)`.
```js
class colorMaker {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        // this.hsl();  // You can run this function immediately after new an object. 
                        // And you can access `this.h` in following functions.
    }
    rgb() {
        let { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    }
    hex() {
        let { r, g, b } = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    hsl() {
        this.h = 100;
    }
}
```
5. **Extends & Super**
> extends -- 会从父类中继承公共的属性和方法.<br>
> super -- 继承父类中的某一些属性, 然后可以增加自己独特的属性.
```js
class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    }
}

class Cat extends Pet {
    constructor(name, age, liveLeft = 9) {
        // use `super` to inherit original properties and add some new properties.
        super(name, age);
        this.liveLeft = liveLeft;
    }
    meow() {
        return `MeoWWWWWWW!`
    }
}

class Dog extends Pet {
    bark() {
        return `WOOOOOOF!!`
    }
    // this new function will overwrite the old version `eat()`
    eat() {
        return 'Dog is eating!';
    }
}
```

---

## S30: Terminal

| Command |                  Function                   |
| :-----: | :-----------------------------------------: |
|  `ls`   |    List the content of your current dir     |
|  `pwd`  |           Print working directory           |
| `mkdir` |               Make directory                |
|  `cd`   |             Changing directory              |
| `touch` |                 Make a file                 |
|  `rm`   | Delete files (`-r`: recursive; `-f`: force) |
|  `man`  |         Manuscript certain command          |



###### Notes
1. **Terminal** -- 使用文本输入输出操控计算机的接口.
2. **Shell** -- 运行在终端上的程序.
3. **Bash** -- 一种常见的Shell.
> Windows: MS DOS   |   Mac/Linux: Bash

---

## S31-33: Node.js

###### Code for Node.js
- [exports](./NodeJS/exports/)
- [express](./NodeJS/firstApp/)

###### Proj
- [Language Detector](./Proj/LanguageDetector/)

###### Notes
1. **Node.js** -- 是一种在服务器执行JS的运行环境.
> * (&cross;)**Node** 不能直接访问客户端的内容, 如窗口, 文档, DOM等.
> * (&check;)**Node** 有许多内置的模块, 这些模块是浏览器没有拥有的. 这些模块帮助我们操控操作系统, 读写文件等.

2. **NPM** -- Node Package Manager的缩写.
> * 使用 `npm install` 将会把模块安装到局部, 只能通过设置完备的路径才能访问;
> * 使用 `npm install -g` 将会把模块安装到全局, 可以在任何文件中访问.

3. **process.argv** -- 返回命令行中的各种参数.
> 第0个参数是 `process.execPath`, 其指明了 Node.js 的相关路径. 第1个参数是被执行的文件路径. 剩下的元素是其他附加的参数. 
> ```js
> // app.js file
> const args = process.argv.slice(2);   // get the arguments from the third params
> for(let arg of args){
>   console.log("Hello, "+arg);
> };
> ```
> ```bash
> # bash file
> node app.js tom jerry
> # Hello, tom
> # Hello, jerry
> ```

4. **fs** -- Node.js中文件系统模块, 能帮助我们创建, 删除, 读写文件. 许多操作有两种模式: 同步(会阻塞进程); 异步(不会阻塞进程).
> 使用`require`来达到引入模块的作用, 就像 Python 中的 `import`.
```js
const fs = require('fs');
const dirName = process.argv[2] || 'Project';

try {
    fs.mkdirSync(dirName);
    fs.writeFileSync(`${dirName}/index.css`);
} catch(e) {
    console.log(e);
}
```

5. **exports** -- 将某个文件中定义好的各种方法, 类, 属性设置为可以由别的文件访问. [[More details]](./NodeJS/exports/).

6. `package.json` 是非常重要的一个文件, 它记录了该环境下各种模块, 库和依赖等的版本信息, 还有各种类似于作者, 创建时间, 版本等的信息.
> ```bash
> # 使用init就可以初始化一个无依赖的基础环境
> node init
> ```

7. 可以使用 `npm install` 去安装需要的库和依赖.
8. **Express** -- 一个非常优秀的服务器框架. [[More Details]](./NodeJS/firstApp/index.js).
> 库 Vs 框架
> * **库**: 库的主管方是程序员. 库只会提供各种函数, 而何时使用, 需要用户自己决定.
> * **框架**: 框架的主管方是框架. 框架可以包含各种库, 然后框架通过调用多种函数, 实现特定的功能, 而程序员只需要在合适的位置和时机插入相应的代码即可.
> > 库相当于CPU, 显卡, 存储条等部件, 用户不用知道这些部件内部的原理, 但是仍然需要把他们拼起来成为电脑才能使用; 框架相当于一台整机, CPU, 显卡, 内存条都安装在合适的位置, 用户可以直接使用.

9. 常见的 Express 函数
* `listen(port, callback)` -- 给某个端口添加监听, 当该端口传来请求时, 可以捕获.
* `use()` -- 类似于 C++ 中的`#define`, 可以给整个项目宏定义一些参数, 可以被所有的内容访问到.
* route 路由 <u>(`req` 是经过 http 翻译成的数据对象 object)</u>
  * `get(path, (req, res)=>{})` -- 如果 `path` 发来请求, 将会通过 `res.send()` 来发送 `res`. <u>(*可以使用`:xxx`来指明任意的目录, 如 `/cat/:sub` 可以匹配以 `/cat/name`, `/cat/age/` 等, 但不能匹配 `/cat/name/meow`*)</u>
  * `post(path, (req, res)=>{})` 与 `get()` 不同, 这表明 Express 中对于HTTP的请求方式是有区分的, 如 GET / POST

10.  `nodemon file` 可以在更改代码的时候, 动态的自动重启服务器.

---

## S34: EJS for Dynamic HTML

###### Notes
* **EJS** 是 Embedded JavaScript 的简称, 是一套简单的模板语言，利用普通的 JavaScript 代码生成 HTML 页面. [[More details]](./EJS/Templating/).

* 基本语法
> * `<%= js expression %>` -- 显示JS代码的运行结果;
> * `<% js command %>` 执行JS的代码, 但是并不会显示结果, 一般用于执行循环和条件语句;


* 几种模型结构的介绍
> * MVC
>   * Model -- 用于操控数据部分, 比如数据库
>   * View -- 用于实现显示的界面, 如web page
>   * Controller -- 用于实现逻辑控制
>   * 各个模块通信是单向的
> <img src="https://upload-images.jianshu.io/upload_images/15226743-86c2d4be3b5833c3.png?imageMogr2/auto-orient/strip|imageView2/2/w/601/format/webp">
> * MVP
>   * 各部分之间的通信，都是双向的。
>   * View 与 Model 不发生联系，都通过 Presenter 传递。
>   * View 非常薄，不部署任何业务逻辑，称为"被动视图"（Passive View），即没有任何主动性，而 Presenter非常厚，所有逻辑都部署在那里。
> <img src="https://upload-images.jianshu.io/upload_images/15226743-947a7c01f8199148.png?imageMogr2/auto-orient/strip|imageView2/2/w/537/format/webp">
> * MVVM
>   * 采用双向绑定(data-binding): View的变动，自动反映在View Model，反之亦然. 这样开发者就不用处理接收事件和View更新的工作，框架已经帮你做好了.
> <img src="https://upload-images.jianshu.io/upload_images/15226743-1b2adc4a66e12c6e.png?imageMogr2/auto-orient/strip|imageView2/2/w/715/format/webp">

