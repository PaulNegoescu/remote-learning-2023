'use strict';
var nume = 'Paul';
let varsta = 12;
const conditie = true;
let c = 42;

function add(a, b) {
  return a + b;
}

// varsta = varsta + 1;
// varsta += 1;
// varsta++;

if (Number.isNaN(varsta)) {
  console.log('Era true');
} else {
  console.log('era false');
}

/**
 * Primitive data types:
 * string,
 * number, (Infinity, NaN)
 * boolean, (falsey values: 0, null, '', undefined, false, NaN)
 * undefined, - unintentionally missing value
 * null, - intentionally missing value
 * bigint,
 * symbol
 *
 * => simple types, cannot be broken down, cannot mutated
 */

/* String (literal) */
const name = "Paul \n\t Negoescu's" + ' bread';
let num = '5';
num += 6;

/* Template Literal */
const template = `Backticks ${num + 7} are cool!`;
console.log(template);

/* Tagged template literls */
function whatever(parts, val1, val2) {
  console.log({ parts, val1, val2 });
}

whatever`Paul is ${num} years old. ${nume}`;

console.log('Anastasia' > 'Anisia');
console.log(nume[0]);
// nume[0] = 'I';
// console.log(nume, nume[0]);
// console.log(Number((2.376).toFixed(2)));
console.log(nume.toUpperCase(), nume);

const str = 'unu doi trei';
function firstLettersToUpper(str) {
  const parts = str.split(' ');
  let res = '';
  for (const part of parts) {
    res += part[0].toUpperCase() + part.substring(1) + ' ';
  }
  return res.trim();
}

console.log(firstLettersToUpper(str));

/**
 * Complex values/types
 *
 * Object
 *  - Plain Objects (POJO) - {}
 *  - Array - []
 *  - function - function / class
 *  - Map - new Map
 *  - Set - new Set
 *  - WeakMap -...
 *  - WeakSet -...
 */

const arr = [
  1,
  true,
  'Paul',
  [1, 2, 3],
  function () {
    return 'bla';
  },
];
console.log(arr.length);

const numbers = [2, 5, 19, 23, 1, 0, -2, 10];
// let i = 0;
// while (i < numbers.length) {
//   console.log(numbers[i]);
//   i++;
// }
// for (let i = 0; i < numbers.length; i++) {
//   const num = numbers[i];
//   console.log(num);
// }
for (const num of numbers) {
  console.log(num);
}
