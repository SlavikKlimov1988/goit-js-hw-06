const inputVal = document.querySelector('#validation-input');
inputVal.addEventListener('blur',eventOnInput);

function eventOnInput(event) {
   const res = event.currentTarget.dataset.length;
   console.log(res)
   const curent = event.currentTarget.value;
   console.log(curent.length)
   if (res >= curent.length) {
      inputVal.classList.add('valid')
   } else {
      inputVal.classList.add('invalid')
   }
}