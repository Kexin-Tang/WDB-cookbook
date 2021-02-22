<h1>Node.js cookbook</h1>

本文为学习 Node.js 过程中的一些心得与笔记, 记录的都是个人的愚见, 如果有任何错误或者不了解的地方, 欢迎指出~

- [Node.js 基础](#nodejs-基础)
- [Node.js Event](#nodejs-event)
- [Node.js 全局对象](#nodejs-全局对象)
- [Node.js 文件](#nodejs-文件)
- [Node.js Express](#nodejs-express)

<span style="color: white; background-color: black;">> 更详细的教程, 请点击</span> [菜鸟教程](https://www.runoob.com/nodejs/nodejs-tutorial.html)

---

## Node.js 基础

* Node.js 是一种在服务器执行JS的运行环境.
> * (&cross;)**Node** 不能直接访问客户端的内容, 如窗口, 文档, DOM等.
> * (&check;)**Node** 有许多内置的模块, 这些模块是浏览器没有拥有的. 这些模块帮助我们操控操作系统, 读写文件等.


* NPM -- Node Package Manager的缩写.
> * 使用 `npm install` 将会把模块安装到局部, 只能通过设置完备的路径才能访问;
> * 使用 `npm install -g` 将会把模块安装到全局, 可以在任何文件中访问.

* Node.js 异步编程的直接体现就是**回调**. 
> * 回调函数是一种在完成任务后就会被调用的函数. 
> * 回调函数一般作为函数的最后一个参数出现.
> * Node.js 几乎每一个 API 都是支持回调函数的

* 阻塞(同步) Vs 非阻塞(异步)
> * 阻塞: 按顺序进行, 完成上一步后才能进行下一步
> * 非阻塞: 某些需要花费时间, 不能马上处理完的工作会被放置在后台运行, 而程序继续执行别的代码, 当后台程序执行完毕后再被回调, 进行相应处理

* 每一个Node.js文件就是一个模块, 通过使用 `exports` 和 `require` 两个对象来实现模块的读取，其中 `exports` 是模块公开的接口，`require` 用于从外部获取一个模块的接口，即所获取模块的 exports 对象. <i>(如果需要暴露class, 则可以使用`module.exports`)</i>
> * world.js
> ```js
> export.world = function() {
>     console.log("Hello, world")
> }
> ```
> * main.js
> ```js
> let world = require("world");
> world.world();        // Hello, world
> ```

---

## Node.js Event

Node.js 里面的许多对象都会分发事件：一个 net.Server 对象会在每次有新连接时触发一个事件， 一个 fs.readStream 对象会在文件被打开的时候触发一个事件. 所有这些产生事件的对象都是 events.EventEmitter 的实例.

1. events 模块只提供了一个对象： `events.EventEmitter`. EventEmitter 的核心就是事件触发与事件监听器功能的封装.
2. EventEmitter 的每个事件由 *一个事件名* 和 *若干个参数* 组成，事件名是一个字符串，通常表达一定的语义. 对于每个事件，EventEmitter 支持若干个事件监听器. 当事件触发时，注册到这个事件的事件监听器被**依次**调用，事件参数作为回调函数参数传递.
3. 常用函数
   1. `addListener(event, listener)` -- 为事件添加一个监听
   2. `on(event, listener)` -- 为指定事件添加监听
   3. `emit(event[, arg1, arg2, ...])` -- 触发事件, 并为监听器传递参数
```js
let events = require("events");
let eventEmitter = new events.EventEmitter();
// 为事件绑定监听
eventEmitter.addListener('connection', function(id){
    console.log(`${id}: Listener0 is working...`)
})
eventEmitter.on('connection', function(id){
    console.log(`${id}: Listener1 is working...`)
})
// 触发事件
eventEmitter.emit('connection', 0)
// 0: Listener0 is working...
// 0: Listener1 is working...
```

---

## Node.js 全局对象

* `__filename` -- 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径。 如果在模块中，返回的值是模块文件的路径。
* `__dirname` -- 表示当前执行脚本所在的目录。
* `process.argv` -- 返回一个数组，由命令行执行脚本时的各个参数组成。它的第一个成员总是node，第二个成员是脚本文件名，其余成员是脚本文件的参数。
> ```js
> // node main.js tom jack
> const args = process.argv.slice(2);   // get the arguments from the third params
> for(let arg of args){
>     console.log("Hello, "+arg);
> };
> // Hello, tom
> // Hello, jack
> ```

---

## Node.js 文件

---

## Node.js Express
> 库 Vs 框架
> * 库: 库的主管方是程序员. 库只会提供各种函数, 而何时使用, 需要用户自己决定.
> * 框架: 框架的主管方是框架. 框架可以包含各种库, 然后框架通过调用多种函数, 实现特定的功能, 而程序员只需要在合适的位置和时机插入相应的代码即可.
> 
> 库相当于CPU, 显卡, 存储条等部件, 用户不用知道这些部件内部的原理, 但是仍然需要把他们拼起来成为电脑才能使用; 框架相当于一台整机, CPU, 显卡, 内存条都安装在合适的位置, 用户可以直接使用.

* Express 框架核心特性：
  * 可以设置中间件来响应 HTTP 请求。
  * 定义了路由表用于执行不同的 HTTP 请求动作。
  * 可以通过向模板传递参数来动态渲染 HTML 页面。(Dynamic HTML)

* `listen(port, listener)` 给 *port* 添加监听
```js
let express = require("express")
let app = express()

let server = app.listen(8080, function() {
    let host = server.address().address
    let port = server.address().port
    console.log("Access: http://%s:%s", host, port)
})
```

* `use([path], callback)` 用于设置 Middleware. 在该函数中, 所有满足path前缀的都会受到响应, 所以**如果不设置path, 相当于对任意请求都响应**.
> 如设置`use('/', function)`, 则`/`, `/cat`, `/cat/popo/`都会响应.

* `get(path, callback)` 用于通过使用 GET 请求 *path*, 并得到响应
* `post(path, callback)` 用于通过使用 POST 请求 *path*, 并得到响应
> 在 GET 和 POST 的两个回调函数中, 有两个特殊的参数 -- request & response
> ```js
> app.get('./search', function(req, res) {
>     ...
> })
> ```
> * **Request 对象** -- 表示 HTTP 请求，包含了请求查询字符串，参数，内容，HTTP 头部等属性
>   * req.body: *获得请求的body*
>   * req.hostname / req.ip: *获得请求的主机名和ip*
>   * req.originalUrl: *获得请求的URL*
>   * req.params: *获得请求的params*
>   * req.path: *获得请求路径*
>   * req.query: *获得URL的查询参数串*
>   * req.route: *获取适配的路由*
>   * req.get(): *获取指定的HTTP请求头*
> * **Response 对象** -- 表示 HTTP 响应，即在接收到请求时向客户端发送的 HTTP 响应数据
>   * res.send(): *发送HTTP响应*
>   * res.get():    *返回指定的HTTP头部* 
>   * res.status(): *设置状态码*
>   * res.type():   *设置Content-Type*
>   * res.set():    *设置HTTP头部, 通过传入object可以设置多个头部*

* 路由 -- 针对不同的页面做不同的响应
```js
app.get('/', function(req, res) {
    res.send("Main page");
})
app.get('/cat', function(req, res) {
    res.send("Cat page");
})
// 可以响应所有`/cat/...`的页面
// 但是不可以响应`/cat/.../...`的页面
app.get('/cat/:sub', function(req, res) {
    res.send("Cat's sub page");
})
// 可以在path中插入正则表达式用于页面匹配
```

* 静态文件 -- 可以通过 Express 获取CSS, JS, 图片等内容
```js
// 如果把静态文件都放在`/public`目录下
app.use('/public', express.static('public'))
```

<span style="color: white; background-color: black;">> 更多Express的API文档, 请点击</span> [这里](http://expressjs.com/)

---