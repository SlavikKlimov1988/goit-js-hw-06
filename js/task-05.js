const inputName = document.querySelector('#name-input');
const outSpan = document.querySelector('#name-output');

inputName.addEventListener('input', onEvent)



function onEvent(event) {
   if (event.currentTarget.value === '') {
      outSpan.textContent = 'Anonymous'
   }
   else {
      outSpan.textContent = event.currentTarget.value; 
   } 
}