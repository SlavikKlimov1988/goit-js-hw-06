function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const color = document.querySelector('.color')
const btn = document.querySelector('.change-color');
btn.addEventListener('click', colorBtn);
const body = document.querySelector('body')
function colorBtn() {
  color.textContent = getRandomHexColor()
  body.style.backgroundColor = getRandomHexColor()
}