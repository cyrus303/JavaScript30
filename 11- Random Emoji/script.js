const APIKEY = '4f3101f3df3a2db2d916b40a002c57d50d523846';
const URL = 'https://emoji-api.com/emojis?access_key=';

const emojiContainerEl = document.getElementById('emoji-name');
const emojiCimgEl = document.getElementById('emoji-img');
const nameEl = document.getElementById('name');
const btnEl = document.getElementById('btn');
const spinnerEl = document.getElementById('spinner');

async function fetchEmoji() {
  try {
    btnEl.innerText = 'Loading';
    btnEl.disabled = true;
    emojiContainerEl.style.display = 'none';
    spinnerEl.style.display = 'block';
    const response = await fetch(URL + APIKEY);
    const data = await response.json();

    randomNumber = generateRandomNum(data.length);
    emojiCimgEl.innerText = data[randomNumber].character;
    nameEl.innerText = data[randomNumber].unicodeName;
    spinnerEl.style.display = 'none';
    emojiContainerEl.style.display = 'block';
    btnEl.disabled = false;
    btnEl.innerText = 'Click Me';
  } catch (error) {
    console.log(error);
  }
}

function generateRandomNum(n) {
  let rand = Math.random() * n;
  rand = Math.floor(rand);
  return rand;
}

btnEl.addEventListener('click', fetchEmoji);
