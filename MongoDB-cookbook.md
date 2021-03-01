# MongoDB cookbook

该笔记记录了MongoDB的基本用法和安装方法

---

## 安装MongoDB

1. 访问 [MongoDB](https://www.mongodb.com/try/download/community) 网站去下载合适的版本 (推荐下载 *.msi*)
2. 安装时选定 *Custom*, 安装在`E:\MongoDB`目录下
3. 取消选定 *Install MongoD as a Service*, 并在下一页取消选定 *Install MongoDB Compass*
4. 在 `C:\data` 目录下新建两个文件夹, 名为 `db` 和 `log`, 并在 `log` 中创建文件 `mongodb.log`
5. 切换到 `E:\MongoDB\bin` 目录下, 并执行 `mongod -dbpath "C:\data\db"` 来指定数据要存储在该目录下
6. 保持在 `E:\MongoDB\bin` 目录下, 执行 `mongod -dbpath "C:\data\db" -logpath "C:\data\log\mongodb.log" -install -serviceName "MongoDB"`, 使 `mongod.exe` 每次都会启动, 而不用手动启动
7. 在系统变量 *PATH* 中设置环境变量 `E:\MongoDB\bin`, 这样在控制台执行 `mongo` 即可访问数据库

---

## 概念


|   SQL术语   | MongoDB术语 |             含义             |
| :---------: | :---------: | :--------------------------: |
|  database   |  database   |            数据库            |
|    table    | collection  |   SQL中的数据表&rarr;集合    |
|     row     |  document   |         行&rarr;文档         |
|     col     |    field    |       数据字段&rarr;域       |
|    index    |    index    |             索引             |
| primary key | primary key | 主键, MongoDB中自动设置`_id` |

* 数据库 **(一般简写成db)**
  * `show dbs`  -- 展示所有的数据库
  * `use [dbName]` -- 切换至 *dbName* 对应的数据库, 如果不存在则创建
  * `db.dropDatabase()` -- 删除整个数据库

* 文档
  * 采用 BSON 存储
    > JSON 存在两个问题: (1)不能保存任意的数据类型; (2)基于readable文本, 读取缓慢, 存储损耗大. 为了解决这些问题, MongoDB 使用 **二进制的JSON** 即 BSON 去存储数据.
  * 不像关系型数据库SQL, MongoDB中每个文档的域不一定要相同.
    > ```json
    > {name: "tom", age: 18}
    > {name: "jack", sex: "M"}
    > ```   

* 集合
  * 在 *MongoDB* 中，集合只有在内容插入后才会创建. 就是说，创建集合(数据表)后要再插入一个文档(记录)，集合才会真正创建
  * `show ollections` -- 展示当前数据库下已有的集合
  * `db.[collectionName].drop()` -- 删除 *collectionName* 对应的集合

---

## CRUD操作

* Create / Insert
```bash
> use animal
> db.cats.insert({name: "popo", age: 4, isFriendly: true, color: "white"})
> db.cats.insert([{name: "kitty", age: 2, isFriendly: false}, {name: "bobo", age: 8, color: "orange"}])
> db.cats.insertOne({name: "haha", age: 4, isFriendly: true, color: "black"})
> db.cats.find()
{ "_id" : ObjectId("6037593fc2a3ffe3f80f1495"), "name" : "popo", "age" : 4, "isFriendly" : true, "color" : "white" }
{ "_id" : ObjectId("60375a79c2a3ffe3f80f1496"), "name" : "kitty", "age" : 2, "isFriendly" : false }
{ "_id" : ObjectId("60375a79c2a3ffe3f80f1497"), "name" : "bobo", "age" : 8, "color" : "orange" }
{ "_id" : ObjectId("60375d4ec2a3ffe3f80f1498"), "name" : "haha", "age" : 4, "isFriendly" : true, "color" : "black" }
```
> 使用 `db.[collectionName].insert()` 即可插入新的数据
> * 如果插入一条数据, 则可以使用 `insert({key: value})` 或者是 `insertOne({key: value})`
> * 如果插入多条数据, 则可以使用 `insert([{}, {}])` 或者是 `insertMany([{}, {}])`

* Read / Find
```bash
> db.cats.find({age: 4})
{ "_id" : ObjectId("6037593fc2a3ffe3f80f1495"), "name" : "popo", "age" : 4, "isFriendly" : true, "color" : "white" }
{ "_id" : ObjectId("60375d4ec2a3ffe3f80f1498"), "name" : "haha", "age" : 4, "isFriendly" : true, "color" : "black" }

> db.cats.find({age: 4, color: "white"})
{ "_id" : ObjectId("6037593fc2a3ffe3f80f1495"), "name" : "popo", "age" : 4, "isFriendly" : true, "color" : "white" }

> db.cats.find({age: {$gt: 6}})
{ "_id" : ObjectId("60375a79c2a3ffe3f80f1497"), "name" : "bobo", "age" : 8, "color" : "orange" }

> db.cats.find({name: {$in: ["popo", "nono"]}})
{ "_id" : ObjectId("6037593fc2a3ffe3f80f1495"), "name" : "popo", "age" : 4, "isFriendly" : true, "color" : "white" }
```
> * 常见的格式为 `db.[collectionName].find(query, projection)`
> * 在 `query` 中, 可以设置 *{key: value}* 的组合去匹配查找
> * 在 `query` 中, 还可以设置各种条件, 形如 *{key: {$op: value}}* 以筛选达到匹配要求的
> * 实际上每次查询返回的并不是整个 `document`, 而是返回 `cursor`, 通过遍历这个 `cursor`即可以访问所有的 `document`


* Update
```bash
> db.cats.updateOne({name: "bobo"}, {$set: {age: 5, isFriendly: true}})
> db.cats.find({name: "bobo"})
{ "_id" : ObjectId("60375a79c2a3ffe3f80f1497"), "name" : "bobo", "age" : 5, "color" : "orange", "isFriendly" : true }
```
> * 语法为 `db.[collectionName].updateOne(quert, update)`, 其中`update` 需要使用 `{$set: {key: value}}`
> * 当需要修改多个符合条件的文档时, 使用`updateMany()`


* Delete
```bash
> db.cats.remove({name: "haha"})
> db.cats.find()
{ "_id" : ObjectId("6037593fc2a3ffe3f80f1495"), "name" : "popo", "age" : 4, "isFriendly" : true, "color" : "white" }
{ "_id" : ObjectId("60375a79c2a3ffe3f80f1496"), "name" : "kitty", "age" : 2, "isFriendly" : false }
{ "_id" : ObjectId("60375a79c2a3ffe3f80f1497"), "name" : "bobo", "age" : 5, "color" : "orange", "isFriendly" : true }
```

> 删除时使用的语法为 `db.[collectionName].remove(query[, justOne])`, 如果不设置`justOne`, 则默认删除所有符合查询条件的; 如果使用`remove(query, 1)` 则只会删除查找到符合条件的第一个

---

## $type
|  类型  | 数字  |
| :----: | :---: |
| Double |   1   |
| String |   2   |
| Object |   3   |
| Array  |   4   |
|  ...   |  ...  |

比如说想查找`title`为`string`的元素
```bash
> db.col.find({"title" : {$type : 2}})
> db.col.find({"title" : {$type : "string"}})
```

---

## limit &amp; skip
* 使用`limit(num=all)`可以限制只显示`num`个文档
> 比如说只想显示头100条数据
> ```
> db.col.find().limit(100)
> ```
* 使用`skip(num=0)`可以跳过头部的`num`个文档, 然后继续显示后面的
> 比如说想显示第100~200条数据, 则可以配合 `limit` 使用
> ```
> db.col.find().limit(200).skip(100)
> ```

---