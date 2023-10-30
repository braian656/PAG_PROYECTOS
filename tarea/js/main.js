const button = document.querySelector('.btn');
const input = document.querySelector('.input');
const box = document.querySelector('.box_guardar')

let value = [];

button.addEventListener('click', ()=>{
	
	let tarea = input.value;
	if (tarea === '') {
		input.value = 'ESCRIBE UNA TAREA'
		button.style.display = 'none'
			setTimeout(function(){
				input.value = ''
				button.style.display = 'block'
				},2000)
	}else{
	value.push(tarea)
	input.value = ''

	let crearBox = value.map((item)=>{
		return `<div class="box_tarea">
			  <h2 class="tarea">${item}</h2>
			  <button class="btn_tarea check">
			  	<i class="fa-solid fa-check"></i>
			  </button>
			 	<button class="btn_tarea cerrar">
			  	<i class="fa-solid fa-xmark"></i>
			  </button>
		    </div>`

	})	
		crearBox = crearBox.join('')
		box.innerHTML = crearBox
		checkearBtn();
	}
	
})



function checkearBtn(){
	const buttons = document.querySelectorAll('.btn_tarea');
	
	buttons.forEach((btn)=>{
		btn.addEventListener('click', (e)=>{
			let btnSelect = e.currentTarget;
			let box = e.currentTarget.parentElement;
			box.classList.add('show_box')
			box.classList.add('green')
			if (btnSelect.classList.contains('cerrar')) {
				
			const caja = event.target.closest('.box_tarea'); // Encuentra el elemento .box_tarea más cercano
 				 if (caja) {
   					 caja.remove(); // Elimina la caja del DOM
   					 value = []
  					}
			}
			
		})
	})
}


