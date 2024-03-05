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

  get fullName() {
    return `${this.fName} ${this.lName}`;
  },

  set fullName(val) {
    const parts = val.split(' ');
    this.fName = parts[0];
    this.lName = parts[1];
  },
};

user.fullName = 'IOana Test';
console.log(user.fName);

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
 *    Can use this inside the function if we call the function preceded by the new keyword,
 *    and it represents the instance that is being created
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
console.clear();

const arrDummy = {
  0: 'Paul',
  1: 'Ceva',
  2: 42,
  'first-name': 'dasdsa',
};

const arr3 = [1, 2, 3, 'Paul;'];

// console.log(arrDummy['first-name']);

// for (const index in user) {
//   console.log(index);
// }

const propName = 'first-name';

// console.log(arrDummy[propName]);

/**
 * Constructor Functions
 * OOP in JS
 */

function User(fName, lName, height, weight) {
  this.fName = fName;
  this.lName = lName;
  this.height = height;
  this.weight = weight;
}

User.prototype.calculateBmi = function () {
  return (this.weight / this.height ** 2).toFixed(2);
};

User.prototype.sayHello = function () {
  return 'Hi,';
};

User.prototype.toString = function () {
  return this.fName + ' ' + this.lName;
};

User.prototype.type = 'visitor';

const user1 = new User('Andreea', 'Popescu', 1.68, 59);
const user2 = new User('Ion', 'Vasilescu', 1.88, 150);
// console.log(user1.ssadsad());

class Admin extends User {
  type = 'admin';
  #privataMea = 'asta e vizibila doar in clasa Admin';

  static whatever() {
    return 'this is a static method';
  }

  constructor(fName, lName, height, weight) {
    super(fName, lName, height, weight);
  }

  get fullName() {
    return `${this.fName} ${this.lName}`;
  }

  set fullName(val) {
    const parts = val.split(' ');
    this.fName = parts[0];
    this.lName = parts[1];
  }

  sayHello() {
    return `${super.sayHello()} ${this.fName} ${this.lName}` + this.#privataMea;
  }
}

const admin = new Admin('Diana', 'Georgescu', 1.6, 60);

console.dir(admin.fullName);
admin.fName = 'Georgiana';
console.dir(admin.fullName);
admin.fullName = 'Ioana Barbulescu';
console.dir(admin.sayHello());

console.log(Admin.whatever());

console.clear();

/**
 * Functions
 */

// Function Declaration
function test1(param) {
  return 'test 1' + param;
}

console.log(test1('Paul'));

// Function Expression
// a) staightforward
const test2 = function (param) {
  return 'test 2' + param;
};

console.log(test2('Paul'));

// b) IIFE
(function (param) {
  console.log('test 3' + param);
})('Paul');

// c) Arrow Function
const test4 = (param) => 'test 4' + param;

console.log(test4('Paul'));

// arguments
// Rest/Default parameters
function testArgs(a, b, c = 'Negoescu', ...orice) {
  const o = {a, b, c, orice};
  console.log(o);
}
testArgs('Paul', 'Ionut', 'Diana', 'fsdfsd', 'rwerwer');

// Callbacks
function doItPositive(a, b, cb) {
  a = Math.abs(a);
  b = Math.abs(b);
  return cb(a, b);
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

console.log(doItPositive(5, -8, add), doItPositive(-7, 5, multiply));

// Closures
function parent(a) {
  const b = 2;
  function child (c) {
    return a + b + c;
  }
  return child;
}

const ext1 = parent(3);
const ext2 = parent(5);
console.log(ext1(4), ext2(7));

for(let i = 0; i < 5; i++) {
  // setTimeout(() => {console.log(i)}, 0);
} 
for(let i = 0; i < 10000; i++) {
  // console.log('p')
}
console.log('Paul');

console.clear();
// Spread operator
function testSpread(a, b, c) {
  return a + b + c;
}
const values = [3, 5, 7, 6, 10];
const newValues = [1, 2, ...values, 4, 5];
const newObj = {
  prop: [1, 2, 3],
};
const newObj2 = {fName: 'altul', ...newObj};
newObj2.prop[2] = 6;
const newObj3 = structuredClone(newObj);
newObj3.prop[1] = 6;

console.log(testSpread(2, ...values), newValues, newObj, newObj2, newObj3);

const testObj = {
  newObj,
  values,
  prop: 1
}
console.log(testObj);

//    Destructuring Assignment
