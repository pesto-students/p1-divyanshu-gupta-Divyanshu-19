# When a user enters an URL in the browser, how does the browser fetch the desiredresult ? Explain this with the below in mind and Demonstrate this by drawing a diagramfor the same.

## Main funtionality of a browser
A browser such as Chrome, Mozilla, firefox displays text, image, video, links to other website by a request send by the user to the server. This is displayed with the help of HTML and CSS. Browser interprets the markup language and present us with the information. The browser interprets the HTML using specifications provided by the W3C(World wide web consortium).

![](https://www.ionos.com/digitalguide/fileadmin/user_upload/EN-how-do-browser-work.png)

Here when we enter a url the server request files for that particular URL.  When we enter URL the server asks for IP of that URL from DNS server. The browser then request the IP address for the files. It receives file in form of HTML and CSS which it delivers to the browser which interprets it and shows it to the user.

## High Level Components of the browser 

![](https://miro.medium.com/max/1138/1*sMUfPOwos9qIojr_OI-9xA.png)
**1. User Interface:**  is the top bar in the browser, where control lies. It includes space where we type the URL, , have back/forward buttons, space where tabs and setting options are.[2]
**2. Browser Engine:** is the bridge between User Interface and the Rendering engine. Based on the inputs from a user it queries and manipulates the rendering engine.[2]
**3. Rendering Engine:** is responsible for parsing HTML/CSS/XML and displaying it into the empty space below User-Interface. Based on the plugins and support it can display other types of media also(like pdf/word). There are two major rendering engines in market Webkit and Gecko.[2]
**4. Networking:** is fetching resources and handling everything related to the internet. Below is how resources are fetched when we type a URL in a browser[2]
**5. JavaScript Interpreter:** is JS engine which reads and executes the js code and handles the result to the rendering engine.[2]
**6. UI Backend:** is used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. It underneath uses operating system user interface methods.[2]
**7. Data Persistence:** is support for storage mechanisms such as localStorage, IndexedDB, WebSQL, and FileSystem. It is a small database created on the local drive of the computer where the browser is installed. It manages user data such as cache, cookies, bookmarks, and preferences.[2]

## Rendering engine and its use
A Rendering engine is the heart of the browser and is used to interpreting and parsing HTML/CSS/XML. It first parse HTML by looking for <> then parse CSS and finally parse the script


![](https://3fxtqy18kygf3on3bu39kh93-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/Screenshot-2019-11-12-at-3.26.19-PM.png)

## Parsers (HTML, CSS, etc)



## References
1. https://www.ionos.com/digitalguide/websites/web-development/what-is-a-browser/
2. https://medium.com/web-god-mode/how-web-browsers-work-behind-the-scene-architecture-technologies-and-internal-working-fec601488bfa
3. https://www.browserstack.com/guide/browser-rendering-engine