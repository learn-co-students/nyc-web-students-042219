# Function Context: `this` in JavaScript


# Pop Quiz (Multiple Choice)
In ruby, the value of `self` inside of a method is determined by:
* (A) the name of the method
* (B) Where/how a method is called or used
* (C) Where/how a method is defined
* (D) The zodiac sign of the developer who wrote the method


## Objectives

Q: self === this
A: sometimes


- Answer Dan Abramov's [question](https://twitter.com/dan_abramov/status/790858537513656320)
- Leverage Ruby's `self` to frame our JS `this` conversation (will get us 40% of the way)
- Recognize and value the differences
- Understand how we might be able to leverage `this` in JavaScript
- When is the value of `this` set? When is it **NOT** set?

---

### Review of `self` in Ruby

- There are _some_ similarities between `this` in JavaScript and `self` in Ruby. Looking at the similarities will get us _closer_ to understanding JavaScript's `this`. **Please do not think of them as being the same thing, however**.

```ruby
class Person
  attr_accessor :name
  def initialize(name)
    @name = name
  end

  def self.say_something
    puts "I am a class method defined on the #{self} class."
  end
end

Person.say_something # => self will be Person class
# self in ruby is the receiver of a method

andy = Person.new('andy')
andy.name # => self will be the instance
# andy (instance) is receiving the method call
```

- `self` in Ruby will always be the receiver of a method call; whatever appears to the left of the `.`

---

### `self` is NOT `this`

- The `this` keyword in JavaScript, much like the English word "this", is context dependent. If I'm eating a bowl of soup and say, "I don't like this", "this" will refer to the soup I'm eating. If I'm taking the L train and say "I hate this", "this" will refer to the L. "This" is determined by the context in which it is used (at least in English).

- `this` in JavaScript works much in the same way, but there are several _specific rules_ that determine the context that `this` points to.

---

![](https://media.giphy.com/media/l46CbZ7KWEhN1oci4/giphy.gif)

---

### The 4 JS environment rules that govern `this`

1.  `this` within a constructor function called with the keyword `new` in front will point to the newly created object:

```javascript
function Person(name, favColor) {
  this.name = name
  this.favColor = favColor
}

const andy = new Person('andy', 'red')
andy //Person { name: 'andy', favColor: 'red' }
typeof andy // "object"
```

  - Note that **we cannot use the `new` keyword for arrow functions**.
  - Read this [MDN Article on the `new` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) if you need a refresher on how `new` works.

---

2. `this` within a function called with `apply/call/bind` will be the object passed as the first parameter:

```javascript
const personOne = { name: 'andy' }
const personTwo = { name: 'jon' }
const personThree = { name: 'garry' }

function sayName(location, time) {
  return `${this.name} says hello from ${location} at ${time}!`
}

// call will invoke AND bind the function; args to the function must be comma separated

console.log(sayName.call(personOne, 'Morocco', '3:00PM'))
// andy says hello from Morocco at 3:00PM!

// apply will invoke AND bind the function; args to the function must be in an array
console.log(sayName.apply(personTwo, ['New York', '5:00PM']))
// jon says hello from New York at 5:00PM!

// bind will set the value of this but DOES NOT INVOKE THE FUNCTION
const boundPersonThree = sayName.bind(personThree)
console.log(boundPersonThree('Los Angeles', '1:00PM'))
//garry says hello from Los Angeles at 1:00PM!

console.log(sayName())
//browser window says hello from undefined at undefined!
```

---

3.  `this` within a `function` called within a particular context (i.e. `Object.method()`) will be the context/object (**assuming that function was declared with the `function` keyword**):

```javascript
  const dog = {
    name: 'winfield',
    whatIsThis: function() {
      return this
    }
  }

dog.whatIsThis() //dog
```

---

4.  `this` for a simple function call `fn()` will be the window object (browser) or the global object (Node). If we are in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) `this` will be `undefined`. (**There are different rules for arrow functions that will be discussed later**)

```javascript
function sayThis() {
  return this
}
sayThis() //window
```

---


