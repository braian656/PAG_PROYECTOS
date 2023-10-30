const correo = document.querySelector('.input_email');
const confirmCorreo = document.querySelector('.input_confirm');
const button = document.querySelector('.guardar');
const result = document.querySelector('.result')


button.addEventListener('click', ()=>{
  let usuarioEmail = correo.value;
  let confirmar = confirmCorreo.value;
  if(usuarioEmail !== confirmar){
    return result.textContent = 'Tus correos no coinciden'
  }


  if(verificarMail(usuarioEmail, confirmar)){
    result.classList.remove('red');
    result.classList.add('green');
    result.textContent = `Correo ${confirmar} confirmado`;
  }else{
    result.classList.remove('green');
    result.classList.add('red');
    result.textContent ='Correo Invalido';
  }
  
  
})

function verificarMail(mail, confirmMail){
   var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(mail), regex.test(confirmMail)
}