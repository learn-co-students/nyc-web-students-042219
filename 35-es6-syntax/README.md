# Helpful ES6 Syntax to Know for React and Beyond ⚛️

![](https://media.giphy.com/media/13twUEuUnCrEju/giphy.gif)

---

## The Following are Used heavily in Mod 4 for React (and are important to know if you're writing modern JavaScript):

#### Object and Array destructuring

```js
const spaceship = {
  pilot: 'elon musk',
  guidance: 'marc zucc',
  chef: 'gordon ramsay'
}
/* from the object spaceship,
please pull out the VALUES stored at
pilot and chef */
const { pilot, chef } = spaceship

console.log(pilot) // 'elon musk'
console.log(chef) // 'gordon ramsay'

class Person {
  // props -> { name: 'winfield', favColor: 'red' }
  constructor(props) {
    this.name = props.name
    this.favColor = props.favColor
  }
}

//VS

class Person {
  // props -> { name: 'winfield', favColor: 'red' }
  constructor({ name, favColor }) {
    this.name = name
    this.favColor = favColor
  }
}

// with arrays too!
const array = ["️☕", "🥯", "🍩"]
const [coffee, bagel, donut] = array

console.log(coffee) // "️☕"
console.log(bagel) // "🥯"
console.log(donut) // "🍩"

```

---

#### Object property definitions shorthand (key value assignment)

```javascript
const pizza = 'pepperoni'
const restaurant = 'sbarros authentic New York Pizza™️'

const pizzaObj = {
  pizza: pizza,
  restaurant: restaurant
}

// name of key is the same as the name of the variable we wish to assign to that key
const pizzaObj2 = { pizza, restaurant }
```

---

#### ES6 Spread Operator with Objects
Important for IMMUTABILITY

- vs `Object.assign()`

```js
const pasta = {
  sauce: 'red',
  garlicky: true
}

// OLDer WAY
// take all the key/value pairs from mudCopy and merge them into this new TARGET OBJ, which happens to be blank
const morePasta = Object.assign({}, pasta)

pasta !== morePasta // copy of the object, not mutation

// NEW HOTNESS
// first arg is target obj; the thing i want to add properties to
const moreMorePasta = { ...pasta, cheese: 'please' }
```

#### ES6 Spread Operator With Arrays
- vs `array1.concat(array2)`

```js
const spices = ['cumin', 'coriander']

const spices2 = ['black pepper']

const allTheSpices = spices.concat(spices2)

const allTheSpicesAgain = [...spices, ...spices2]
```

---

#### all the forms of arrow functions

```javascript

const implicitReturn = () => 'hi'
const explicitReturn = () => {
  return 'hi'
}

const withOneArgOnly = name => `hi ${name}`
const withMultipleArgs = (name, greet) => `${greet} ${name}`

// less code ↓
const double = function (num) {
  return num * 2
}
const double = (num) => {
  return num * 2
}
const double = (num) => num * 2
const double = num => num * 2
```

---

#### function binding vs arrow functions
Important to know, refer to `this` keyword lecture!

```javascript
const dog = {
  name: 'fezzik',
  favSnacks: ['turkey', 'peanut butter', 'soccer balls'],
  sayName: function() {
    // what is this
    return this.name
  },
  barkName: () => {
    // what is this
    return this.name + ' BARK!'
  },
  sayFavFoods: function() {
    // what is this
    this.favSnacks.forEach(s => {
      // what is this
      return `${this.name} likes ${s}`
    })
  },
  sayFavFoodsNoArrow: function() {
    // what is this
    this.favSnacks.forEach(function(snack) {
      // what is this
      console.log(`${this.name} likes ${snack}`)
    })
  },
  sayFavFoodsWithBind: function() {
    // what is this
    this.favSnacks.forEach(function(s) {
      // what is this
      console.log(`${this.name} likes ${s}`)
    }.bind(this))
  }
}

dog.sayName()
dog.barkName()
dog.sayFavFoods()
dog.sayFavFoodsNoArrow()
dog.sayFavFoodsWithBind()

```

---

#### class instance properties and class syntax in general
Important to know, refer to OO lecture!

```javascript

class Dog {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  bark() {
    return this.name
  }
}

```

---

#### passing functions around as arguments (callbacks)

```javascript
const names = ['gabbie', 'dana', 'ian']

// anonymous inline callback fn
names.map((name) => name.toUpperCase())

// vs fn reference
const upperCaser = name => name.toUpperCase()
names.map(upperCaser)

// be careful of extra args!
const nums = [1,2,3]
nums.map(parseInt)
```

---
#### ES6 Iterators (map, reduce, forEach, filter, find, etc)
What iterators mutate data? (sort, splice, push, pop...) 

```js
const names = ['evans', 'chef its ya boi RD']

const noEvans = names.slice(1) // non-destructive
names.splice(1) // destructive

const removedEvans = names.filter(name => name !== 'evans') // non-destructive

const foundEvans = names.find(name => name === 'evans') // non-destructive; returns ELEMENT not ARRAY

```

---

#### dynamic object keys

```javascript
const bingo = {}
const yaboi = 'evans'
// bracket notation
bingo[yaboi] = 'yeet'
// vs dot
bingo.yaboi = 'POWERFUL'

function dynamicSetKeys(obj, key, val) {
  // obj -> {}
  // key -> 'topping'
  // val -> 'scallions'
  obj[key] = val
  // { toppings: 'scallions' }
  return obj
}

```

### Bonus: Conditional rendering in template literals

```js
const aTruthyVariable = true
const moreContent = "some more content"

const stringWithIf = `This will break ☹️ ${if (aTruthyVariable) { moreContent }}`

const stringWithTernary = `You can use ternary in template literals if u want ${aTruthyVariable ? moreContent : ""}`

const stringWithLogicalAnd = `This technique will ALSO add some things to the string if we want ${aTruthyVariable && moreContent}`

```

### External Resources

- [Modern JavaScript](http://www.reactnativeexpress.com/modern_javascript)
- [Wes Bos Simple Guide for Undertanding Destructuring in JS](https://wesbos.com/destructuring-objects/)
- [MDN Article on ES6 Object Shorthand Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_2015)
- [MDN Article on ES6 Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [MDN Article on Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN Article on `Function.prototype.bind()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
- [MDN Article on ES6 Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [MDN Article on Callbacks](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
- [MDN Article on forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [MDN `Array.prototype.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [MDN "Working with Objects"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
