const nombre = document.querySelector('#nombre');
const email = document.querySelector('#mail');
const materia = document.querySelector('#materia');
const buttonEnviar = document.querySelector('.btn');
const tuMateria = document.querySelector('.tu_materia')
buttonEnviar.addEventListener('click', enviarForm)

const alumno = {}

function enviarForm(e){
   e.preventDefault()
  let name = nombre.value;
  let correo = email.value;
  let asignatura = materia.value
  
  if(name === '' || correo === '' || asignatura === ''){
    return console.log('Por favor LLena todos los campos')
 
  }else{
    alumno.nombre = name;
    alumno.materia = asignatura;
     tuMateria.textContent = `Tu mesa, con la materia ${alumno.materia}, ya casi esta`
    if(validarCorreo(alumno.correo = correo)){
      return true
    }else{
      console.log('ingrese un correo Valido')
    }
  }
 
}

function validarCorreo(correo){
   var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(correo)
}