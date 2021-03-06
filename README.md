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
[S31-33: Node.js](#s31-33-nodejs)
[S34: EJS for Dynamic HTML](#s34-ejs-for-dynamic-html)
[S35: Defining RESTful Routes](#s35-defining-restful-routes)
[S36: MongoDB](#s36-mongodb)
[S37: Mongoose](#s37-mongoose)
[S38: Mongoose+Express](#s38-expressmongoose)
[S39-59: YelpCamp](#s39-59-yelpcamp)


## S1: Course Orientation
---
## S2: An Intro to Web Development
### 什么是HTML, CSS 以及 Javascript?

> HTML -- <i>就像句子中的名词,主要描述了一个网页中的主要内容.</i><br>
> CSS -- <i>就像句子中的形容词,用于将内容呈现的更加美观.</i><br>
> JS -- <i>类似句子中的动词,用于控制各种逻辑的实现.</i>

### 前端和后端是什么?

> 前端主要关注于 <i><b>客户端</b></i>, 实现网页内容的呈现<br>
> 后端主要关注于 <i><b>服务器</b></i>, 实现浏览器与服务器之间的通信

### 什么是客户端和服务器?
> * 客户端: 请求服务器服务的终端, 一般设备如个人电脑.
> * 服务器: 响应客户端请求的终端.

### Internet和Web?
> * Internet是一种通过**TCP/IP**协议实现全球网络互连的网络结构, 可以视为是网络的网络.
> * Web是一种信息系统, 用于文档和其他资源在Internet中传递. 与Internet基于TCP/IP不同, Web基于**HTTP**协议实现通信.

**注意**: Internet只能传递HTML, CSS, JS和其他代码. 而浏览器能够帮助翻译这些代码并渲染出好看的网页.

---
## S3-5: HTML
<a href="https://developer.mozilla.org/en-US/docs/Web/Reference">MDN</a> 是一个非常有用的网站, 包含了各种常见的HTML元素和使用方法.

### Code
- [header, paragraph, list, img, anchor](./HTML/HTML0.html)
- [block vs inline](./HTML/HTML1.html)
- [table](./HTML/HTML2.html)
- [form](HTML/HTML3.html)

### 基础知识
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
### Code
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

### Proj
- [PriceTable](./Proj/PriceTable)
- [Museum of Candy](./Proj/Museum_of_Candy)


### 基础知识
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

- [Basic syntax](./JavaScript/todo.js)
- [Callbacks & Array Methods](./JavaScript/callbacks.js)

### 基础知识
1. JS 的数据类型如下: `bigint`, `string`, `boolean`, `null`, `number`, `undefined` 和 `symbol`.

2. JS 的代码在 HTML 中可标记在 `<script></script>` 中, 而该标签可以放在 head 或者 body 中, 既可以直接在内部写入 JS 代码, 也可以设置 `src` 属性, 索引到某个文件

3. Console, Alert & Prompt
> * windows.alert() -- 用于在网页中弹出一个警告框
> * document.write() -- 将内容写到HTML文件中, 并覆盖原有的HTML
> * console.log()   -- 在控制台显示
> * windows.prompt() -- 弹出一个提示框, 可以让用户输入内容
```js
console.log("I am a log")   // I am a log
console.error('Error!')
console.warn('Warning!')

alert('Alert in the web page')

let num = prompt("Enter a number")
```

4. 被认为是 False 的数值 -- false, 0, "", null, undefined, NaN

### 数据类型
1. `NaN` 是一个数值, 代表了一个无法计算得到的数字. 
 > NaN 与任何值都不相等, 包括其自己. 唯一能判断一个数是不是 NaN 的方法是使用 `isNaN()`.
 ```js
 0/0 // NaN
 1+NaN
 ```
2. Null & Undefined
 > * null -- 缺省值
 > * undefined -- 未赋值
 > ```js
 > let userName = null;  // null
 > let a;                // undefined
 > ```

3. 变量赋值
 ```js
 let Name = Value;       // normal
 const Name = Unchanged; // cannot be changed
 var Name = Value;       // old version, not recommend!
 ```

### String 
1. ***字符串是不可变的,如果对字符串的某个索引赋值，不会有任何错误，但是，也没有任何效果***
2. 常见操作
```js
let name = "Ke-Hsin";
name[1]         // "e"
name+"Tang"     // Ke-HsinTang
name[1] = 'a'   // name: "Ke-Hsin"

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

### Array 
1. *注意 **in-place** 方法会直接改变原数据*

2. 考虑到 `引用` 和 `地址` 的区别, 在对两个 Array 进行判断的时候, 需要注意. **一般不建议直接判断两个 Array 是否相同**.
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

3. `Const Array` 代表该数组指向某一个地址, 可以在该地址上做任意操作(如增删数据), 但是不允许更改指向(即指向另一个数组).
```js
const num = [1,2,3];
num.push(4);    // it's ok, num=[1,2,3,4], no address is changed.
num = [5,6];    // error! [5,6] has a different address, you cannot assign an new address to a const.
```

4. 常用操作
> * 尾部操作: push/pop & 头部操作: shift/unshift
> ```js
> let num = [1,2]
> num.push(3,4);  // [1,2,3,4], in-place
> num.pop();      // [1,2,3], in-place
> num.shift();    // [2,3], in-place
> num.unshift(1); // [1,2,3], in-place
> ```
> * 连接: concat & 判断: includes & 搜索: indexOf & 逆序: reverse
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
> * 切片: slice & 删除/替换: splice
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
> * 排序
> ```js
> let num = [100,5,23,7,0];
> num.sort();   // [0,5,7,23,100], in-place
> ```
> * 按指定方式合并输出: join
> ```js
> let data = [1,2,3]
> data.join('-')        // '1-2-3'
> ```

### Object
1. 存储 `键-值` 对, 类似Python中的字典. 
2. ***除了 symbol 外, 键都会被以 string 的形式存储***
```js
// let obj = { key: value }
let stu = {name:"tom", age:18, motto:"my work is in my heart", favorate:['bike', 'game']}

let name = stu["name"]; // "tom"
let motto = stu[motto]; // error
let age = stu.age       // 18
delete stu.age
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

### Map 和 Set
1. Map 
   1. 是一组键值对的结构，具有极快的查找速度, 类似于 C++ 中的哈希表.
   2. 常见操作
     ```js
     let m = new Map([['tom', 89], ['jack', 95]])
     m.set('mary', 100)
     m.get('tom')    // 89
     m.has('Adam')   // false
     m.delete('jack')
     m.get('jack')   // undefined
     ``` 
   3. 当对某一个键不断赋值, 则后面的值会覆盖前面的值
     
2. Set
   1. 类似数学中的集合, 可以存储各种类型元素, 但是不能重复, 而且集合中元素是**无序**的, 不能直接用下标访问
   2. 常见操作
     ```js
     let s = new Set([1, 2, 2, "2"])     // s = [1,2,"2"]
     s.add(3)                            // s = [1,2,"2",3]
     s.delete("2")                       // s = [1,2,3]
     ```

### 双等号 Vs 三等号
> * ==
>   * 检查值是否相同, 但是并不检查种类是否相同. 相当于先进行类型转换, 再比较.
> * ===
>   * 检查值和种类.
> ```js
> 0 == false;           // true
> null == undefined;    // true
> 1 == '1';             // true
> 
> 0 === false;          // false
> 1 === '1';            // false
> NaN === NaN;          // false
> ```

### 遍历
 1. `for(value of iterable)` 用于遍历 Array, map 和 set, 除了对象 Object.
 2. `for(key in objects)` 用于遍历对象, 获得的是每个pair的键.
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
 3. `forEach(callback)` 可以类似于 Python 中 enumerate, 得到索引和值(或键和值)
 ```js
 let a = ['A', 'B', 'C']
 let m = new Map([['tom', 89], ['jack', 95]])
 let s = new Set([1,2])

 a.forEach(function(ele, idx, arr) {
     console.log(`${ele}, index=${idx}.`)
 })

 m.forEach(function(val, key, map){
     console.log(`${key}-${val}`)
 })

 s.forEach(function(ele, sameEle, set) {
     console.log(ele)
 })
 ```

### 函数
1. 定义函数的三种方法
  * 赋予函数名, 与其他编程语言保持一致
  * 将匿名函数赋值给某个引用
  * 箭头函数
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

2. `arguments` 关键字可以帮助在函数内部访问所有传入的参数
```js
function a(x){
  for(let i=0; i<arguments.length; i++)
      console.log(arguments[i])
}

a(1,2,3)    // 1, 2, 3
a(5)        // 5
```
3. 默认参数
```js
function f(a, b=1){
  console.log(b)
}
f(1, 2) // 2
f(1)    // 1
```

4. 变量提升 -- JS会自动把用`var`定义的变量声明提前(但是不会提升变量赋值, 如果一个变量先使用再赋值, 那么提升时赋值为`undefined`)
```js
// 下面文件执行时, 输出结果为 undefined, 10, 99
var a = 99
f()
console.log(a)  // 会在f()执行完成后执行, 打印全局变量99
function f(){
  console.log(a)  // 会将局部变量a的声明提前, 此时a=undefined
  var a = 10
  console.log(a)  // 打印局部变量a=10
}
```

5. `let` 和 `var`
* `let`赋予了JS块级作用域
```js
{
   let a = 10
}
console.log(a)  // error
{
   var b = 10
}
console.log(b)  // 10
```
* `let`没有变量提升, 所以必须先定义, 再使用
* `let`不能重复赋值, 如`let a=10`之后不能再`let a=xxx`
6. 作用域
* 全局作用域 -- 不在任何函数内定义的变量就具有全局作用域. 在JS中的全局指的是全局对象`window`, 所有定义的变量和函数都是定义在`window`作用域下.
> 在自定义的库中, 为了防止`window`中出现同名冲突, 常常会自己在文件开头设定一个空对象, 然后所有变量和方法都加上自己定义的对象名
* 局部作用域

 7. 上下文语义 -- 在嵌套函数中, 内层函数可以不需要外层函数传递参数, 就可以直接访问参数
 ```js
 function f1(){
     let a = 10
     function f2(){
         console.log(a)
     }
 }
 f1()    // 10, 因为f2可以通过上下文语义访问到未传递的参数
 ```

###  传播
```js
function show(a, b, ...res){
    console.log(a)
    console.log(b)
    console.log(res)
}
show(1,2,3,4,5) // 1, 2, [3,4,5]
show(6)         // 6, undefined, []

let numbers = [1,56,203,42];
Math.max(...numbers);   // 203
console.log(...'cat');  // 'c', 'a', 't'

let arr1 = ['CHN', 'USA'];
let arr2 = ['UK'];
let arr = [...arr1, ...arr2];   // ['CHN', 'USA', 'UK']

let info1 = {name:'tom', dep:'cs'};
let info2 = {age:18, dep:'ece'};
// 有相同属性时, 后定义的会覆盖前者
let stu1 = {...info1, ...info2, sex:'man'}; // {name:'tom', age:18, dep:'ece', sex:'man'}
let stu2 = {...info2, ...info1, sex:'man'}; // {name:'tom', age:18, dep:'cs', sex:'man'}
```

### 解构赋值
* 使用`[]`获取Array, 使用`{}`获取Object
* 可以使用`[,,c]`去跳过前两个元素
* 可以使用 **传播** 去获取剩余元素
* 可以使用`originName: newName`去用新的变量名保存元素
* 在函数形参中可以使用该方法设置传入的参数
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

// tom is 18 years old!
function show({name, age}){
    console.log(`${name} is ${age} years old!`)
}
show(person)

// ['A', ['B', 'C']]
let alpha = ['A', ['B', 'C']]
const [a, [b, c]] = alpha
```

### 方法
* 在对象中, 除了可以定义属性, 还可以定义一些函数, 而这些函数就成为对象的方法.
* **`this`指针**
    1. 在调用的时候一定要使用`object.method()`, 因为方法中的`this`会指向调用它的对象
    ```js
    function getAge(){
        let now = new Data().getFullYear()
        return now - this.birth
    }

    let person = {
        name: 'tom',
        birth: 2000,
        getAge: getAge  // 注意, 此处不能写成getAge()!!
    }

    person.getAge()     // 21, 因为this指向了调用对象, 即person
    getAge()            // NaN, 因为this指向了调用对象, 即window
    ```
    2. 在函数中套一个函数, 那么嵌套函数的`this`仍然是指向`window`, 只有最外层的是指向object
    ```js
    let xiaoming = {
        name: '小明',
        birth: 1990,
        age: function () {
            function getAgeFromBirth() {
                var y = new Date().getFullYear();
                return y - this.birth;
            }
            return getAgeFromBirth();
        }
    };
    xiaoming.age()  // NaN
    ```
    3. 解决嵌套问题的方法就是在每个嵌套函数里都事先捕获`this`
    ```js
    let xiaoming = {
        name: '小明',
        birth: 1990,
        age: function () {
            let that = this
            function getAgeFromBirth() {
                var y = new Date().getFullYear();
                return y - that.birth;
            }
            return getAgeFromBirth();
        }
    };
    ```
* `apply`和`call`
  * 通过调用`apply`和`call`, 可以指定函数中`this`的指向, 两者的区别在于: `apply`的参数以Array形式传入, `call`的要顺序传入
  ```js
    function show(a, b, c){
        return `${this.name} has ${a}, ${b}, ${c}`
    }

    let person = {
        name: 'tom',
        birth: 2000,
        show: show
    }

    getAge.apply(person, [1,2,3])
    getAge.call(person,1,2,3)
  ```

### 高级函数
1. 函数的参数能够接收别的函数, 也能够返回函数
2. `map()`和`reduce()`
   1. `map(function)`用于将某一个函数作用于调用映射的Array上, 使得每个元素都经过映射成为新的值
   ```js
   function square(x) {
       return x*x;
   }
   let data = [1,2,3]
   data.map(square)     // [1,4,9]
   ```
   2. `reduce(function)`用于将结果继续和序列的下一个元素做累积计算, 最终将一个序列变为一个值, 具体的逻辑: `[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)`
   ```js
   let data = [1,2,3,4]
   data.reduce((x, y) => {
       return x*y
   })   // (((1*2)*3)*4)
   ```
3. `filter(function)` 用于根据 function 返回的 boolean, 保留 true 的, 删去 false 的
> filter的回调函数可以有三个参数, 代表(value, index, self)
```js
function selectEven(num){ return num%2==0 }
let nums = [1,2,3,4]
nums.filter(selectEven) // 挑出偶数
```
4. `sort(function)`完成对元素的排列, 默认情况下将元素都转为**String**再进行比较(**如果要排列数字, 请自行设计回调函数**). 如果要设计回调函数, 那么有两个参数(x, y)分别代表从左至右任意两个相邻的元素, 返回值为负数则x < y; 返回值为0则x == y; 返回值为正数则x > y.
```js
let nums = [1,20,10,5]
nums.sort((x, y)=>{
    if(x<y)         return -1;
    else if(x==y)   return 0;
    else            return 1;
})  // [1,5,10,20]

// nums.sort((x, y) => x-y) 即可实现升序排列
```
5. 闭包 -- 通过返回函数, 实现特定功能
    * 返回闭包时牢记的一点就是：**返回函数不要引用任何循环变量，或者后续会发生变化的变量**
    ```js
    // 最后返回的都是16, 因为返回函数时并没有立刻执行
    // 相当于arr中存的函数都是返回`i*i`而非`1*1`或`2*2`
    // 当调用的时候, 去内存中查找, i=4, 所以都返回16
    function count() {
        var arr = [];
        for (var i=1; i<=3; i++) {
            arr.push(function () {
                return i * i;
            });
        }
        return arr;
    }

    var results = count();
    // 并未执行
    var f1 = results[0];
    var f2 = results[1];
    var f3 = results[2];

    f1();   // 16
    f2();   // 16
    f3();   // 16
    ```
    * 闭包可以帮助实现在没有`private`关键字的情况下保护私有变量
    ```js
    // x类似于private变量, 受到了保护
    function create_counter(initial) {
        var x = initial || 0;
        return {
            inc: function () {
                x += 1;
                return x;
            }
        }
    }
    let cnt = create_counter(10)
    cnt.inc()   // 11
    cnt.inc()   // 12
    ```
6. 箭头函数
   * 箭头函数的定义方式有多种, 如只传入一个参数时可以省去参数列表的括号, 又如只有一句执行语句时可以不写return, 也不用大括号
   ```js
   let f1 = x => x*x
   let f2 = (x, y) => x+y
   let f3 = (x) => {
       if(x>0)  return x
       else     return -x
   }
   ```
   * 箭头函数的 `this` 是根据上下文语义决定的, 即指向永远是上一层的调用者
7. generator 生成器
    * 生成器由 `function*` 定义, 使用 `yield` 搭配生成器输出, 并可以搭配 `return` 去终止生成器.
    * 生成器每次都会在`yield`处停止, 等待下一次调用. 而调用的方法是使用`.next()`.
    * 使用`next`会返回一个对象, 包含值和状态, 如果不想判断其状态, 可以使用`for...of...`来迭代其值.
    ```js
    function* nextId(end){
        let i = 1;
        while(i<end){
            yield i;
            i+=1;
        }
        return;
    }
    cnt = nextId(2)
    cnt.next();  // {value: 1, done: false}
    cnt.next();  // {value: 2, done: false}
    cnt.next();  // {value: undefined, done: true}
    ```
       

### try-catch
```js
try{
    // something may be wrong
} catch(e) {
    console.log(e);
    // other warnings or logs
}
```

---

## S24-26: Document Object Model (DOM)

### Code
- [DOM](./JavaScript/DOM.js)
- [Event](./JavaScript/event.js)

### Proj
- [Pokemon](./Proj/Pokemon/)
- [ProductNum](./Proj/ProductNum/)
- [Score Keeper](./Proj/ScoreKeeper/)

### 基础知识
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

### Code
- [Promise](./JavaScript/promise.js)

### 基础知识
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

### Code
- [XML HTTP Request](./JavaScript/XMLHttpRequest.js)
- [fetch](./JavaScript/fetch.js)
- [axios](./JavaScript/axios.js)

### Proj
- [TV Show Search APP]()

### 基础知识
> * AJAX -- Asynchronous Javascript And XML, 异步JS和XML文件
> * API -- Application Programming Interface, 编程接口
> * JSON -- JavaScript Object Notation, 一种数据格式

### JSON 
1. **为了统一解析，JSON的字符串规定必须用双引号""，Object的键也必须用双引号""**
    * number: 与JS的`number`一致
    * boolean: 就是JS的`true`和`false`
    * string: 就是JS的`string`
    * null: 是JS的`null`和`undefined`
    * array: 就是JS的`Array`, 用`[]`表示
    * object: 就是JS的`{...}`
```json
{
    "name": "小明",
    "age": 14,
    "gender": true,
    "height": 1.65,
    "grade": null,
    "middle-school": "XX Middle School",
    "skills": [
        "JavaScript",
        "Java",
        "Python"
    ]
}
```
2. 序列化`stringify`
    1. 将js的内容直接装换成json文件
    2. 可以添加键值, 只筛选想要的
    3. 可以使用函数, 对键值对做处理
    4. 可以直接在js中加入一个`toJASON`的方法, 这样可以直接控制输出
    ```js
    let xiaoming = {
        name: 'xiaoming',
        age: 14,
        gender: true
    }
    function convert(key, value){
        if (typeof value === 'string') {
            return value.toUpperCase();
        }
        return value;
    }
    /*
        {
            "name": "xiaoming",
            "age": 14,
            "gender": true
        }
    */
    let json1 = JSON.stringify(xiaoming)
    /*
        {
            "name": "xiaoming"
        }
    */
    let json2 = JSON.stringify(xiaoming, ['name'])
    /*
        {
            "name": "XIAOMING",
            "age": 14,
            "gender": true
        }
    */
    let json3 = JSON.stringify(xiaoming, convert)

    let tom = {
        name: 'tom',
        age: 14,
        gender: true
        toJSON: function(){
            return {
                "Name": "Tom",
                "Age": this.age
            }
        }
    }
    /*
        {
            "Name": "Tom",
            "Age": 14
        }
    */
    let json4 = JSON.stringify(tom)
    ```
3. 反序列化
    * 用`JSON.parse()`将一个JSON格式的字符串变成一个JavaScript对象
    * 同样可以使用函数, 处理JS对象
    ```js
    let js = JSON.parse({"Name": "tom", "Age": 14}, function (key, value){
        if (typeof value === 'string'){
            return value + '同学'
        }
        return value
    })
    /*
        {
            "Name": "tom同学",
            "Age": 14
        }
    */
    ```

### HTTP
1. *HTTP* 是应用层协议, 基于 *TCP/IP协议*, 用于Web上的数据传输.
> * **Status code** -- 状态码用于反映HTTP发出请求的响应情况, 可以分为下面五种类型:
>   * Informational responses (100–199)
>   * Successful responses (200–299)
>   * Redirects (300–399)
>   * Client errors (400–499)
>   * Server errors (500–599)
> * **Body** -- HTTP body 是HTTP传输的主要信息内容.
> * **Header** -- HTTP headers 是客户端和服务器传输额外信息的部分. 主要包括各种与内容无关的信息, 比如"状态码", "请求时间"等.

2. `XMLHttpRequest()` (XHR) 是最普通的一种通过JS发起请求和得到响应的方法, 但是存在许多问题:
> 1. 不支持 `promise`, 多个请求之间如果有先后关系的话，就会出现回调地狱
> 2. 语法复杂

3. `fetch()` 是JS种新定义的一种发起请求和得到响应的方式, 基于promise进行异步控制!
> 缺点: 在收到 header 后就会判断传输成功, promise就会返回 resolve, 但是此时 body 还没有传递完成, 可能会出错.

4. `axios` 是 `fetch` 的升级版, 更加优秀.

---

## S29: OOP

### Code
- [create OOP](./JavaScript/createOOP.js)
- [super & extends](./JavaScript/super_extends.js)

### 基础知识
**Prototype** 原型是一系列能够被所有类对象访问的属性和方法. 比如所有 String 类的实例对象都有 `length` 的属性. 用户也能定义新的方法和属性, 但是这些一般都只能被特定的对象访问.
> 在每个类中, 有个叫做`__proto__`的属性, 里面保存的是该类所有实例共用的方法和属性.

### 类的构造方法
1. Factory Function
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

2. Constructor Function
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


3. Class
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
### Extends & Super
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

### 常见指令

| Command |                  Function                   |
| :-----: | :-----------------------------------------: |
|  `ls`   |    List the content of your current dir     |
|  `pwd`  |           Print working directory           |
| `mkdir` |               Make directory                |
|  `cd`   |             Changing directory              |
| `touch` |                 Make a file                 |
|  `rm`   | Delete files (`-r`: recursive; `-f`: force) |
|  `man`  |         Manuscript certain command          |



### 基础知识
1. **Terminal** -- 使用文本输入输出操控计算机的接口.
2. **Shell** -- 运行在终端上的程序.
3. **Bash** -- 一种常见的Shell.
> Windows: MS DOS   |   Mac/Linux: Bash

---

## S31-33: Node.js

### Code
- [exports](./NodeJS/exports/)
- [express](./NodeJS/firstApp/)

### Proj
- [Language Detector](./Proj/LanguageDetector/)

### 基础知识
1. Node.js -- 是一种在服务器执行JS的运行环境.
> * (&cross;)**Node** 不能直接访问客户端的内容, 如窗口, 文档, DOM等.
> * (&check;)**Node** 有许多内置的模块, 这些模块是浏览器没有拥有的. 这些模块帮助我们操控操作系统, 读写文件等.

2. NPM -- Node Package Manager的缩写.
> * 使用 `npm install` 将会把模块安装到局部, 只能通过设置完备的路径才能访问;
> * 使用 `npm install -g` 将会把模块安装到全局, 可以在任何文件中访问.

3. `nodemon file` 可以在更改代码的时候, 动态的自动重启服务器.

4. `package.json` 是非常重要的一个文件, 它记录了该环境下各种模块, 库和依赖等的版本信息, 还有各种类似于作者, 创建时间, 版本等的信息.
> ```bash
> # 使用init就可以初始化一个无依赖的基础环境
> node init
> ```

<span style="background-color: black; color: white;">> 更详细的Node.js内容, 请点击</span> <a href="./Nodejs-cookbook.md">这里</a>

---

## S34: EJS for Dynamic HTML

### 基础知识
* **EJS** 是 Embedded JavaScript 的简称, 是一套简单的模板语言，利用普通的 JavaScript 代码生成 HTML 页面. [[More details]](./EJS/Templating/).

### 基本语法
> * `<%= js expression %>` -- 显示JS代码的运行结果;
> * `<% js command %>` 执行JS的代码, 但是并不会显示结果, 一般用于执行循环和条件语句;


### 几种模型结构的介绍
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

## S35: Defining RESTful Routes

### Code
- [处理 request.body](./RESTful/request)
- [RESTful 模拟](./RESTful/RESTful_demo)

### 基础知识
* `GET` Vs `POST`
  * `GET`通过TCP直接把header+body组合成一个TCP包一起发出；而`POST`先发送header，服务器返回100后再发送body，即有两个TCP包
  * 使用`GET`会将各种参数包含在url中，如`www.google.com/search?q=xxx`;而`POST`会将参数包含在表单里，更加安全，如`www.google.com`
  * `GET`可以反复执行，而`POST`会再次提交表单（浏览器可能弹出alert('刷新后需要重新提交表单'))
  * `GET`请求在URL中传送的参数是有长度限制的，而`POST`没有
  * `GET`请求只能进行url编码，而`POST`支持多种编码方式
* 使用`req.body`可以以 *键值对* 的形式获得请求的内容, 但是默认情况下为`undefined`, 因为比如`POST`的`body`可以有多种类型, 如`json`, `urlencode`, `text`等, 只有通过`app.use()`声明解码方式才行.
```js
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.post('/cat', function(req, res) {
    console.log(req.body)
    res.send("POST /cat")
})
```

* REST即表述性状态传递（Representational State Transfer), 是一组架构约束条件和原则, 满足这些约束条件和原则的应用程序或设计就是RESTful.
> 比如对url的约束就是一种RESTful, 针对一个url: `https://www.google.com/search?q=mit`中, `https`和`www`代表了协议, `google.com`是网址, `search?q=mit`是搜索的条件, 返回一个网页.

> 又比如, 在项目中, 我们可以设置如下的规则, 则也是运用了RESTful的理念
> |NAME  | PATH         | VERB   | PURPOSE         |
> |:---: | :---:        | :---:  | :---:           |
> |Index | /comments/id | GET    | 根据id来获取评论  |
> |Create| /comments/id | POST   | 创建一个为id的评论 |
> |Update| /comments/id | PATCH  | 根据id来更新评论  |
> |Delete| /comments/id | DELETE | 根据id来删除评论  |

* `method-override` -- 在HTML中, `form`的提交只有`GET`和`POST`两种方式, 为了模拟`PATCH`, `DELETE`这种操作, 需要使用 express 的一个库, 名叫`method-override`, 可以模拟实现其他的HTTP传输方式. **(其中`form`的 *method* 必须为`POST`)**

---

## S36: MongoDB

### 基础知识
* SQL vs NO-SQL
  * *Structured Query Language* database 是一种**关系型数据库**, 也就是说需要先定义一个二维关系表, 表示数据之间的关系, 然后再进行插入等操作, 类似于 Excel 这样. 常见的数据库有 *MySQL*, *SQL Server*.
  * *Not Olny SQL* database 是一种**非关系型数据库**, 用于超大规模数据的存储. 这些类型的数据存储不需要固定的模式，无需多余操作就可以横向扩展. 常见的数据库有*MongoDB*, *Redis*.

* MEAN &amp; MERN stack
  * MEAN -- MongoDB + Express + Angular + Node.js
  * MERN -- MongoDB + Express + React + Node.js

* BSON
> JSON 存在两个问题: (1)不能保存任意的数据类型; (2)基于readable文本, 读取缓慢, 存储损耗大. 为了解决这些问题, MongoDB 使用 **二进制的JSON** 即 BSON 去存储数据.


<span style="background-color: black; color: white;">> 更详细的MongoDB内容, 请点击</span> <a href="./MongoDB-cookbook.md">这里</a>

---

## S37: Mongoose

### 基础知识
* *Mongoose* 是一种能够让 *Node.js* 与 *MongoDB* 数据库相连接的一种工具

* ORM Vs ODM
  * ORM -- Object Relation Map, 针对 *MySQL* 这样的关系型数据库, 建立起 <u>数据间的关系</u> 和 <u>编程语言中的对象</u> 之间的映射
  * ODM -- Object Document Map, 针对 *MongoDB* 这样的非关系型数据库, 建立起 <u>文档</u> 和 <u>编程语言中的对象</u> 之间的映射

* 模式 (Schema): Mongoose 的一切始于 Schema。每个 schema 都会映射到一个 MongoDB collection ，并定义这个collection里的文档的构成.
```js
  let mongoose = require('mongoose');
  let Schema = mongoose.Schema;

  let blogSchema = new Schema({
    title:  String,     // 定义 MongoDB 中的title对应的类型为String, 下面类似
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
  });
```

* 模型 (Model): 使用如下的语法将特定的模式绑定到指定的模型上, 即相当于 document 是 Model 的一个实例
```js
let Blog = mongoose.model('Blog', blogSchema);
```

### 连接数据库
> 1. `mongoose.connect()`中第一个参数的构成: **[数据库类型]://[地址]:[端口号]/[collectionName]**
> 2. `connect()`返回一个 *Promise*, 可以使用`then()`和`catch()`去捕获
```js
let mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`we're connected!`))
    .catch((e) => console.log(e));
```

* 在数据库中, 以 *MongoDB* 为例, 可以使用如下指令载入文件
```bash
> .load [file]
```

### CRUD
* Create
  * 使用`save()`新建一个document
  ```js
  let Schema = mongoose.Schema;
  let movieSchema = new Schema({
      title: String,
      year: Number
  });
  let Movie = mongoose.model('Movie', movieSchema);
  let ironMan = new Movie({title: "Ironman", year: 2010}) // 此时并未插入数据库
  ironMan.save(); // 此时插入了数据库, 可以使用`db.movieApp.find()`查看
  ```
  * 使用类似 *MongoDB* 语法的`insertMany()`新建document
  ```js
  let Movie = mongoose('Movie', movieSchema);
  Movie.insertMany([{title: "Ironman", year: 2010}]).then(data => console.log(data));
  ```
* Read/Find
  * 与 *MongoDB* 语法类似, 但需要注意, 使用`find()`返回的是一个非常复杂的结构, 使用`find().then(data => ...)`中`data`才是真正想要的内容
  * `find()`返回的是一个list, 即使只有一个document也是一个list
  * `find()`返回的并不是一个 *Promise*, 可以使用`find().exec()`返回一个 *Promise*
  ```js
  Movie.find({title: {$eq: "Ironman"}}).then(data => console.log(data))
  // [ {"title": "Ironman", "year": 2010} ]
  ```
* Update
  * 使用`updateOne(query, update).then(data => ...)`中`data`并不是展示想要的新数据, 而是展示关于修改的信息, 但是内容确实被更改了
  * 使用`findOneAndUpdate(query, update, option, callback).then(data => ...)`中`data`是数据, 但是注意: option默认返回的是旧的数据(查找到的数据), 只有设置`new: true`才会返回新的数据(更改后的数据)
  ```js
  let query = {title: "Ironman"};
  let update = {year: 2012};
  Movie.findOneAndUpdate(query, update, {new: true}).then(data => console.log(data));
  ```
* Delete
  * 使用`deleteOne(query)` 或者 `deleteMany(query)` 进行删除

### Validation & Constrain
  * 通过在设置 *Schema* 的时候, 可以指定 *key* 的数据类型, 同时, 也可以设置一些其他的属性, 如果创建的时候不满足这些属性, 则会报错. 把这一个过程称为 *Validation*, 把这些属性称为 *Constrain*
    ```js
    let schema = new mongoose.Schema({
        // name必须被设置为String, 且自动保存为全小写
        name : {
            type : String,
            required : true,
            lowercase : true
        },
        color : String,
        onSale : {
            type : Boolean,
            default : false
        },
        // 列表
        categories : [String],
        // 嵌套 constrain
        // [arg0, arg1]中arg0是参数, arg1是如果不满足则报错的信息
        qty : {
            online : {
                type : Number,
                default : 0,
                min : [0, "Should be positive or zero"]
            },
            inPerson : {
                type : Number,
                default : 0,
                min : [0, "Should be positive or zero"]
            }
        }
    })
    ```
  * 在 *Update* 的时候, 会出现一个问题: 先前设置的 *Constrain* 并不能继续被使用, 比如 *Constrain* 了价格不能为负数, 但是更新时可以设置为负数. 为了解决这个问题, 需要在**使用 *Update* 的时候设置 *Option***, 即 **`runValidators: true`** 
    ```js
    Collection.findOneAndUpdate(query, update, {runValidators: true})
    ```

### Instance &amp; Static Method

  * 给某个特定的实例设置 *Instance Method*. `schemaName.methods.methodName`
  * 给一整个 *Model* 设置 *Static Method*. `schemaName.statics.methodName`
  * 注意: **一定不要使用箭头函数, 否则this会指向意想不到的位置而非特定的实例**
```js
// 假设定义了一个 productSchema, 然后新建一个叫 Product 的 Model

// 设置 instance method
productSchema.method.change = function () {
    this.name = "bike";
}
// 设置 static method
productSchema.statics.change = function () {
    return this.updateOne({name: "mountainBike"}, {name: "bike"})
}
// 假设 Product 有个实例名叫 mountainBike
// 下面两个语句的功能都是一样的: 将 mountainBike -> bike

// mountainBike.change();  
// Product.change();       
```

### Virtual
    * `schemaName.virtual(Name).get(callback)` 可以利用 *MongoDB* 中的元素设置新的属性等, 但是不会改变 DB 的数据, 相当于 *虚拟* 了一个新的属性
    * `schemaName.virtual(Name).get(callback).set(callback)` 可以让用户通过给 *虚拟* 的属性设置新值, 从而改变 DB 的数据
```js
let personSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
})

let Person = mongoose.model('Person', personSchema);
personSchema.virtual('fullName')
.get(function(){
    return `${this.firstName} ${this.lastName}`;
})
.set(function(name){
    this.firstName = name.substr(0, indexOf(' '));
    this.lastName = name.substr(indexOf(' '));
})

let stu = new Person({firstName: kexin, lastName: tang});
stu.save()
```
```bash
> console.log(stu.fullName);    // kexin tang, 但是DB中并没有该属性
> stu.fullName = "Kexin Tang";  // firstName=Kexin, lastName=Tang
```

### Mongoose 中间件
* 中间件 (也称为pre and post hook) 是执行异步函数期间传递控制权的函数.

* 传递中间件的方法：
    * 当每个中间件调用 *next* 时，前置中间件函数会依次执行
    * 也可以选择返回 *Promise* 或者使用 `async`和`await`

* 基本构造`schema.pre/post('operation', function)`，其中 *operation* 是MongoDB对应的操作，如`findById`, `findOneAndDelete`等。

* 前置中间件 -- 在执行 *operation* 前被调用
```js
let schema = new mongoose.Schema(...);
schema.pre('save', function(..., next) {
    doSomething();
    next();
})
schema.pre('save', function() {
    return doSomething().then(() => next());
})
schema.pre('save', async function() {
    await doSomething();
    await next();
});
```

* 后置中间件 -- 在执行 *operation* 后被调用
```js
schema.post('save', function(doc) {
  console.log('%s has been saved', doc._id);
});
```

* `init`中间件是同步中间件, 所以不能使用 `async`和`await`

* 中间件是定义给Schema的，必须在将Schema绑定到model之前进行设置。

<span style="background-color: black; color: white;">> 更详细的Middleware内容, 请点击</span> <a href="https://mongoosejs.com/docs/middleware.html">此处</a>

---

## [S38: Express+Mongoose](./Mongoose)

---

## [S39-59: YelpCamp](./Yelpcamp)

---

## S40: Middleware

### 基础知识
* Express应用程序本质上是一系列中间件函数调用 ***(中间件是一种函数)***
* 中间件是一种能够 *访问请求(req)*, *访问响应(res)* 以及 *在请求-响应周期内访问next对象* 的一种函数 
*  如果当前的中间件不能终止 *请求-响应周期*, 则需要通过调用 *next()* 将控制权移交, 否则会被持续挂起
```js
var express = require("express");
var app = express();

// 当访问dogs时, 会打印"Hiiiii", 但是网页会一直旋转等待
app.get('/dogs', (req, res) => {
    console.log('Hiiiii');
});

// 当访问cats时, 会打印"Hiiiii", 但是网页不再旋转等待, 因为周期被终结
app.get('/cats', (req, res) => {
    res.send("");
})
```
* 中间件的**定义顺序**非常重要, 先定义的被先执行, *next()* 会针对后定义的中间件
```js
// LOGGED Hello World!
var express = require('express')
var app = express()

app.use((req, res, next) => {
  console.log('LOGGED')
  next()
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000)
```
* 中间件可以更改 *req* 和 *res* 的对象
```js
var express = require('express')
var app = express()

app.use((req, res, next) => {
  req.requestTime = Date.now()
  next()
})

// 由于先执行了上面的中间件, 所以req拥有了requestTime的属性
app.get('/', function (req, res) {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
})

app.listen(3000)
```
* 中间件的调用顺序类似于**递归**, 一般不建议在`next()`的后面写别的语句, 所以一般可以使用`return next()`
```js
// I am the first middleware!!
// I am the second middleware!!
// I am the second end of middleware!!
// I am the first end of middleware!!
const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log('I am the first middleware!!');
    next();
    console.log('I am the first end of middleware!!');
})

app.use((req, res, next) => {
    console.log('I am the seconde middleware!!');
    next();
    console.log('I am the second end of middleware!!');
});
```
* 在`app.METHOD()`中, 第二个参数是 *callback*, 我们可以一次性依顺序传入多个 *callback* 函数, 这样当靠前的函数执行完成, 并 **调用 `next()`** 后, 就可以顺序执行 *callback*.
```js
const verify = (req, res, next) => {
    const {pwd} = req.query;
    if(pwd === 'admin'){
        next();
    }
    else {
        res.send("Password Error!");
    }
}

const func = (req, res) => {
    res.send("ADMIN MODEL");
}

// 只有访问 `/admin?pwd=admin` 才能执行 func
app.get('/admin', verify, func);
```

---

## S42: Express Error

### Error Handler

* Express 的自带错误检测使用 *throw new Error()* 设置 *err* 来抛出错误信息至页面, 但是我们不想让用户看见我们的错误信息来源, 就需要使用自定义的错误检测
```js
// 当访问'/error'时, 会在页面上显示"There are errors!"以及错误追踪信息
app.get('/error', (req, res, next) => {
    throw new Error("There are errors!");
})
```
* 自定义错误检测使用`app.use((err, req, res, next) => {...})` 来响应错误, *throw new Error* 会传递对象给 *err*.
```js
app.get('/error', (req, res, next) => {
    throw new Error("There are errors!");   // 不会被调用
})
app.use((err, req, res, next) => {
    console.log(err.stack); // 可以在命令行显示错误追踪, 而不会更新到页面给用户看
    res.status(500).send("There are errors!");  // 当HTTP状态码为500时, 该信息会显示在页面上
})
```

* 如果在自定义的错误检测时, 想要使用内置的错误检测, 可以使用`next(err)`
> 在`next()`函数中, 如果不传入参数, 则调用下一个 *Middleware*, 如果传入一个参数, 则会调用错误检测
```js
app.get('/error', (req, res, next) => {
    throw new Error("There are errors!");
})
app.use((err, req, res, next) => {
    console.log(err.stack); // 可以在命令行显示错误追踪, 而不会更新到页面给用户看
    next(err);              // 会将 throw 中的内容进行显示
})
```

### Error Class
```js
class AppError extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
    }
}
module.exports = AppError;
```
```js
const AppError = require("./AppError");
// statusCode=401, message="There is no cats!"
app.get('/cat', (req, res, next) => {
    throw new AppError("There is no cats!", 401);
})
// statusCode=500, message="Error"
app.get('/dog', (req, res, next) => {
    dog.woof();
})
app.use((err, req, res, next) => {
    const {status=500, message="Error"} = err;
    res.status(status).send(message);
})
```
* 在 *Express* 的 *Error* 类中, 设定 *status* 会自动赋值给 *err.statusCode* !

### Async Error
#### 方法一
```js
app.get('/', async (req, res, next) => {
    const {id} = req.params;
    const product = await Product.find(id);
    if(!product){
        return next(new AppError("Page Not Found", 404));
    }
    res.render("main", {product});
});
```
在 *async* 函数中, 如果想使用 *throw* 抛出异常, 需要使用`return next(new Error())` !
> * 如果不使用`next()`, 则会出错, 原因在于当你的程序开始执行回调函数时，它原来的栈信息已经丢失
> * 如果不使用`return`, 则`res.render`会出错, 因为会在调用完中间件后继续执行, 而此时 *product* 仍然是 *undefined*, 详见 [Middleware](#s40-middleware)

使用上述的方法时，可以捕获显式错误，但是对于 *隐式错误* 无法处理，如上述例子中可以处理 *product不存在* 的错误，但是无法处理数据库数据读取、存储时出现的错误。

#### 方法二

为了处理各种错误(显式+隐式)，可以**针对所有的async函数使用`try-catch`**
```js
app.get('/', async (req, res, next) => {
    try{
        const {id} = req.params;
        const product = await Product.find(id);
        if(!product){
            return next(new AppError("Page Not Found", 404));
        }
        res.render("main", {product});
    } catch(e) {
        next(e);
    }
});
```

#### 方法三
对每一个函数内部都使用`try-catch`十分繁琐，所以可以新建一个函数`errorHandler()`，将每个`async`函数都用`errorHandler()`包裹起来。
```js
const errorHandler = function(func) {
    return function (req, res, next){
        func(req, res, next).catch(e => next(e));
    }
};

app.get('/', errorHandler(async (req, res, next) => {
    const {id} = req.params;
    const product = await Product.find(id);
    if(!product){
        return next(new AppError("Page Not Found", 404));
    }
    res.render("main", {product});
}));
```

#### 方法四
直接使用 *Express* 自带的库 `express-async-errors`
```js
require("express-async-errors");
```

### Mongoose自带的错误名称
Mongoose中不同类型的错误有着不同名字，比如 *ValidationError*, *CastError*等。我们可以针对不同的错误，进行不同的操作。

```js
app.use((err, req, res, next) => {
    if(err.name === "ValidationError"){
        validationHandler(err);
    }
    else if(err.name === "CastError"){
        castError(err);
    }
    else{
        next(err);
    }
})
```

### [JOI](https://joi.dev/)

JOI 是一个非常强力的错误检测库，可以定义数据所需要满足的条件。在传输数据时，如果不满足这些条件，则会由 JOI 捕获错误。

> * 在客户端，可以通过设置 *Express.js* 中的错误捕获，让用户在浏览器上输入数据时就判断正误，如：用户注册时根据用户密码是否满足正则表达式来控制按键能否起作用。
> * 在服务端，*MongoDB* 自带的错误捕获能够检测不符合数据库规则的数据。
> * 在传输的过程中，也需要有错误检测，以防止绕过客户端，钻服务端的空子，如：客户端规定密码要满足正则表达式，但是服务端无法检测如此复杂的规则，那么就需要在传输过程中设定传输的数据必须满足正则表达式。

---

## S44: Database Relation

### 方法一

该方法直接在Schema中嵌套定义了addresses信息，即相当于在User表中嵌套了一个Address表。

| id(Primary Key) | username |          addresses          |
| :-------------: | :------: | :-------------------------: |
|        0        |   tom    | [Downtown 606, Georgie 111] |
|        1        |  jerry   |         [Mason 100]         |


```js
const Schema = new mongoose.Schema({
    user: String,
    addresses: [{
        _id: {id:false},    // 如果不使用该句，则会给每一个addresses都新建一个_id
        street: String,
        city: String,
        state: String
    }]
})
const User = mongoose.model('User', Schema);
const makeUsers = async () => {
    let user = new User({user: "someName"});
    const addresses = [
        { street: "Greenland 101", city: "NYC", state: "New York"},
        { street: "Springfield", city: "Austin", state: "Texas"}
    ];
    user.addresses.push(addresses)
    await user.save();
}
```

### 方法二

* User Table

| id(Primary Key) | username | addresses |
| :-------------: | :------: | :-------: |
|        0        |   tom    |  [0, 2]   |
|        1        |  jerry   |    [1]    |

* Address Table

| id(Primary key) |   address    |
| :-------------: | :----------: |
|        0        | Downtown 606 |
|        1        |  Mason 100   |
|        2        | Georgie 111  |

在数据库中，只会存储另一张表的ID，而不会存储详细的信息，当需要查询详细信息时，可以调用 `populate` 方法去 *ref* 的model中查找详细信息并放入本表中。

```js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
    name: String,
    price: Number
});
const farmSchema = new Schema({
    name: String,
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }]
});

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model("Farm", farmSchema);

