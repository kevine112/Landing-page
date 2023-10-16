function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operator = document.getElementById('operator').value;
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = 'Tidak dapat membagi dengan nol.';
      }
      break;
    default:
      result = 'Operator tidak valid';
  }

  // Menambahkan hasil perhitungan ke dalam daftar
  const resultText = `Hasil: ${num1} ${operator} ${num2} = ${result}`;
  const resultList = document.getElementById('resultList');
  const listItem = document.createElement('li');
  listItem.textContent = resultText;
  resultList.appendChild(listItem);
}

document.getElementById('calculateButton').addEventListener('click', calculate);
