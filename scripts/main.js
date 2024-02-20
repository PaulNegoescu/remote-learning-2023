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
// {
//   let i = 0;
//   while (i < numbers.length) {
//     console.log(numbers[i]);
//     i++;
//   }
// }
// for (let i = 0; i < numbers.length; i++) {
//   const num = numbers[i];
//   console.log(num);
// }

for (const num of numbers) {
  console.log(num);
}

if (conditie) {
  // block if conditin is truthy
} else if (conditie === 3) {
  // block if condition is falsey and contitie is 3
} else {
  // if none of conditions are met
}

let someVar = 3;

switch (someVar) {
  case 1:
  //fallthrough case
  case 2:
    console.log('Este 1 sau 2');
    break;
  case 42:
    console.log('Este sensul vietii');
    break;
  default:
    console.log('A fost altceva');
    break;
}

// if (!(someVar === 1 && someVar === 2)) {
//   console.log('Este 1 sau 2');
// } else if (someVar === 42) {
//   console.log('Este sensul vietii');
// } else {
//   console.log('A fost altceva');
// }

// nullish coallescing operator
// someVar = someVar ?? 150;
// console.log(someVar);

const rezultat =
  someVar === 42 ? 'Sesnsul vietii' : someVar === 3 ? 'Trei' : 'Altceva';
console.log(rezultat);

let rez = 'Altceva';
if (someVar === 42) {
  rez = 'Sensul vietii';
} else if (someVar === 3) {
  rez = 'Trei';
}

/** SOLID
 * - Single responsibility
 * - Open-closed
 * - Liskov substitution
 * - Interface segregation
 * - Dependency inversion
 */
const user = {
  fName: 'Paul',
  lName: 'Negoescu',
  age: 38,
  weight: 100,
  height: 1.85,
  // calculateBmi: (a, b) => ({ self: this, a, b }),
  calculateBmi: function (a, b) {
    return { self: this, a, b };
  },
  calculateBmi() {
    return (this.weight / this.height ** 2).toFixed(2);
  },
};

console.clear();

// function test(p) {
//   console.log(p);
// }

// const f1 = test;
// test('Else');
// f1('Something');
// console.log(f1 === test);

// const f1 = user.calculateBmi.bind('Andrei', 'r', 's');
const f1 = user.calculateBmi;

console.log(user.calculateBmi(), /*f1(),*/ f1 === user.calculateBmi);

/**
 * This
 * 1. Is determined at function inviocation NOT function creation
 *    a. Is what is to the left of the dot (".") e.g. user.fct() => this === user
 *    b. If 'use strict' is on, and there is nothing to the left of the dot, this === undefined
 *    c. If 'use strict' is not on, and there is nothing to the left of the dot, this === window
 *    d. If using call() or apply() we can set this to whatever we want
 * 2. is determined at the time of function creation
 *    a. using bind() we can set this to whatever we want
 *    b. when using an arrow function the arrow function takes "this" like it would a normal
 *       variable from the scope the arrow function is declared in
 * 3. Constructor Functions
 */

// function declaration
function add(a, b) {
  return a + b;
}

// function add(a, b) {
//   return a * b;
// }

// function expression
// a.
const add2 = function (a, b) {
  return a + b;
};

// b. IIFE - Immediately Invoked Function Expression
(function add3(a, b) {
  console.log(a + b);
})(3, 5);

// c. Arrow Functions
const add4 = (a, b) => a + b;
const add5 = (a, b) => {
  const rez = a + b;
  return rez;
};
const returnObj = () => ({
  prop1: 'test',
});

console.log(add(2, 3));
