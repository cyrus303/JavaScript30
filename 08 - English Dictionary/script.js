const inputEl = document.getElementById('input');
const instructionEl = document.getElementById('instruction');
const meaningcontainerEl = document.getElementById('meaning-container');
const wordEl = document.getElementById('word');
const meaningEl = document.getElementById('meaning');
const audioEl = document.getElementById('audio');

const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

let definition = '';
let audioSrc = '';

async function fetchAPI(word) {
  try {
    instructionEl.innerText = `Searching for "${word}"`;

    const response = await fetch(URL + word);
    const data = await response.json();
    // console.log(data);
    if (data[0]) {
      definition = data[0].meanings[0].definitions[0].definition;
      audioSrc = data[0].phonetics[0].audio;

      instructionEl.style.display = 'none';
      meaningcontainerEl.style.display = 'block';
      wordEl.innerText = word;
      meaningEl.innerText = definition;
      audioEl.src = audioSrc;
    } else {
      meaningcontainerEl.style.display = 'none';
      instructionEl.style.display = 'block';
      instructionEl.innerText = `${data.title} for "${word}"`;

      setTimeout(() => {
        instructionEl.innerText = 'Type a word and press enter';
        inputEl.value = '';
      }, 2000);
    }
  } catch (error) {
    // console.log(error);
  }
}

inputEl.addEventListener('keyup', (event) => {
  if (event.target.value && event.key === 'Enter') {
    fetchAPI(event.target.value);
  }
});
