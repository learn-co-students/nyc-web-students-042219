Intro to React
=============================

## SWBATs
- [x] Visualize/identify Components on any website
- [x] Explain what a Component is conceptually in the UI
- [ ] Briefly explain Babel's purpose in React
- [ ] Explain what a React Component actually is in code
- [ ] Use JSX to build custom components and render them in the browser
- [ ] See how props are to components as arguments are to functions

## Notes

### Declarative vs Imperative Programming

Imperative

Making a burrito
- Get a flour tortilla
- Toast tortilla
- Add rice
- Add protein (chicken/tofu)
- Add veggies
- Sour cream
- Corn
- Guac
- Pico de gallo
- Cheese
- Wrap the burrito (carefully)

```js
// find the the parent element
// create a dom element
// add attributes
// add innerText
// append new dom element to parent element

const parent = document.getElementById("parent")
const child = document.createElement("p")
child.className = "child"
child.innerText = "Hello!"

parent.append(child)

```

Declarative

Ordering a Burrito
- Serving method
- Choice of rice
- Choice of beans
- Choice of protein
- Choice of veggies
- Toppings

```js
function createChild(parentID, tagName, className, text){
  const parent = document.getElementById(parentID)
  const child = document.createElement(tagName)
  child.className = className
  child.innerText = text

  parent.append(child)
}

createChild(parentElement, "p", "child", "Hello!")
createChild(parentElement, "p", "child2", "Wutup!")
```


### Absatractions to JSX

First form: *STATIC HTML*
```jsx
ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    <h1>Hello, beef!</h1>
    <h1>Hello, squid!</h1>
  </div>,
  document.getElementById('root')
);
```


Second form: *Dynamic, reusable components using regular functions and arguments*
```jsx
function Greeting(phrase,name){
  return <h1>Hello {phrase}! - {name}</h1>
}

ReactDOM.render(
  <div>
    {Greeting("world", "Alex")}
    {Greeting("beef", "Peter")}
    {Greeting("squid", "Katarina")}
  </div>, 
  document.getElementById('root')
)
```

THIRD FORM: *Static components using JSX*
```jsx
function Greeting(){
  return <h1>Hello world!</h1>
}

ReactDOM.render(
  <div>
    <Greeting />
    <Greeting />
    <Greeting />
  </div>, 
  document.getElementById('root')
)
```

FINAL FORM: *Dynamic, reusable components using JSX and props*
```jsx
function Greeting(props){
  return <h1>Hello {props.phrase}! - {props.name}</h1>
}

ReactDOM.render(
  <div>
    <Greeting phrase="world" name="Alex"/>
    <Greeting phrase="beef" name="Peter"/>
    <Greeting phrase="squid" name="Katarina"/>
  </div>, 
  document.getElementById('root')
)
```

## Links

[Babel](https://babeljs.io/)
[React](https://reactjs.org/)
[Whiteboarding App](https://awwapp.com)