const createProducts = async () => {
    await Product.insertMany([{name: "watermelon", price: 4.99}, {name: "peach", price: 1.99}]);
}

createProducts();   // 此时数据库中已插入两条products信息

const createFarm = async () => {
    const products = Product.find();
    const farm = new Farm({name: "Super Farm"});
    farm.products.push(products);   // 虽然代码中插入的是所有详细信息，但是数据库中只会存储对应的ObejctId
    await farm.save();
}

createFarm();

// {
//     _id: ObjectId(...),
//     name: "Super Farm",
//     products: [ObjectId(...), ObjectId(...)]
// }   
Farm.find().then(farm => console.log(farm));

// {
//     _id: ObjectId(...),
//     name: "Super Farm",
//     products: [{_id: ObjectId(...), name: "watermelon", price: 4.99}, {_id: ObjectId(...), name: "peach", price: 1.99}]
// }   
Farm.find().populate("products").then(farm => console.log(farm));   // 使用populate可以在ref的Model中查找存储的ObjectId对应的详细内容
```

### 方法三

* User Table

| id(Primary Key) | username |
| :-------------: | :------: |
|        0        |   tom    |
|        1        |  jerry   |

* Address Table

| id(Primary key) |   address    | userID(Foreign key) |
| :-------------: | :----------: | :-----------------: |
|        0        | Downtown 606 |          0          |
|        1        |  Mason 100   |          1          |
|        2        | Georgie 111  |          0          |

```js
const userSchema = new Schema({
    username: String
});
const addressSchema = new Schema({
    address: String,
    userID: { type: Schema.Types.ObjectId, ref: "User" }
});