- Arrow functions will maintain their enclosing execution context when evaluating `this`. In other words, `this` will be **whatever it was in the functions enclosing execution environment**. `this` in arrow functions will be resolved at the point of execution.

- Unlike functions declared with the `function` keyword, arrow functions are much more predictable because arrow functions do not create their own `this` during execution. Instead, they 'absorb' or 'remember' whatever `this` was in their enclosing environment.

- "An arrow function does not have its own `this`; the `this` value of the enclosing _lexical context_ is used i.e. Arrow functions follow the normal variable lookup rules. So while searching for `this` which is not present in current scope they end up finding `this` from its enclosing scope" - [MDN Article on Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

```javascript
const thisArrow = {
  sayThis: () => {
    return this
  }
}

thisArrow.sayThis() //window

// remember, no block {} means an implicit return
const sampleArrow = () => this
sampleArrow() //window

```

- Please note that we cannot, and should not, use `bind`, `call`, and `apply` on an arrow function. The purpose of these functions is to **fix** the value of `this` to a particular object. Arrow functions will already have `this` fixed to their enclosing lexical scope.

- This makes arrow functions unsuitable for methods defined on an object:

```javascript
const angryChef = {
  chefName: 'Chef Gordon Ramsay',
  cookFood: (foodItem) => {
    return `${this.chefName} is cooking ${foodItem}`
  }
}

angryChef.cookFood('toast') //undefined is cooking toast
```

---

- We can however leverage the lexical scoping of `this` if our object methods are higher order functions (return other functions):

```javascript
const dog = {
  name: 'winfield',
  favSnacks: ['cabbage', 'carrots', 'bones'],
  eatSnacks: function() {
    this.favSnacks.forEach(snack => {
      console.log(`${this.name} is eating ${snack}`)
    })
  }
}

dog.eatSnacks()
// winfield is eating cabbage
// winfield is eating carrots
// winfield is eating bones
```

![dog eating cabbage](https://media.giphy.com/media/WLbtNNR5TKJBS/giphy.gif)

---

## External Resources

- [Strict Mode in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- [MDN `this` article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [MDN `new` Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
- [MPJ JS This Keyword](https://www.youtube.com/watch?v=GhbhD1HR5vk)
- [MDN Arrow Function Article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN On Why Arrow Functions Help Us leverage `this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#No_separate_this)




# Inheritance and the prototype chain

## Outline

- Understand the benefits of sharing properties and behavior
- Answer (**Why?**)
  - Why is inheritance/sharing useful?
  - What are we sharing?
- **How it works?**
  - `JS`'s and `Ruby`'s inheritance model similarities and differences
  - Understand the `Prototype Chain`
  - Create objects using `new` and `Constructor` functions
  - `new` vs `Object.create`
- **How we will likely use it?**
  - Classes (syntactic sugar on the `prototype chain`)
  - Refactor constructor to adopt the class syntax

---

### Object Creation in JavaScript

- Let's imagine we have an application that needs to construct character objects in JavaScript. Each character should have a `name` and `ability`. We could create several using the object literal syntax:

```js
const character1 = { name: 'mario', ability: 'being a plumber' }
const character2 = { name: 'the iron giant', ability: 'being giant and made of iron' }
const character3 = { name: 'wario', ability: 'being an evil version of mario' }
```

- While this approach works, it's extremely tedious **and error prone!!** This leaves us open to typos and other mistakes! We could instead choose to write a function that constructs objects for us (these are called [factory functions](https://en.wikipedia.org/wiki/Factory_(object-oriented_programming))):

```js
function characterFactory(name, ability) {
  const character = { name, ability } //ES6 shorthand syntax
  // const character = { name: name, ability: ability} //same as above
  return character
}

const character1 = characterFactory('kirby', 'eating ppl')
const character2 = characterFactory('sephiroth', 'the one wingéd angel')
const character3 = characterFactory('zelda', 'secretly being POWERFUL')
```

- Quick note about the snippet above: in modern JavaScript, ES6 and later, we can create objects using a shorter syntax. If a key/value pair share the same name, we can abbreviate our statement like so: `{ name: name }` becomes `{ name }`. Both will create an object with a key of name pointing to whatever value is stored in the _variable_ called `name`.

- Let's add some functionality to our characters. We _could_ create a function that takes in a particular character object as an argument:

```js
function refillHealth(character) {
  console.log(`${character.name} restored health!`)
}

refillHealth(character1) //'kirby restored health!'
refillHealth(character2) //'sephiroth restored health!'
refillHealth(character3) //'zelda restored health!'
```

- While this approach works, but it would be much easier to create a method on our character objects. In other words, we'd like to be able to call `character1.refillHealth()`. We can also leverage the value of `this` in our method:

```js
function characterFactory(name, ability) {
  const character = {
    name,
    ability,
    refillHealth : function() {
      console.log(`${this.name} restored health!`)
    }
  }
  return character
}

const character1 = characterFactory('kirby', 'eating ppl')
const character2 = characterFactory('sephiroth', 'the one wingéd angel')
const character3 = characterFactory('zelda', 'secretly being POWERFUL')

character1.refillHealth() //'kirby restored health!'
```

- Recall that a function (declared with the `function` keyword) will resolve `this` based on its **execution context**. If `refillHealth` is called **on** `character1`, `character1.refillHealth`, `this` will be `character1`.

- Again, this is _getting better_ but there's still a flaw in our approach:

```javascript
character1.refillHealth === character2.refillHealth // false
```

![scream emoji](https://media.giphy.com/media/TK8bDNcLU1F16/giphy.gif)

- `character1.refillHealth` is a different function, occupying a different place in memory than `character2.refillHealth`. **We are wasting memory by constantly redeclaring `refillHealth` every time we create a new character**. This is _bad_. We don't want to be wasteful.

- In Ruby this problem was easily solved by using class based inheritance:

```ruby
class Character
  attr_reader :name, :ability

  def initialize(name, ability)
    @name = name
    @ability = ability
  end

  def refill_health
    puts "#{self.name} restored health!"
  end

end

character1 = character.new('dankey kang', 'throwing barrels at mario')
character1.refill_health #=> dankey kang restored health!
```

---

#### Prototypal Inheritance

- JavaScript however, **does not have classes**. Ruby has these special things called _classes_ that allow us to create blueprints for our instances. JavaScript relies on prototypal inheritance. In essence, almost everything in JavaScript is an object: functions, object literals, even arrays. JavaScript objects have a chain of prototypes; other objects that define certain _shared functionality_. If a method is not defined on a particular object, JavaScript will look _up the chain of prototypes_ (which are plain old JavaScript objects) until it either finds the method or errors out:
  - "When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain. Nearly all objects in JavaScript are instances of `Object` which sits on the top of a prototype chain." - [MDN Article on Inheritance and the Prototype Chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

#### What is a Prototype in JavaScript

- "JavaScript is often described as a prototype-based language — to provide inheritance, objects can have a prototype object, which acts as a template object that it inherits methods and properties from. An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on. This is often referred to as a prototype chain, and explains why different objects have properties and methods defined on other objects available to them.

- Well, to be exact, the properties and methods are defined on the prototype property on the Objects' constructor functions, not the object instances themselves.

- In JavaScript, a link is made between the object instance and its prototype (its `__proto__` property, which is derived from the prototype property on the constructor), and the properties and methods are found by walking up the chain of prototypes." - [MDN Article on Object Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)

![chain](https://media.giphy.com/media/yvzK4m2EoIKs9K0GoF/giphy.gif)

---

- Let's refactor our code so we can leverage `Object.create` to make our characters:

- "The `Object.create` method creates a new object, using an existing object as the prototype of the newly created object" - [MDN `Object.create`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

```js
const characterTemplate = {
  name: null,
  ability: null,
  refillHealth: function() {
    console.log(`${this.name} restored health!`)
  }
}

const character1 = Object.create(characterTemplate)
character1.name = 'fox mccloud'
character1.ability = 'being an intelligent fox who flies through outer space doing barrel rolls'

character1.__proto__ //characterTemplate

character1.refillHealth === characterTemplate.refillHealth //true

character1.refillHealth() //'fox mccloud restored health!'
```

- "`The Object.create()` method creates a new object, using an existing object to provide the newly created object's `__proto__` ." - [MDN Article on `Object.create`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
  - `Object.create` in our example above allows us to create new objects with `characterTemplate` in their prototype chain. In other words, character1 is **inheriting** the `refillHealth` method from `characterTemplate`.

- Again, our approach is getting better but manually assigning a `name` and `speciality` to our characters is tedious.

---

- Let's update our `characterFactory` so that it is a [constructor function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor). A constructor function is a JavaScript function that creates object "instances." Like `Object.create`, it will return a new **object** that will serve as the prototype object for our newly constructed character instances:

```js
function characterFactory(name, ability) {
  // `this` in the context of a constructor function will be the newly created object {}
  this.name = name
  this.ability = ability
}

// any function can be called as a constructor with the `new` operator (see notes below for more info on the `new` operator)
const character1 = new characterFactory('sonic', 'running fast')
const character2 = new characterFactory('pikachu', 'electricity')
const character3 = new characterFactory('homer simpson', 'nuclear safety inspector')
```

- A few notes on the `new` operator:

>  When the code `new Foo(...)` is executed, the following things happen:
>
  > 1.  A new object is created, inheriting from `Foo.prototype`.
>
  > 2. The constructor function `Foo` is called with the specified arguments, and with `this` bound to the newly created object. `new Foo` is equivalent to `new Foo()`, i.e. if no argument list is specified, Foo is called without arguments.
>
  > 3. The object returned by the constructor function becomes the result of the whole `new` expression. If the constructor function doesn't explicitly return an object, the object created in step 1 is used instead. (Normally constructors don't return a value, but they can choose to do so if they want to override the normal object creation process.)
>
> You can add a shared property to a previously defined object type by using the `Function.prototype` property. This defines a property that is shared by all objects created with that function, rather than by just one instance of the object type. - [MDN `new` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)

- As it relates to our example, when a function is called with the `new` operator––`new characterFactory('sonic', 'running fast')`––`this` will point to the **newly created object**. Writing this constructor function also _adds_ an object that points to `characterFactory` in the newly created object's ("instance") prototype chain:

```js
characterFactory.prototype
// // the prototype is an object with a KEY of constructor that points to our characterFactory function:
// {
//   constructor: ƒ characterFactory(name, ability)
// }
```

- This object is in turn added as the `__proto__` for all characters created from our constructor:

```js
const r = new characterFactory('robb', 'JavaScript')
r.__proto__ === characterFactory.prototype // true
```

---

- Let's leverage our new understanding of the prototype chain to avoid duplicating `refillHealth`:

```js
function characterFactory(name, ability) {
  this.name = name
  this.ability = ability
}

characterFactory.prototype.refillHealth = function() {
  console.log(`${this.name} restored health!`)
}

const character1 = new characterFactory('waluigi', 'being tall and evil')
const character2 = new characterFactory('yoshi', 'being a dragon')
const character3 = new characterFactory('luigi', 'fighting spooky ghosts')

character1.refillHealth() //'waluigi restored health!'
character2.refillHealth() //'yoshi restored health!'
character3.refillHealth() //'luigi restored health!'
```

- We're no longer duplicating `refillHealth`:

```javascript
character1.refillHealth === character2.refillHealth // true
```

- Also note that we're adding methods to `characterFactory.prototype`, not directly to `characterFactory` itself. Recall:

```js
characterFactory.prototype
// {
//   refillHealth: ƒ (),
//   constructor: ƒ characterFactory(name, ability)
// }
```

- `characterFactory`'s prototype is **ANOTHER OBJECT** with a key of `constructor` that points to the `characterFactory` function itself and another key that points to `refillHealth`
- any objects created from characterFactory can look up this chain of ancestors to find the `refillHealth` method

---

#### "Classes" in JavaScript

- "JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript's existing prototype-based inheritance. **The class syntax does not introduce a new object-oriented inheritance model to JavaScript.**" - [MDN Article on the `class` keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

- Although we can use the `class` keyword in modern JavaScript, the language **does not support true object orientation**. JS still relies on a prototypal inheritance model and "classes" are in fact **_functions_** (which are technically objects). Let's see an example of the `class` keyword in use:

```js
class Character {
  constructor(name, ability) {
    this.name = name
    this.ability = ability
  }

  refillHealth() {
    console.log(`${this.name} restored health!`)
  }
}

const character1 = new character('bowser', 'living in a castle and breathing fire in said castle')
const character2 = new character('samus', 'cool spacesuit')
const character3 = new character('link', 'time travel and killer ocarina playing skillz')

character1.refillHealth() //'bowser restored health!'
character2.refillHealth() //'samus restored health!'
character3.refillHealth() //'link restored health!'
```

- Some notes on the snippet above:
  - "The `constructor` method is a special method for creating and initializing an object created with a `class`. There can only be one special method with the name "constructor" in a class. A `SyntaxError` will be thrown if the class contains more than one occurrence of a `constructor` method." - [MDN Article on `class`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
  - When using the `new` operator on a `class`, JavaScript will look for and invoke this special `constructor` function. You can think of this as being _similar_ to Ruby's `initialize` method. The `class` syntax is just syntactic sugar over our previous example that manually added methods to the objects in our character's prototype chain:

```js
characterFactory.prototype.refillHealth = function() {
  console.log(`${this.name} restored health!`)
}
```

---

## BONUS: Leveraging Closures to Create Private Pieces of State

- In Ruby, making something `private` is as easy as this:

```ruby
class Donut
  attr_reader :flavor
  def initialize(flavor)
    @flavor = flavor
  end

  private

  def super_private
    puts "wow, so secret!"
  end
end
```

- JavaScript **does not have a `private` keyword** so we'll need to take advantage of lexical scope and closures in order to hide data and/or functionality.

- Let's imagine that we need to keep track of the total number of characters produced by our factory and assign an auto-incremeting id to each one. First, let's close over our `character` class by wrapping it in an [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE):

```js
const Character = (() => {
  return class Character {
    constructor(name, ability) {
      this.name = name
      this.ability = ability
    }

    refillHealth() {
      console.log(`${this.name} restored health!`)
    }
  }
})()
```

- Recall that Immediately Invoked Function Expressions (IIFEs) as the name implies, are **invoked** as soon as they're defined. Look closely at the snippet above and ask yourself what `const character` will evaluate to.
  - `const character` will be **assigned** to whatever value the expression to the right of the `=` evaluates to. Notice that we have an IIFE that **returns** our character class.
  - `const character` will evaluate to `character`, the key difference being that our `character` class is now enclosed in an IIFE.

```js
console.log(Character) // character class
```

- We can now encapsulate some private variables within the closure, allowing us to create "private" variables:

```javascript
const Character = (() => {
  let totalCharactersMade = 1

  return class Character {
    constructor(name, ability) {
      this.name = name
      this.ability = ability
      this.id = totalCharactersMade++
    }

    refillHealth() {
      console.log(`${this.name} restored health!`)
    }
  }
})()

const character1 = new character('pong', 'a digital ping pong ball')
const character2 = new character('jill valentine', 'not being afraid of zombies')
const character3 = new character('donkey kong', 'being a POWERFUL primate')

console.log(character1.id) //1
console.log(character2.id) //2
console.log(character3.id) //3

console.log(totalCharactersMade) //reference error: totalCharactersMade is not defined
```

- We're now able to wrap our `Character` class in a closure in order to create private variables.

---

### External Resources
- [Factory Functions](https://en.wikipedia.org/wiki/Factory_(object-oriented_programming))
- [MDN Creating Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- [MDN Article on Inheritance and the Prototype Chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [MDN Article on `Object.create`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
- [MDN Constructor Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)
- [MDN `new` Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
- [MDN Article on the `class` keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Master the JS Interview: Difference Between Prototypal and Class Inheritance](https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9)
- [MDN Article on Object Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- [MDN Article on IIFEs](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)


---

![donkey kong holding a barrel in the darkness](https://pics.me.me/donkey-kong-holds-a-barrel-in-the-darkness-39129812.png)
