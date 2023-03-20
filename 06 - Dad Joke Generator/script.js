const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');

const apiKey = 'O9c6kPGo5cBWrZ4iV1gvKQ==M2sIyITJbgUXbhmc';
const URL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';

async function getJoke() {
  try {
    joke.innerText = 'Updating . . .';
    btnEl.disabled = true;
    btnEl.innerText = 'Loading . . .';

    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
      },
    });

    const data = await response.json();
    jokeEl.innerText = data[0].joke;

    btnEl.disabled = false;
    btnEl.innerText = 'Tell me a joke';
  } catch (error) {
    jokeEl.innerText = 'ran into an error, please try again later';
    btnEl.disabled = false;
    btnEl.innerText = 'Tell me a joke';
    console.log(error);
  }
}

btnEl.addEventListener('click', getJoke);
