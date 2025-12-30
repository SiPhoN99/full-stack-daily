

# Day 2 — JavaScript Core Execution Notes

## Purpose
Rebuild mechanical control of JavaScript fundamentals under pressure, without frameworks.
This file is a baseline reference before moving to DOM, backend, or React.

---

## 1. Variables & Types

Declared core JavaScript types:
- String
- Number
- Boolean
- Array
- Object

Type inspection uses `typeof`.

```js
typeof "text";     // "string"
typeof 21;         // "number"
typeof true;       // "boolean"
typeof [];         // "object" (JavaScript quirk)
typeof {};         // "object"
````

Important:

* Arrays return `"object"` when checked with `typeof`.
* This is expected behavior and must be remembered.

---

## 2. Functions

### Function Declaration

```js
function add(a, b) {
  return a + b;
}
```

Key points:

* Hoisted
* Explicit return
* Used for core logic

---

### Arrow Function

```js
const greaterThanTen = (numbers) => {
  return numbers.filter(n => n > 10);
};
```

Key points:

* Shorter syntax
* Common in modern backend and frontend code
* Often combined with array methods

---

## 3. Arrays — Core Methods

Given:

```js
const scores = [3, 7, 12, 25, 4];
```

### map — Transform values

```js
const doubled = scores.map(n => n * 2);
// [6, 14, 24, 50, 8]
```

---

### filter — Select values

```js
const filtered = scores.filter(n => n > 10);
// [12, 25]
```

---

### reduce — Aggregate values (CRITICAL)

```js
const total = scores.reduce((sum, n) => {
  return sum + n;
}, 0);
```

How reduce works:

* `sum` → accumulator (running result)
* `n` → current element
* `0` → initial value (always recommended)

Step-by-step execution:

```
0 → 3 → 10 → 22 → 47 → 51
```

When to use reduce:

* Summing values
* Counting items
* Finding max or min
* Grouping data
* Building objects

---

## 4. Objects & Methods

Object with a method:

```js
const user = {
  name: 'Alex',
  age: 21,
  isActive: true,
  describe() {
    return `My name is ${this.name}, I am ${this.age} years old, active: ${this.isActive}`;
  }
};
```

Key points:

* Methods belong to objects
* `this` refers to the object itself
* This pattern is common in backend models and services

---

## 5. Error Handling

Throwing an error:

```js
function checkPositive(number) {
  if (number < 0) {
    throw new Error('Number must be positive');
  }
  return 'Valid number';
}
```

Handling errors safely:

```js
try {
  checkPositive(-5);
} catch (err) {
  console.log(err.message);
}
```

Why this matters:

* Backend code fails frequently
* Crashes are unacceptable
* Errors must be handled explicitly

