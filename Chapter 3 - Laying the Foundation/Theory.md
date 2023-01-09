## What is JSX?
JSX is the syntax extension to Javascript.
`const h1 = <h1>JSX</h1>;`
This is neither HTML nor a string. It is JSX.
It produces react elements. Babel converts it to React Elements.

## Superpowers of JSX
JSX has all the superpowers of Javascript, withing JSX using curly braces {} any JS expression can be embedded.
It can be used with JS control structures if-else, for loop, map etc. It is more closer to JS than to HTML.

## Type attribute in script tag
* no value/default - classic JS script
* module - JS module file which allows using import statements, processing of it is deferred

## Difference between follwing in JSX
* {TitleComponent} - This will embed JS variable.
* <TitleComponent /> - way to use react component which is a function that returns JSX.
* <TitleComponent /> and <TitleComponent></TitleComponent> are identical if there are no children tags in the latter.