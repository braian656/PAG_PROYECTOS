const proyectos = [
	{
		id: 1,
		img: './imagenes/contador_palabras.png',
		ruta: './contadorDePalabras/index.html',
		title: 'Contador De Palabras',
	},
	{
		id: 2,
		img: './imagenes/cronometro.png',
		ruta: './cronometro/index.html',
		title: 'Cronometro',
	},
	{
		id: 3,
		img: './imagenes/dado.png',
		ruta: './dado0.1v/index.html',
		title: 'Un Dado!',
	},
	{
		id: 4,
		img: './imagenes/foco.png',
		ruta: './foquito_luz/index.html',
		title: 'Foco',
	},
	
	{
		id: 5,
		img: './imagenes/mini_calculadora.png',
		ruta: './mini_calculadora/index.html',
		title: 'Calculadora',
	},
	{
		id: 6,
		img: './imagenes/mini_galeria.png',
		ruta: './mini_galeria/index.html',
		title: 'Galeria',
	},
	{
		id: 7,
		img: './imagenes/capitalizar_palabras.png',
		ruta: './practica_2(capitalizar)/index.html',
		title: 'Capitalizar Palabras',
	},
	{
		id: 8,
		img: './imagenes/practica_3.png',
		ruta: './practica_3/index.html',
		title: 'Practica',
	},
	{
		id: 9,
		img: './imagenes/digital.png',
		ruta: './reloj_digital/index.html',
		title: 'Relog Digital',
	},
	{
		id: 10,
		img: './imagenes/slider.png',
		ruta: './slider_pelis/index.html',
		title: 'Slider',
	},
	{
		id: 11,
		img: './imagenes/tareas.png',
		ruta: './tarea/index.html',
		title: 'Tarea?',
	},
	{
		id: 12,
		img: './imagenes/Validar_contraseña_1.png',
		ruta: './validacionDeContraseña/index.html',
		title: 'Validar Contraseña',
	},
	{
		id: 13,
		img: './imagenes/validar_correo.png',
		ruta: './validarCorreo/index.html',
		title: 'Validar Correo',
	},
	{
		id: 14,
		img: './imagenes/calculadora.png',
		ruta: './calculadora/index.html',
		title: 'Calculadora',
	},
	{
		id: 15,
		img: './imagenes/cambiar_color.png',
		ruta: './cambiador_de_color/index.html',
		title: 'Change Color',
	}
	]



let boxCard = document.querySelector('.card_box')



let currentIndex = 0;
window.addEventListener('DOMContentLoaded', ()=>{
	cargarArchivos(currentIndex)
})

function cargarArchivos(){ 

		let misProyectos = proyectos.map((item)=>{
			return `<div class="card">
			  <div class="img">
				<img src=${item.img} alt="">
			  </div>
			  <div class="text">
			    <h1 class="title">${item.title}</h1>
			    <a href=${item.ruta}>Click</a>
			  </div>
		    </div>`
		})

		let joinProyectos = misProyectos.join('')


		boxCard.innerHTML = joinProyectos;
    
}



