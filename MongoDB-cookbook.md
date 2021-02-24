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

## MongoDB CRUD操作
