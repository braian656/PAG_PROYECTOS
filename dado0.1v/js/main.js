const buttonRandom = document.querySelector('.btn_random');
const carasDado = document.querySelector('.img_dado');
const buttonSave = document.querySelector('.btn_save');
const boxDatos = document.querySelector('.box_show');


let dado = [

	'./img/dado/cara_1.png',
	'./img/dado/cara_2.png',
	'./img/dado/cara_3.png',
	'./img/dado/cara_4.png',
	'./img/dado/cara_5.png',
	'./img/dado/cara_6.png'

	]


buttonSave.addEventListener('click', guardarDatos);

	let clases = [];
	let values = [];

function guardarDatos(){
	const inputs = document.querySelectorAll('input');
	const inputVacio = document.querySelector('.input_empty')
	inputs.forEach((input)=>{
		
		if(input.value === ''){
			inputVacio.style.display = 'block';
			inputVacio.style.opacity = '1';
			setTimeout(()=>{
				inputVacio.style.opacity = '0';
				inputVacio.style.display = 'none';
			},2000)
		}else{
			clases.push(input.classList.value);
			values.push(input.value);
			boxDatos.style.display = 'none'
		}

	})
	
}


buttonRandom.addEventListener('click', ()=>{
	const dice = document.querySelector('.dice');
	const h2 = document.querySelector('.h2')
	const randomNum = Math.floor(Math.random() * 6)+ 1;

	
	buttonRandom.style.animation = 'temblor 0.5s infinite'
	dice.style.animation = 'roll 1s ease-in-out';
	dice.style.transform = 'rotateY(720deg)';

	

	setTimeout(()=>{
		  h2.style.display = 'flex'
		if(randomNum === 1){
			h2.innerText = values[0]
			carasDado.src = dado[0];

		}else if(randomNum === 2){
			
			h2.innerText = values[1];
			carasDado.src = dado[1]

		}else if(randomNum === 3){

			h2.innerText = values[2];
			carasDado.src = dado[2]

		}else if(randomNum === 4){

			h2.innerText = values[3];
			carasDado.src = dado[3]

		}else if(randomNum === 5){

			h2.innerText = values[4];
			carasDado.src = dado[4]

		}else if(randomNum === 6){

			h2.innerText = values[5];
			carasDado.src = dado[5]

		}
        
        buttonRandom.style.animation = ''		

		dice.style.animation = '';

		dice.style.transform = '';
	},1000)
})