const User = mongoose.model("User", userSchema);
const Address = mongoose.model("Address", addressSchema);

const create = async () => {
    const u = new User({name: "ToM"});
    await u.save();

    const a = new Address({address: "Mason 100"});
    a.userID.push(u);
    await a.save();
};

create();

// {
//     address: "Mason 100",
//     userId: ObjectId(...)
// }
Address.find().then(a => console.log(a));

// {
//     address: "Mason 100",
//     userId: {"ToM"}
// }
Address.find().populate("userID", "username").then(a => console.log(a));
```

### 什么时候使用那一种方法

这是一个复杂的哲&male;学问题，为了回答这个问题，有几条基本的规则需要遵守，详情请点击[这里](https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-3)。


### 删除

由于各个表单之间有联系，删除一个用户后，必须连带删除其地址，这需要使用到Mongoose的Middleware。

```js
const userSchema = new Schema({
    ...
});

// 注意，该中间件定义需要在mongoose.model之前绑定
// 该中间件是POST中间件，即在查询到一个数据之后再执行该中间件
userSchema.post("findOneAndDelete", async (user) => {
    if(user.addresses.length){
        await Address.deleteMany({_id: {$in: user.addresses}});
    }
});

const User = mongoose.model("User", userSchema);

...

const delete = async (id) => {
    // 执行时，会自动调用findOneAndDelete的post中间件
    await User.findOneAndDelete({_id: id});
}
```

---

## S47: Router &amp; Cookie

### Router

在之前的代码中，每次都是将所有的router写在一个文件之中，当遇到大型项目时，这会非常令人头疼：比如要设计一个动物园的网页，每个动物都有 *列表*， *详情*， *修改* 等操作，如果全部堆积在一个文件中，会非常难以管理。

在 *Express* 中，我们可以使用`express.Router()`来管理这些routers。

```
- project
  - app.js
  - routers
    - tiger.js
    - lion.js
    - horse.js
