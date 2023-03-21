const URL = 'https://api.catboys.com/img';

const btnEl = document.getElementById('btn');
const animeResponseContainerEl = document.getElementById(
  'anime-response-container'
);
const profilePicEl = document.getElementById('profile-pic');
const nameEl = document.getElementById('name');

async function fetchImg() {
  try {
    animeResponseContainerEl.style.display = 'flex';
    profilePicEl.src = '';
    nameEl.innerText = 'Loading';
    btnEl.disabled = true;
    const response = await fetch(URL);
    const data = await response.json();
    profilePicEl.src = data.url;
    nameEl.innerText = data.artist;
    btnEl.disabled = false;
  } catch (error) {
    btnEl.disabled = false;
    console.log(error);
  }
}

btnEl.addEventListener('click', fetchImg);
