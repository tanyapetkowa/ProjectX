function appendValue(value) {
  document.getElementById('result').value += value;
}

function calculate() {
  try {
    document.getElementById('result').value = eval(document.getElementById('result').value);
  } catch (error) {
    document.getElementById('result').value = 'Грешка';
  }
}

function clearResult() {
  document.getElementById('result').value = '';
}
