const inputVal = document.querySelector('#validation-input');
inputVal.addEventListener('blur',eventOnInput);

function eventOnInput(event) {
   const res = event.currentTarget.dataset.length;
   const curent = event.currentTarget.value;
   if (res > curent.length) {
      inputVal.classList.add('valid')
   } else {
      inputVal.classList.add('invalid')
   }
}