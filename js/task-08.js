document.querySelector('.login-form')
.addEventListener('submit', checkForm);
const data = {}
function checkForm(ev) {
   const event = document.getElementsByClassName('.login-form')
   ev.preventDefult();
   
   const dataEmail = event.email.value;
   const dataPaswword = event.password.value;
   if (dataEmail === ''||dataPaswword === '') {
      alert('eror can read on property')
   } else {
      data.email = dataEmail;
      data.paswword = dataPaswword;
   }
   
   
   return data

}
   

