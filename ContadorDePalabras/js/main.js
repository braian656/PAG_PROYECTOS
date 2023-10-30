const input = document.querySelector('.input');
const contador = document.querySelector('.result');

input.addEventListener('input',()=>{
	let palabras = input.value;
	let cortar = palabras.split(' ');
	let contarPalabras = cortar.length;

	contador.textContent = contarPalabras;
})