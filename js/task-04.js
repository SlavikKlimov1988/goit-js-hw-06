const counter = {
   value: 0,
   dicrement() {
      this.value -= 1;
   },
   increment(){
      this.value += 1;
   },
   
}
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', function(){
   counter.dicrement();
   valueEl.textContent = counter.value;
})
incrementBtn.addEventListener('click', function(){
   counter.increment();
   valueEl.textContent = counter.value;
})