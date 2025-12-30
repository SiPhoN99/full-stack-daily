"use strict";

/* =========================
   A. Conditional Logic
   ========================= */

function checkAccess(age) {
  if (age >= 18) {
    return "Access granted";
  } else {
    return "Access denied";
  }
}

// Manual tests
console.log(checkAccess(20)); // Access granted
console.log(checkAccess(15)); // Access denied


/* =========================
   B. Loops (Controlled)
   ========================= */

// For loop: 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// While loop: 10 to 1
let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}


/* =========================
   C. Array + Function Integration
   ========================= */

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

// Manual tests
console.log(average([10, 20, 30])); // 20
// console.log(average([])); // Uncomment to see error


/* =========================
   D. String Manipulation
   ========================= */

function formatName(firstName, lastName) {
  let formattedFirst =
    firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();

  let formattedLast =
    lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

  return formattedFirst + " " + formattedLast;
}

// Manual tests
console.log(formatName("john", "DOE")); // John Doe
console.log(formatName("aLi", "hAsSan")); // Ali Hassan


/* =========================
   E. Small Logic Challenge
   ========================= */

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

// Manual tests
console.log(countVowels("JavaScript")); // 3
console.log(countVowels("HELLO")); // 2
