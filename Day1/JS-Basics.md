# JS-Basics Day 1
---
## Table of Contents
| Sl. No. | Topics|
|:---:|:---:|
| 1. | [Introduction](#introduction) |
| 2. | [Variables](#variables) |
| 3. | [Data Types](#data-types) |
| 4. | [Operators](#operators) |
| 5. | [Conditional Statements](#conditional-statements) |
| 6. | [Loops](#loops) |
| 8. | [Arrays](#arrays) |
| 9. | [Objects](#objects) |


## Introduction
---
- JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities.

- JavaScript can be embedded directly into HTML pages using `<script>` tags.

## Variables
---
Variables are used to store data. They can hold different types of values, such as numbers, strings, booleans, etc. Variables are declared using the `var`, `let`, or `const` keywords.

Example:
```javascript
var x = "Hello World!";
let num = 7;
const PI = 3.14;
```

#### Brief History:
- The var keyword was used in all JavaScript code from 1995 to 2015.
- The let and const keywords were added to JavaScript in 2015.
- The var keyword should only be used in code written for older browsers.


#### When to Use `var`, `let`, or `const`?

1. Always use `const` if the value will not be changed throughout the program.

2. Always use `const` if the type will not be changed.

3. Only use `let` if you can't use const.

4. Only use `var` if you MUST support old browsers.

#### RULES FOR DECLEARING VARIABLES
- Names can contain letters, digits, underscores, and dollar signs.
- Names must begin with a letter.
- Names can also begin with $ and _ (but we will not use it in this tutorial).
- Reserved words (like JavaScript keywords) cannot be used as names.
- Names are case sensitive (y and Y are different variables).
Example: 
    ```javascript
    var A = 'Dolly';
    var a = 'Riya' ;
    ```

## Operators
---

JavaScript supports various operators for performing operations on values and variables. These operators can be classified into different categories based on their types.

### Arithmetic Operators
Arithmetic operators are used to perform mathematical calculations.

- Addition: `+`
- Subtraction: `-`
- Multiplication: `*`
- Division: `/`
- Modulus: `%`
- Increment: `++`
- Decrement: `--`
- Exponential: `**`

Example:
```javascript
var x = 10;
var y = 5;
console.log(x + y);  // Output: 15
console.log(x - y);  // Output: 5
console.log(x * y);  // Output: 50
console.log(x / y);  // Output: 2
console.log(x % y);  // Output: 0
console.log(x ** y); // Output: 100000
```

### Logical Operators
Logical operators are used to perform logical operations in JavaScript.

- Logical AND: `&&`
- Logical OR: `||`
- Logical NOT: `!`

Example:
```javascript
var x = true;
var y = false;

console.log( x && y ); // Output: false
console.log( x || y ); // Output: true
console.log( !x ); // Output: false
```

### Comparison Operators
Comparison operators are used to compare values and variables in JavaScript. Return a boolean value as output.

- Equal to: `==`
- Not equal to: `!=`
- Strictly equal to: `===`
- Strictly not equal to: `!==`
- Greater than: `>`
- Less than: `<`
- Greater than or equal to: `>=`
- Less than or equal to: `<=`

Example:
```javascript
var x = 5;
var y = '5';

console.log( x == y ); // Output: true  
console.log( x != y ); // Output: false  
console.log( x === y ); // Output: false  
console.log( x !== y ); // Output: true  
console.log( x > y ); // Output: false  
console.log( x < y ); // Output: false  
console.log( x >= y ); // Output: true  
console.log( x <= y ); // Output: true  
```

### Ternary Operator

The ternary operator is a shorthand way to write conditional statements in JavaScript.
Syntax: `condition ? expression1 : expression2`

Example:-
```javascript
var age = 18;
var message = (age >= 18) ? "You are an adult" : "You are not an adult";
console.log(message); // Output: You are an adult
```

### Assignment Operators

Assignment operators assign values to JavaScript variables. There are few types of arithmatic assignment operators.

###  Types of Assignment operator
+ ### Addition Assignment operator
The addition assignment operator (+=) adds a value to a variable and assigns the result to the variable
```javascript
var x = 5;
x += 3; // Equivalent to: x = x + 3;
// Now x is 8
```

+ ### subtraction Assignment operator
The subtraction assignment operator (-=) subtracts a value from a variable and assigns the result to the variable.
```javascript
var x = 10;
x -= 4; // Equivalent to: x = x - 4;
// Now x is 6
```

+ ### Multiplication Assignment operator
The multiplication assignment operator (*=) multiplies a variable by a value and assigns the result to the variable.
```javascript
var x = 2;
x *= 5; // Equivalent to: x = x * 5;
// Now x is 10
```

+ ### Division Assignment operator
The division assignment operator (/=) divides a variable by a value and assigns the result to the variable.
```javascript
var x = 20;
x /= 4; // Equivalent to: x = x / 4;
// Now x is 5
```



+ ### Modulus Assignment operator
The modulus assignment operator (%=) calculates the remainder when a variable is divided by a value and assigns the result to the variable.
```javascript
var x = 17;
x %= 5; // Equivalent to: x = x % 5;
// Now x is 2
```

+ ### Exponential Assignment operator
The exponentiation assignment operator (**=) raises a variable to the power of a value and assigns the result to the variable.
```javascript
var x = 2;
x **= 3; // Equivalent to: x = x ** 3;
// Now x is 8
```
# JavaScript Conditional Statements

 Conditional statements in JavaScript, which allow you to make decisions in your code based on certain conditions.

## if Statement
The `if` statement is used to execute a block of code if a specified condition is true.

Example:
```javascript
var age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}
```
## else if Statement

The `else if` statement is used when you have multiple conditions to check. It is executed only if the previous conditions are false and its own condition is true.

Example:
```javascript
var age = 18;

if (age < 13) {
  console.log("You are a child.");
} else if (age < 18) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}
```
### else Statement

The `else` statement is used in JavaScript as a fallback option when the condition of the preceding `if` or `else if` statements is false. It doesn't have a condition of its own.

Example :
```javascript 
var age = 18;

if (age >= 28) {
  console.log("I'm Man.");
}
else{
  console.log("I'm boy.");

}
```
## Switch Statement

The switch statement allows you to perform different actions based on different conditions. It evaluates an expression and matches it to various cases to execute the corresponding block of code.
```javascript
var day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the first day of the week.");
    break;
  case "Tuesday":
    console.log("It's the second day of the week.");
    break;
  case "Wednesday":
    console.log("It's the middle of the week.");
    break;
  default:
    console.log("It's a weekend day.");
}
```
#LOOPS
JavaScript supports different kinds of loops:

+ ##### for - loops through a block of code a number of times
```javascript
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
```

+ ##### for/in - loops through the properties of an object
```javascript
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}
```

+ ##### for/of - loops through the values of an iterable object
```javascript
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}
```

+ ##### while - loops through a block of code while a specified condition is true
```javascript
while (i < 10) {
  text += "The number is " + i;
  i++;
}

```
+ ##### do/while - also loops through a block of code while a specified condition is true
```javascript
do {
  text += "The number is " + i;
  i++;
}
while (i < 10);
```

## Array
The Array object is used to store multiple values in a single variable.

+ #### Creating an Array
```javascript
// Array literal notation
const myArray = [1, 2, 3, 4, 5];

// Using the Array constructor
const myArray = new Array(1, 2, 3, 4, 5);
```
+ #### Accessing Array Elements
```javascript
const myArray = ['apple', 'banana', 'orange'];

console.log(myArray[0]); // Output: 'apple'

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
```
+ #### Modifying Array Elements
```javascript

const myArray = ['apple', 'banana', 'orange'];

myArray[1] = 'grape'; // Modifying the second element
console.log(myArray); // Output: ['apple', 'grape', 'orange']
```
### Array Methods

+ push(): Adds one or more elements to the end of an array.

+ pop(): Removes the last element from an array and returns it.

+ slice(): Extracts a section of an array and returns a new array.

+ concat(): Combines two or more arrays.

+ forEach(): Executes a provided function once for each array element.

###Object
Objects are a fundamental data type in JavaScript that allow you to store key-value pairs.

#####Creation 
```javascript
const myObject = {
  key1: value1,
  key2: value2,
  key3: value3
};
```
#####Accessing Object Properties
```javascript
const myObject = {
  name: 'John',
  age: 30,
  city: 'New York'
};

console.log(myObject.name); // Output: 'John'
console.log(myObject['age']); // Output: 30
```

                                           ## THANK YOU !!