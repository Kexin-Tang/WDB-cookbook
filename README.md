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
## S3&4&5: HTML
<a href="https://developer.mozilla.org/en-US/docs/Web/Reference">MDN</a> is a very useful website for searching HTML elements and their usages.

- [header, paragraph, list, img, anchor](./HTML/HTML0.html)
- [block vs inline](./HTML/HTML1.html)

***Notice:***
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
4. 
