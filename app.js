document.getElementById('graph-btn').addEventListener('click', function () {
  const funcInput = document.getElementById('function-input').value;
  if (funcInput) {
    // Example: Graph y = x^2
    plotGraph(funcInput);
  }
});

function plotGraph(funcInput) {
  // You will parse the input here, for now just graph y = x^2
  const x = [];
  const y = [];
  for (let i = -10; i <= 10; i++) {
    x.push(i);
    y.push(i * i);  // y = x^2
  }

  const data = [{
    x: x,
    y: y,
    type: 'scatter',
    mode: 'lines',
    marker: {color: 'blue'}
  }];

  const layout = {
    title: funcInput,
    xaxis: {title: 'x'},
    yaxis: {title: 'y'}
  };

  Plotly.newPlot('graph', data, layout);
}
