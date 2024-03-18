(function () {
  // const incButton = document.querySelector('[data-counter-button=increment]');
  const countButtonsArray = document.querySelectorAll('[data-counter-button]');
  // console.log(countButtonsArray);
  const output = document.querySelector('[data-counter-output]');
  let count = 0;
  displayCount(count);

  // incButton.addEventListener('click', handleClick);
  countButtonsArray.forEach((button) => button.addEventListener('click', handleClick));

  function handleClick(e) {
      // console.log(e);
      // console.log('e.target', e.target);
      // console.log('e.target.dataset.counterButton', e.target.dataset.counterButton);
      // e.target.closest('[data-counter-button=increment') ? count += 1 : count -= 1;
      e.target.dataset.counterButton === 'increment' ? count += 1 : count -= 1;
      displayCount(count);
  }

  function displayCount(count) {
      output.textContent = count;
  }
})();