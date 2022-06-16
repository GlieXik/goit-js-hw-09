const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
};
let changeColorInterval = null;
refs.start.addEventListener('click', started);
refs.stop.addEventListener('click', stoped);

function started() {
  refs.start.setAttribute('disabled', '');
  refs.stop.removeAttribute('disabled');
  changeBodyColor();
}

function stoped() {
  refs.stop.setAttribute('disabled', '');
  refs.start.removeAttribute('disabled');
  clearInterval(changeColorInterval);
}
function changeBodyColor() {
  const bodyID = document.querySelector('body');
  changeColorInterval = setInterval(() => {
    bodyID.style.background = getRandomHexColor();
  }, 1000);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