```

比如可以新建一个文件夹，里面的代码是关于各种动物的router，如上所示，假设`tiger.js`中包含了`get('/tiger')`，`get('/tiger/:id')`，`post('/tiger')`等操作；在`lion.js`中同样包含这些操作，那么如何在`index.js`中操控这些routers呢？

* index.js
```js
const express = require("express");
const tigerRouter = require("./routers/tiger");
// 由于访问tigerRouter时每个路由的前缀都应该是`/tiger`，所以第一个参数表明
// 只要是访问了前缀包含`/tiger`的，都将跳转由tigerRouter处理
app.use('/tiger', tigerRouter); 
```

* tiger.js
```js
// 在该路由中，如果想访问`/tiger/:id`，只需要写成`/:id`
// 因为在index.js中会设置固定的前缀为`/tiger`
// 相当于已经在`/tiger`的前缀基础上进行访问
const router = require("express").Router();
router.get('/', (req, res) => {
    res.send("List all tigers");
});
router.get('/:id', (req, res) => {
    res.send("View tiger's info");
});
module.exports = router;
```

将各种不同的router划分层级分散到到不同文件，在index中做最高层次的路由，选择相应的文件，再在该文件中做下一级路由。这样不仅逻辑清晰，更重要的是，可以根据不同的第二级路由做不同的 *Middleware*，如对动物都是类似的功能，但是一旦路由到 *admin* 时，希望加入特殊的权限和 *Middleware*，只需在`admin.js`中设置相应的 *Middleware* 即可。

### Cookie

> 比如说小王今天来参观XX公司，他携带了一张身份证，每次进出公司，只要和保安用身份证登记，即可进出，那么小王的身份证就相当于Cookies信息。

#### 普通cookie

*cookie* 是一种存储在浏览器中的小型数据。比如A用户访问B网站，那么B网站可能保存一些A的信息，如`{主体:深色, 用户名:A, 地理位置:CA-USA}`等，那么当A关闭网页后再次访问B，这些信息会被加载，不需要A再次选择或发送。

```js
const cookieParser = require("cookie-parser");
app.use(cookieParser())

