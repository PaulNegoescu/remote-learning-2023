// Recap:
// let, const variables
// primitve values (number, string, boolean, bigint, undefined, symbol, null)
// scope
//   global, function/local, block, module
// functions 
//   declarations, expressions, arrow
// objects
//   classes, constructor functions
//   shorthand property declaration, shorthand method declaration
          // const a = 5;
          // const b = 6;
          // const o = {
          //   a, 
          //   b: b,
          //   method() {
          //     console.log('shorthand');
          //   },
          //   long: function() {
          //     console.log('long');
          //   }
          // }
//   this
// arrays
//   array methods: pop, push, slice, shift, unshift
// ifs, fors, whiles, switches
    // for(const prop in o) {
              // shorthand conditional
    //   console.log(typeof o[prop] === 'function' && o[prop]());
    // }


// TODO: array functional methods

// DOM: Document Object Model


// Cand dam clic pe butonul + vrem ca valoarea din output sa creasca cu 1
//  valoare sa creasca cu 1: val += 1;
//  cand se da click: .addEventListener('click', () => {})
//  butonul +, output: document.querySelector('[data-...]');

// Cand dam clic pe butonul - vrem ca valoarea din output sa scada cu 1

(function () {
  const incButton = document.querySelector('[data-counter-button=increment]');
  const output = document.querySelector('[data-counter-output]');
  let count = 0;
  displayCount(count);

  incButton.addEventListener('click', handleClick);

  function handleClick(e) {
    count += 1;
    displayCount(count);
  }

  function displayCount(count) {
    output.textContent = count;
  }
})();
