const smileyEls = document.querySelectorAll('.smiley');
const btnEl = document.querySelector('#btn');
const containerEl = document.querySelector('#container');

let rating = '';

function addActive(event) {
  removeActive();
  if (event.target.tagName === 'IMG' || event.target.tagName === 'P') {
    event.target.parentElement.classList.add('active');
    rating = event.target.parentNode.innerText;
  } else {
    event.target.classList.add('active');
    rating = event.target.innerText;
  }
}

function removeActive() {
  smileyEls.forEach((smileyEl) => {
    smileyEl.classList.remove('active');
  });
}

function sendReview() {
  if (rating) {
    containerEl.innerHTML = `
      <div class="feedback-container">
    <h4 class="thanks">Thank You!</h4>
    <h4 class="feedback">
      Feedback: <span>${rating}</span>
    </h4>
    <p class="feedback-text">
      We will use your feedback to improve our customer service.
    </p>
  </div>`;
  }
}

smileyEls.forEach((smileyEl) => {
  smileyEl.addEventListener('click', addActive);
});

btnEl.addEventListener('click', sendReview);
