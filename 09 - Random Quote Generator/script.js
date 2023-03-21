const URL = 'https://api.api-ninjas.com/v1/quotes';
const apiKey = 'O9c6kPGo5cBWrZ4iV1gvKQ==M2sIyITJbgUXbhmc';

const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const btnEl = document.getElementById('btn');

const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': apiKey,
  },
};

async function fetchQuote() {
  try {
    loading();
    const response = await fetch(URL, options);
    const data = await response.json();
    btnEl.innerText = 'Get A Quote';
    quoteEl.innerText = data[0].quote;
    authorEl.innerText = `~ ${data[0].author}`;
  } catch (error) {
    console.log(error);
  }
}

function loading() {
  quoteEl.innerText = 'Loading Quote . . .';
  authorEl.innerText = '';
  btnEl.innerText = 'Updating';
}

btnEl.addEventListener('click', fetchQuote);
