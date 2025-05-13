let currentInput = "";

function addToDisplay(value) {
  currentInput += value;
  document.getElementById('calculator-display').textContent = currentInput;
}

function clearDisplay() {
  currentInput = "";
  document.getElementById('calculator-display').textContent = "0";
}

function calculate() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    document.getElementById('calculator-display').textContent = result;
  } catch (e) {
    document.getElementById('calculator-display').textContent = "Error";
    currentInput = "";
  }
}

function plotGraph() {
  const input = currentInput;

  // For simplicity, we're using a basic y = x^2 equation by default.
  // You can enhance this by parsing more complex functions.
  const x = [];
  const y = [];
  for (let i = -10; i <= 10; i++) {
    x.push(i);
    y.push(Math.pow(i, 2));  // Default: y = x^2
  }

  const data = [{
    x: x,
    y: y,
    type: 'scatter',
    mode: 'lines',
    marker: {color: 'blue'}
  }];

  const layout = {
    title: input || 'y = x^2',
    xaxis: {title: 'x'},
    yaxis: {title: 'y'}
  };

  Plotly.newPlot('graph', data, layout);
}
