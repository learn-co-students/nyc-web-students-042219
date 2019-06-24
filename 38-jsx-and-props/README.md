JSX & Props
=============================

## SWBATs
- [x] Understand how `create-react-app` works and what it offers a developer
- [x] Organize code into files and use the import-export syntax to pass code between files
- [x] Use props to make components more dynamic and reusable
- [x] Setup a new React app and play around with building UIs
- [x] **BONUS** Use the `children` prop 

## Notes

### Examples of old projects
Tindr but for Ninja Turtles
AirBnB for fantasy worlds AirDnD
Etsy but for pets Petsy

<!-- WebMD Tindr (swipe left if you don't have the symptom, swipe right if you do) 2
Oregon Trail Venmo (barter) 5
MaceBook (Facebook for medieval knights) 3
Learn.co but you learn how to learn 1
Twitter but for candies 6 -->
Inverse Yelp - Pley
As a restaurant, I want to be able to search for customers
As a restaurant, I want to be able to leave reviews about customers
Each user should have a star rating, a quick bio (with dietary restrictions), add a dog icon if they bring a dog, kid icon, and dollar signs for the amount of tip they give (percentage)
What restaurants customers are banned from
The ability to ban customers

Pre-populated customers

### Difference between a statement and an expression

An expression evaluates to something; a statement does not.

Statements: variable declaration, if statement, case statements


### Thinking about props

In thinking about props, repeat this mantra: props are to components as arguments are to functions!

Think back to mod 1:
Before ActiveRecord, you passed in arguments one by one and in a particular order: `User.new("Alex", 23, "therapist"`

With ActiveRecord, you passed a single hash and mapped your values onto the specific keys they corresponded to:
`User.new(name: "Alex", age: 23, occupation: "therapist"`

This is very much analogous to the change over from regular ol' JS functions to JSX components

### Links
[Webpack](https://webpack.js.org/)
[Quick intro to Webpack](https://medium.com/the-self-taught-programmer/what-is-webpack-and-why-should-i-care-part-1-introduction-ca4da7d0d8dc)
