const input = document.querySelector('.input');

const button = document.querySelector('.btn');

const h1 = document.querySelector('.h1');

const capitalizacion = ()=>{


	let inputValue = input.value;


	if(inputValue !== ''){
		let splitValue = inputValue.split(' ');

	let capitalizar = splitValue.map((word)=>{
		let firstLetter = word.charAt(0).toUpperCase();
		let rest = word.slice(1).toLowerCase();

		return firstLetter + rest;
	})
	input.value = ''
	let joinString = capitalizar.join(' ');
	return h1.textContent = joinString

	}else{
		console.log('escribe algo')
	}
}


button.addEventListener('click', capitalizacion)