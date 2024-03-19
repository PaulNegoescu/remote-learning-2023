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
  const buttons = document.querySelectorAll('[data-counter-button]');
  const output = document.querySelector('[data-counter-output]');
  const initialCount = 0;
  let count = initialCount;
  displayCount(count);

  // for(const button of buttons) {
  //   button.addEventListener('click', handleClick);
  // }

  document.body.addEventListener('click', handleClick);
  document.body.addEventListener('click', handleOutputClick);

  function handleOutputClick(e) {
    if(e.target.type !== 'output') {
      return;
    }
    console.log('sdsadsada')
  }

  function handleClick(e) {
    const action = e.target.closest('[data-counter-button]')?.dataset.counterButton;
    // Event delegation guard
    if(!action) {
      return;
    }

    const newCount = calculateCount(action, count);
    // const newCount =
    //   action === 'increment'
    //     ? count + 1
    //     : action === 'decrement'
    //     ? count - 1
    //     : initialCount;
    applyStylesBasedOnCount(newCount);
    displayCount(newCount);
    count = newCount;
  }

  function calculateCount(action, count) {
    let newCount = count;
    switch (action) {
      case 'increment':
        newCount += 1;
        break;
      case 'decrement':
        newCount -= 1;
        break;
      case 'reset':
        newCount = initialCount;
        break;
      default:
        throw new Error(`The action "${action}" is not implemented.`);
    }

    return newCount;
  }

  function applyStylesBasedOnCount(count) {
    output.className = '';
    if (count > 0) {
      output.className = 'positive';
    } else if (count < 0) {
      output.className = 'negative';
    }
  }

  function displayCount(count) {
    output.textContent = count;
  }
})();