app.get('/animal', (req, res) => {
    res.cookie('name', 'tom');  // 使用res发送cookie
    res.cookie('type', 'cat');
    res.send("Tom cat");
});

app.get('/animal/detail', (req, res) => {
    const {name = 'jerry'} = req.cookies(); // 使用req获取cookies
    res.send(`Hello, ${name}`);
})
```

#### signed cookie
有时候，用户希望将某些信息进行加密，以防止被人从浏览器直接截取或篡改，这样经过加密处理的cookie被称为 *signed cookie*。

> HMAC: Hash-based Message Authentication Code，被常用于加密某些信息，此处便是使用了该种加密算法。

```js
const cookieParser = require("cookie-parser");
app.use(cookieParser("signedCookies")); // 字符串内容任意，加密算法会利用这些字符串内容进行加密

app.get("/encode", (req, res) => {
    res.cookie("pwd", "123456", {signed: true});    // 在设置时需要指定`signed: true`
    res.send("Encode Successfully");
});

app.get("/decode", (req, res) => {
    // req.cookies()并不会包含被加密的信息
    // 在解码时需要指明signedCookies()才能获取加密信息
    res.send(req.signedCookies());  
})
```

---

## S48: Session

*Session* 是另一种记录客户状态的机制，**不同的是 *Cookie* 保存在客户端浏览器中，而 *Session* 保存在服务器上**。客户端浏览器访问服务器的时候，服务器会将一个`sessionId`发送给客户端，这样客户端下次访问时，服务器根据客户端发来的`sessionId`就能判断客户端是谁。**(注:`SessionId`是唯一会发送给客户端的 *Cookies*)**

> 比如说小王今天来参观XX公司，该公司的员工可以直接刷卡进入，不用和保安登记。XX公司一开始给他发了一个“临时参观卡”，编号是`0001`，那么，在小王反复进出这家公司的时候，就不需要再次登记，只需要刷`0001`的卡，就能被识别。但是如果小王明天再来（有效期过了），就需要再次登记一次。

如果说 *Cookie* 机制是通过检查客户身上的“通行证”来确定客户身份的话，那么 *Session* 机制就是通过检查服务器上的“客户明细表”来确认客户身份。 *Session* 相当于程序在服务器上建立的一份客户档案，客户来访的时候只需要查询客户档案表就可以了。

```js
const session = require("express-session");
const express = require("express");
const app = express();

