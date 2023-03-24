const APIKEY = '06ae382b1b6a912df3df22ef';
const URL = `https://v6.exchangerate-api.com/v6/${APIKEY}/pair`;

const currency1El = document.getElementById('currency1');
const value1El = document.getElementById('value1');
const currency2El = document.getElementById('currency2');
const value2El = document.getElementById('value2');
const mainContainerEl = document.getElementById('main-container');
const exchangeSummaryEl = document.getElementById('exchangeSummary');

const values = {
  currencyOne: 'EUR',
  valueOne: 0,
  currencyTwo: 'INR',
  valueTwo: 0,
};

function selectCurrencyOne(event) {
  console.log(event.target.name);
  switch (event.target.name) {
    case 'currency1':
      values.currencyOne = event.target.value;
      break;
    case 'currency2':
      values.currencyTwo = event.target.value;
      break;
    case 'value1':
      values.valueOne = event.target.value;
      break;

    default:
      break;
  }
}

async function fetchRates(event) {
  if (event.keyCode === 13) {
    const response = await fetch(
      `${URL}/${values.currencyOne}/${values.currencyTwo} `
    );
    const data = await response.json();
    console.log(data.conversion_rate);
    let exchangeRate = data.conversion_rate;
    // exchangeRate = exchangeRate.toFixed(3);
    const exchangedValue = value1El.value * exchangeRate;
    value2El.value = exchangedValue.toFixed(4);

    exchangeSummaryEl.innerText = `${values.valueOne} ${
      values.currencyOne
    } = ${exchangedValue.toFixed(4)} ${values.currencyTwo}`;
  }
}

mainContainerEl.addEventListener('change', selectCurrencyOne);
window.addEventListener('keyup', fetchRates);
