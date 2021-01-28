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

###### Notice:
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


###### Notice:
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

---