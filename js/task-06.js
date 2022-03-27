const inputVal = document.querySelector('#validation-input');
inputVal.addEventListener('blur',eventOnInput);

function eventOnInput(event) {
   const res = event.currentTarget.dataset.length;
   const curent = event.currentTarget.value;
   if (res >= curent.length) {
      //debugger
      inputVal.classList.add('valid')
      inputVal.classList.remove('invalid')
   } else {
      //debugger
      inputVal.classList.remove('valid')
      inputVal.classList.add('invalid')
   }
}