app.use(session({secret: "session"}));  // value of secret is casually
// When request this page 3 times in Chrome, we will get "Viewed the page 3 times"
// However, when we change to Firefox, it will show "Viewed the page 1 times"
// Because different approaches will lead to different sessionId, which means these are different requests, just like 2 persons A and B
app.get('/view', (req, res) => {
    if(req.session.cnt){
        req.session.cnt += 1;
    } else {
        req.session.cnt = 1;
    }
    res.send(`Viewed the page ${req.session.cnt} times`);
});
```

---

## S50: Authentication

### Authentication Vs Authorization

* Authentication(认证)是验证一个用户的身份，如账号和密码是否匹配；
* Authorization(授权)是验证一个用户的权限，如能否删除某个内容或更改某个网页的信息。

### 加密

1. 存储密码的时候，一定不能直接存储明文，需要通过 *Hashing Function* 对明文进行加密存储。
2. Hashing Function的特点
   1. **不可逆**。即 A 可以加密成 B，但是 B 不能通过加密函数变回 A。
   2. **输入的微小变化需要引起输出的巨大变化**。比如输入增加了1，不能让加密后的信息也简单的+1。
   3. **输入-输出是唯一的**。即同样的输入一定能得到同样的输出。
   4. **特地需要将加密的速度减慢**。这样可以防止 brute force 破解。
3. salt -- 在用户输入的密码中随机插入一些额外的内容，就像吃饭的时候撒盐一样，盐粒会随机掉落在食物中，这样就更难以被破解。

### AuthDemo
请戳[这里](./AuthDemo)进行查看！