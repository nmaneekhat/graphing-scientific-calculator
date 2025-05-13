const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button-grid button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const val = button.textContent;

    if (val === 'ENTER') {
      try {
        display.textContent = eval(display.textContent);
      } catch {
        display.textContent = 'Error';
      }
    } else if (val === 'clear') {
      display.textContent = '0';
    } else {
      if (display.textContent === '0') {
        display.textContent = val;
      } else {
        display.textContent += val;
      }
    }
  });
});
