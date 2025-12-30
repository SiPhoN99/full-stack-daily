
# Day 3 — JavaScript Control Under Real Input

## Objective
Bridge **pure JavaScript logic** with **controlled input handling**.  
This day ensures strong fundamentals before moving to DOM and events.

If this day is solid:
- DOM manipulation becomes mechanical
- React logic becomes obvious
- Backend conditions and loops feel natural

---

## A. Conditional Logic

### Concept
Conditionals allow the program to make decisions based on data.

### Rule Used
- `if / else`
- Comparison operator: `>=`

### Example
```js
function checkAccess(age) {
  if (age >= 18) {
    return "Access granted";
  } else {
    return "Access denied";
  }
}
````

### Key Takeaways

* Conditions must return **clear outcomes**
* Always cover **both paths**
* Logic should be readable, not clever

---

## B. Loops (Controlled Execution)

### For Loop

Used when the number of iterations is known.

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

### While Loop

Used when looping until a condition becomes false.

```js
let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}
```

### Key Takeaways

* `for` = controlled counting
* `while` = condition-driven repetition
* Always ensure loops **terminate**

---

## C. Arrays + Functions

### Concept

Functions should:

* Validate input
* Perform logic
* Return a result or throw an error

### Example

```js
function average(numbers) {
  if (numbers.length === 0) {
    throw new Error("Array cannot be empty");
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
}
```

### Key Takeaways

* Never assume valid input
* Errors are **intentional control**, not failures
* Loops + arrays are core backend logic

---

## D. String Manipulation

### Concept

Strings are immutable → create new ones

### Operations Used

* Indexing (`string[0]`)
* `toUpperCase()`
* `toLowerCase()`
* `slice()`

### Example

```js
function formatName(firstName, lastName) {
  let formattedFirst =
    firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();

  let formattedLast =
    lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

  return formattedFirst + " " + formattedLast;
}
```

### Key Takeaways

* Normalize user input
* Output should be predictable
* String control is critical for UI and APIs

---

## E. Logic Challenge — Vowel Counter

### Concept

Combine:

* Loops
* Conditions
* String methods

### Example

```js
function countVowels(text) {
  let vowels = "aeiou";
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    let char = text[i].toLowerCase();
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}
```

### Key Takeaways

* Normalize data before checking
* Small logic problems test real understanding
* This mirrors interview-style questions

---

## Summary — What Was Mastered

* Conditional decision-making
* Loop control and termination
* Array validation and error handling
* String formatting and normalization
* Real logic problem solving

---

## What This Unlocks Next

* DOM manipulation
* Browser events
* Event-driven thinking
* User interaction handling

This concludes **pure JavaScript logic training**.




