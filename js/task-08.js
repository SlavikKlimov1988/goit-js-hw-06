const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit)
const data = {}
function onFormSubmit(event) {
   
   event.preventDefult();

   const formData = new FormData(event.currentTarget);
   formData.forEach((value, name) => {
    
      if (value  === '' || name === '') {
         alert('все поля должны быть заполнены')
      }
      else {
         data.value = value
         data.name = name
      }
      return data
   }
   )
}
// console.log(data)