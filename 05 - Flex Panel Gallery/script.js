const imageEl = document.querySelectorAll('.image');
const textEl = document.querySelector('#text');

imageEl.forEach((image) => {
  image.addEventListener('click', flexGrow);
});

function flexGrow(event) {
  console.log(event.target);
  event.target.classList.toggle('grow');
  textEl.classList.toggle('text');
}

// textEl.forEach((text) => {
//   console.log(text);
// });
