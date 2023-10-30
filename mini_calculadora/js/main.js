
const operadores = document.querySelectorAll('.op')

const intervalo = ()=>{
	let numH1 = document.querySelector('.num_result')
	numH1.textContent = result;
	numH1.style.display = 'block'
	setInterval(()=>{
		numH1.style.display ='none';
	},3000)
}


	operadores.forEach((op)=>{
			
		op.addEventListener('click', ()=>{

			const input1 = document.querySelector('.num1');
			const input2 = document.querySelector('.num2');
			let num1 = parseInt(input1.value);
			let num2 = parseInt(input2.value);

			const suma = op.classList.contains('suma');
			const resta = op.classList.contains('resta');
			const division = op.classList.contains('division');
			const multiplicacion = op.classList.contains('mult');

			let resultado = document.querySelector('.result')
	
			if (input1.value === '' || input2.value === '') {
   				event.preventDefault();
    			result = '?';
    			intervalo()
  			}else{

  			if(suma){
  				
			  result = num1 + num2;
			  intervalo()
			}else if(resta){

			  result = num1 - num2;
			  intervalo()
			}else if(division){

			  result = num1 / num2;
			  intervalo()
			}else if(multiplicacion){

			  result = num1 * num2;
			  intervalo()
			}
				
			 resultado.textContent = result;
  			}
		})
	})

	

