# React: Under the Hood

## SWBATs
- [x] Explain ReactDOM and the idea of a virtual DOM
- [x] Explain why React needs the `key` prop on individual components when rendered in an array
- [x] Explain the practical consequences of event pooling

## Notes


### Virtual DOM
- Representation of the DOM
- The "DOM" before it hits the DOM

All HTML needs:
1. A tag
2. Attributes 
3. Content/children

```html
<div class="header" id="larry">
  Title!
  <h1>
    <p>Craziness</p>
    HEADERRRRR!
  </h1>
</div>
```

```js
const virtualDOM = {
  tagName: "div",
  attributes: {className: "header", id: "larry"},
  children: [
    "Title!", 
    {tagName: "h1", attributes: null, children: [
      {tagName: "p", attributes: null, children: ["Craziness"]}, 
      "HEADERRRRR!"
    ]}
  ]
}
```

### Diffing Algorithm
- Spots the differences in two things
  - In React, spots the difference between:
    - 1. The incoming virtualDOM
    - 2. The previous virtualDOM


### `key` prop error
Only comes up when iterating over an array to create components
```jsx
  render(){
  
    return (
      <div>
        {
          array.map(el => {
            return <MyComponent el={el}/>
          })
        }
      </div>
    )
  }
```
For optimization purposes, DOM elements are only rerendered when elements change. React keeps a copy of the old DOM and compares it with the incoming DOM. Anything that remains the same is NOT rerendered, while anything that has changed will be rerendered.

Lists are tricky, especially when they are reordered (e.g. sorted). When doing the comparison, React will see reordered elements as new/different elements and rerender entirely new components. This is inefficient. This is why React yells at you about adding a `key` prop to components rendered in a list. `key` props in React are used to optimize the rerendering phase - React will look for elements in the old DOM and the new that having matching keys and compare them before deciding to rerender that component or simply reorder it in the parent.


## Links
[Dan Abramov: React as a UI Runtime](https://overreacted.io/react-as-a-ui-runtime/)
[Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)
[Why you need the key prop to be unique](https://medium.com/@vraa/why-using-an-index-as-key-in-react-is-probably-a-bad-idea-7543de68b17c)