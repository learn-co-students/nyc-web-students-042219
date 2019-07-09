# Higher Order Components


## SWBATs
- [x] Describe the relationship between higher-order functions and higher-order components
- [x] Explain composition as an alternative to inheritance
- [x] Create and use a higher-order component to abstract behavior
- [x] Give common examples of higher-order components


## Notes

### Higher-order Functions
Functions are first-class citizens
  - What does this mean?
    - It means that functions can be passed around like any other data type (e.g. as arguments, as variables)

HOF - a function that either takes another function as an argument, returns a function, or both.

Functions that take functions as arguments:
- map
- forEach
- filter
- setInterval
- setTimeout
- setState
- indexOf
- find
- addEventListener
- then

Functions that return functions:
- bind


### Higher-order Components
A component that takes another component

Benefits:
- Abstract functionality of components
- Not limited by standard parent-child component hierarchy
- DRY


### Some examples

- Add the same styling to multiple components
- Add the same props to multiple components (withRouter)
- Add the same conditional rendering to multiple components (withLoading)
- Add the same functionality to multipleComponents using state/component lifecycle methods (withAds)


```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/ieQq9pGGs-I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```
