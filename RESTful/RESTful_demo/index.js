/*
    NAME    PATH                VERB    PURPOSE

    Index   /comments           GET     Display all comments
    New     /comments/new       GET     Form to create new comment
    Create  /comments           POST    Creates new comment on server
    Show    /comments/id        GET     Details for one specific comment
    Edit    /comments/id/edit   GET     Form to edit specific comment
    Update  /comments/id        PATCH   Updates specific comment on server
    Destroy /comments/id        DELETE  Deletes specific item on server
*/

let path = require("path");
let express = require("express");
let app = express();
let { v4: uuid } = require("uuid");
let methodOverride = require("method-override");

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

let data = [
    {
        id: uuid(),
        username: "tom",
        comments: "lol, new here!"
    },
    {
        id: uuid(),
        username: "jack",
        comments: "welcome bro :)"
    },
    {
        id: uuid(),
        username: "mary",
        comments: "Can anybody help me solve a simple problem?"
    },
    {
        id: uuid(),
        username: "popoCat",
        comments: "PoPoPoPoPoPoPoPoPoPoPo~~~~~~~~"
    }
]

// 访问主页的时候, 将index页面渲染到主页
app.get('/comments', function (req, res) {
    res.render("comments/index", { data });
});

// 访问"添加新评论"页面的时候, 渲染该页面, 可以输入用户名和评论
app.get('/comments/new', function (req, res) {
    res.render('comments/new')
});

// 使用POST提交表单访问主页时, 重定向到主页
app.post('/comments', function (req, res) {
    const { username, comments } = req.body;
    data.push({ username, comments, id: uuid() });
    res.redirect('/comments');
});

// 访问特定id的页面时, 使用show页面来渲染
app.get('/comments/:id', function (req, res) {
    const { id } = req.params;
    const c = data.find(x => x.id === id);
    res.render('comments/show', c);
});

// 点击修改某条评论时, 跳转到修改页面
app.get('/comments/:id/edit', function (req, res) {
    const { id } = req.params;
    const comment = data.find(x => x.id === id);
    res.render('comments/edit', { comment });
})

app.patch('/comments/:id', function (req, res) {
    const { id } = req.params;                      // 获得某条评论的id
    const newComment = req.body.comments;           // 获得新修改的内容
    const comment = data.find(x => x.id === id);    // 找到id对应的原评论
    comment.comments = newComment;                  // 修改原评论
    res.redirect('/comments');
});

app.delete('/comments/:id', function (req, res) {
    const { id } = req.params;
    data = data.filter(c => c.id !== id);
    res.redirect('/comments');
})

app.listen(8080, () => {
    console.log('start sever...')
});