# When a user enters an URL in the browser, how does the browser fetch the desiredresult ? Explain this with the below in mind and Demonstrate this by drawing a diagramfor the same.

## Main funtionality of a browser

A browser such as Chrome, Mozilla, firefox displays text, image, video, links to other website by a request send by the user to the server. This is displayed with the help of HTML and CSS. Browser interprets the markup language and present us with the information. The browser interprets the HTML using specifications provided by the W3C(World wide web consortium).

![](https://www.ionos.com/digitalguide/fileadmin/user_upload/EN-how-do-browser-work.png)

Here when we enter a url the server request files for that particular URL. When we enter URL the server asks for IP of that URL from DNS server. The browser then request the IP address for the files. It receives file in form of HTML and CSS which it delivers to the browser which interprets it and shows it to the user.

## High Level Components of the browser

![](https://miro.medium.com/max/1138/1*sMUfPOwos9qIojr_OI-9xA.png)

**1. User Interface:** is the top bar in the browser, where control lies. It includes space where we type the URL, , have back/forward buttons, space where tabs and setting options are.[2]

**2. Browser Engine:** is the bridge between User Interface and the Rendering engine. Based on the inputs from a user it queries and manipulates the rendering engine.[2]

**3. Rendering Engine:** is responsible for parsing HTML/CSS/XML and displaying it into the empty space below User-Interface. Based on the plugins and support it can display other types of media also(like pdf/word). There are two major rendering engines in market Webkit and Gecko.[2]

**4. Networking:** is fetching resources and handling everything related to the internet. Below is how resources are fetched when we type a URL in a browser[2]

**5. JavaScript Interpreter:** is JS engine which reads and executes the js code and handles the result to the rendering engine.[2]

**6. UI Backend:** is used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. It underneath uses operating system user interface methods.[2]

**7. Data Persistence:** is support for storage mechanisms such as localStorage, IndexedDB, WebSQL, and FileSystem. It is a small database created on the local drive of the computer where the browser is installed. It manages user data such as cache, cookies, bookmarks, and preferences.[2]

## Rendering engine and its use

A Rendering engine is the heart of the browser and is used to interpreting and parsing HTML/CSS/XML. It first parse HTML by looking for <> then parse CSS and finally parse the script. The critical rendering path is the minimum steps that the browser has to take from the moment it receives the first byte of HTML to the moment that it renders pixels on the screen for the first time[6]

![](https://3fxtqy18kygf3on3bu39kh93-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/Screenshot-2019-11-12-at-3.26.19-PM.png)

## Parsers (HTML, CSS, etc)

A parser is a compiler or interpreter component that breaks data into smaller elements for easy translation into another language. A parser takes input in the form of a sequence of tokens, interactive commands, or program instructions and breaks them up into parts that can be used by other components in programming.

![](https://html.spec.whatwg.org/images/parsing-model-overview.svg)

The input to the HTML parsing process consists of a stream of Unicode characters, which is passed through a tokenization stage followed by a tree construction stage. The output is a Document object.
![](https://www.researchgate.net/profile/Sufen-Dong/publication/45814108/figure/fig3/AS:750788456484865@1556013325273/Structure-of-HTML-parse-tree.pbm)

![](https://blog.logrocket.com/wp-content/uploads/2018/04/0_4J8HSEzvi4DQb-WP.png)

## Script Processors

A browser process HTML document from top to bottom. When browser encounter script tag it halts the process and downloads the script file. Only after the download has been completed and script file has been processed the browser moves and process the HTML code remaining.

![](https://miro.medium.com/max/875/1*JL_8RT-vEMDs5OKvOjWOzA.png)

A rudimentary JavaScript engine contains a baseline compiler whose job is to compile JavaScript source code into an intermediate representation (IR) which is also called the bytecode and feeds this bytecode to the interpreter[8].Like any other programming language, JavaScript runtime has one stack and one heap storage. A heap is a free memory storage unit where you can store memory in random order. Data that is going to persist in for a considerable amount of time go inside the heap. Heap is managed by the JavaScript runtime and cleaned up by the garbage collector[8].

## Tree Construction

![](https://blog.logrocket.com/wp-content/uploads/2018/04/0_bXFDb1USqAonjGYa.png)

A tree contains all the information that a browser needs to display on the screen. Browser smooshes DOM(Document Objec Model) and CSSOM(CSS Object Model) removing anything that won't have effect on rendered output. First, the browser removes all non-visible elements. These elements, although used by other parts of the app, won’t be rendered to the page, so the browser can safely proceed with rendering knowing that all elements in the render tree are in fact visible HTML elements.[6]

Next, we go through the CSSOM and find out which elements in our current render tree match the CSS selectors. The CSS rules for any selector that does match will be applied to that node of the render tree.[6]

## Order of Script Processing

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Hello World</title>
        <link rel="stylesheet" href="main.css">
        …
        <script src="foo.js"></script>
    </head>

    <body>
        <h1>Hello World</h1>

        <script src="bar.js"></script>

        <p>lorem ipsum dolor sit amet</p>

        <script src="baz.js"></script>
    </body>
</html>

```

Once we arrive at foo.js, processing halts as described above. Afterwards, we continue to bar.js, repeat the same procedure, and then move on to baz.js for the final piece. That leaves us with the following sequence[7]. Order can also be asyncrounous. when we add async then the browser keeps parsing HTML untill the script is fetched. We also have defer in which complete HTML parses before parsing of script.

## Layout and painting

A layout is where a browser figure out where element go and how much space they take up. A browser has to start at the top of the render tree and move downward, since each element’s positioning, width, and height is calculated based off of the positioning of its parent nodes. However, it’s important to remember that at this point nothing is shown on the page[6]. Paint happens directly after the Layout phase, and we finally get to see some stuff rendered to the page! If you’re measuring the end of the race as time to first pixel, this is the finish line. The browser goes through and fills in all the other CSS boxes with the non-layout rules. If you’re using multiple compositor layers, the browser will make sure things get into their dedicated layer.[6]

## References

1. https://www.ionos.com/digitalguide/websites/web-development/what-is-a-browser/
2. https://medium.com/web-god-mode/how-web-browsers-work-behind-the-scene-architecture-technologies-and-internal-working-fec601488bfa
3. https://www.browserstack.com/guide/browser-rendering-engine
4. https://developer.mozilla.org/en-US/docs/Glossary/Parse
5. https://www.w3.org/TR/2011/WD-html5-20110113/parsing.html
6. https://blog.logrocket.com/how-css-works-parsing-painting-css-in-the-critical-rendering-path-b3ee290762d3/
7. https://www.innoq.com/en/blog/loading-javascript/
8. https://medium.com/jspoint/how-javascript-works-in-browser-and-node-ab7d0d09ac2f
