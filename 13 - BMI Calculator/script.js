const heightInputEl = document.getElementById('height-input');
const weightInputEl = document.getElementById('weight-input');
const computeBtnEl = document.getElementById('compute');
const BMIOutputEl = document.getElementById('BMI-output');
const resultTextValueEl = document.getElementById('result-text-value');

function computeBMI() {
  let height = heightInputEl.value * 0.01;
  let weight = weightInputEl.value;
  let BMI = weight / height ** 2;

  BMIOutputEl.value = BMI.toFixed(2);

  if (BMI <= 18.5) {
    resultTextValueEl.innerText = 'Underweight';
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    resultTextValueEl.innerText = 'Normal weight';
  } else if (BMI >= 25 && BMI <= 29.9) {
    resultTextValueEl.innerText = 'Overweight';
  } else {
    resultTextValueEl.innerText = 'Obesity';
  }
}

computeBtnEl.addEventListener('click', computeBMI);
