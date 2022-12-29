## What is Emmet?
Emmet supports code generation with abbreviation. For eg. div>h1 will create h1 inside a div tag. It is enabled by default in VSCode for lot of files like html, css etc

## Difference between a Library and Framework
* Library is the code that can be imported in our code and can be used by calling library functions
* Framework controls the whole application, we put our code into it to get the desired behaviour and the Framework will call our code and manage everything

## What is CDN? Why do we use it?
CDN stands for Content Delivery Network, it has globally distributed servers to distribute static files. It is used to deliver static content from the CDN server closest to the end user to reduce the latency.

## Why is React known as React?
React is named React because of its ability to react to changes in data. When the data in a React component changes, React will automatically re-render the component so that it reflects the new data. This makes it easy to create performant user interfaces that always look up-to-date. (From Quora)

## What is crossorigin in script tag?
For security reasons, browsers restrict [cross-origin](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin) requests unless controlled by [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). Specifying crossorigin is a way of defining how to handl cross-origin requests.

## What is the difference between React and ReactDOM?
React is the core library with common components used in web and mobile (react native). ReactDOM has components used only in web.

## What is the difference between react.development.js and react.production.js files via CDN?
Production version are minified and optimised for production environment.

## What is async and defer?
async and defer are boolean attributes to be used in script tag.
* without async and defer: as soon as browser comes across script tag,
    * HTML parsing is paused
    * Browser fetches the script file
    * Script file is executed
    * HTML parsing resumes
* async
    * HTML parsing is not paused while fetching the script file
    * After script is available, parsing is paused and script gets executed
    * HTML parsing gets resumed after script execution
* differ
    * Like async, script is fetched asynchronusly and parsign is not paused
    * Script is not executed as soon as it becomes available
    * Script is executed only after the HTML parsing is comple