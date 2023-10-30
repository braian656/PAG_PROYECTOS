const inputContraseña = document.querySelector('.contraseña');
const btn = document.querySelector('.btn');
const requerimientos = document.querySelectorAll('.requerimientos')


btn.addEventListener('click', aceptarContraseña)
inputContraseña.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        aceptarContraseña();
    }
});


function validarContraseña(password){

	let contieneMayus = /[A-Z]/.test(password);
	let contieneCharEspecial = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(password);

	if(password.length < 8){
		
		contraseñaInvalida()
	}else{
		if(!contieneMayus){

		contraseñaInvalida()
		return false
	}
		if(!contieneCharEspecial){
		contraseñaInvalida()
		return false
		
	}
	contraseñaValida()
	return true
	}
}


function aceptarContraseña(){
	let contraseña = inputContraseña.value;
	validarContraseña(contraseña)
	
}

function contraseñaInvalida(){
	requerimientos.forEach((item)=>{
		item.style.color = 'red'
		setTimeout(()=>{
			item.style.color = '#000'
		},2000)
	})
}

function contraseñaValida(){
	
	requerimientos.forEach((item)=>{
		item.classList.add('valido')
	})

}
