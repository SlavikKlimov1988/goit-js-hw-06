document.querySelector('.login-form')
.addEventListener('submit', checkForm);
const data = {}
function checkForm(evt) {

   evt.preventDefault();
   
   const dataEmail = evt.currentTarget.email.value;
   console.dir(evt.currentTarget.email.value)
   const dataPaswword = evt.currentTarget.password.value;
   if (dataEmail === '' || dataPaswword === '') {
      alert('eror can read on property')
   } else {
      data.email = dataEmail;
      data.paswword = dataPaswword;
   }
   
   
   return data

}
   

