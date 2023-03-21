const celsiusValueEl = document.getElementById('celsius-value');
const fahrenhetValueEl = document.getElementById('fahrenheit-value');
const kelvinValueEl = document.getElementById('kelvin-value');

function converter(e) {
  let type = e.target.name;
  let value = e.target.value;
  let celsius = 0;
  let fahrenheit = 0;
  let kelvin = 0;

  switch (type) {
    case 'celsius':
      fahrenheit = (value * (9 / 5) + 32).toFixed(2);
      kelvin = (+value + 273.15).toFixed(2);

      fahrenhetValueEl.value = fahrenheit;
      kelvinValueEl.value = kelvin;
      break;

    case 'fahrenheit':
      celsius = (((value - 32) * 5) / 9).toFixed(2);
      kelvin = (((+value + 459.67) * 5) / 9).toFixed(2);

      celsiusValueEl.value = celsius;
      kelvinValueEl.value = kelvin;
      break;

    case 'kelvin':
      celsius = (+value - 273.15).toFixed(2);
      fahrenheit = ((value * 9) / 5 - 459.67).toFixed(2);

      celsiusValueEl.value = celsius;
      fahrenhetValueEl.value = fahrenheit;
      break;

    default:
      break;
  }
}

celsiusValueEl.addEventListener('change', converter);
fahrenhetValueEl.addEventListener('change', converter);
kelvinValueEl.addEventListener('change', converter);
