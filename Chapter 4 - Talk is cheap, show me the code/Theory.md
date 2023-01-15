## How can I write comments in JSX?
In JSX withing curly brances we can write any JS code, so we can use JS comment way.
```
{
                /* hello*/
}
OR
{
    // hello
}
```

## What is `<React.Fragment></React.Fragment>` and `<></>`?
Each react component returns JSX, in JSX we can have only one parent component. If we need to include multiple parents we need to enclose them with a single parent like `<div></div>`.
React provides React.Fragment component to enclose multiple tags wihout having to add additional <div> tag, it doesn't add div tag in DOM it is like empty tag. 
<></> is syntactic sugar for React.Fragment.

## What is [Virtual DOM](https://reactjs.org/docs/faq-internals.html)?
Virutal DOM is the representation of UI kept in memory and synced with the real DOM by ReactDOM library.
Reconciliation process is used to keep the DOMs in sync.

## What is [Reconciliation](https://reactjs.org/docs/reconciliation.html) in React?
Reconciliation is the diffing algorithm to compare DOMs in `O(n)` time based on 2 assumptions.
1. If the type of element is different, it will produce different trees.
2. Developers can hint which child elements may be stable across renders with key prop.
### Diff algorithm
1. React first compares root elements
    * If elements are of different types, react will tear down old tree and build new tree from scratch
    * If elements are of same type, react compares the attributes. It keeps the same DOM node and only updates the changed attributes 
2. After handling the DOM node, react recurses on the childern
    * If children are component elements of same type, when a component updates, the instance stays the same, so that state is maintained across renders. React updates the props of the underlying component instance to match the new element
    * By default, when recursing on the children of a DOM node, React just iterates over both lists of children at the same time and generates a mutation whenever there’s a difference. Developers can provide key attribute, then react assumes that element with the same key has not changed and does not rerender it.
    
## What is React Fiber?
React fiber is the ongoing reimplementation of core react algorithms to support incremental redering (Rendering UI in chunks) and includes other performance improvements.


## Why we need keys in React? When do we need keys in React?
During reconciliation, while recursing over the childern, react compares corresponding elements one by one from top. If there's a difference, react re-renders all the children from there. So if only the order has changed, still react rerenders all the children rather than just the one which is newly added. To improve performance, react supports adding keys to the nodes, with an assumption that elements with the same key don't change. Then, upon new nodes, only new key elements will be re-rendered, not all children.

## Can we use index as keys in React?
Using index as key is an anti-pattern in react since react assumes that elements with same key have not changed. If the order changes due to sort/addition/removal of elements, it leads to unpredicatable results.