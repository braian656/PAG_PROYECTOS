const colors = ['#22A699','#F2BE22','#F24C3D','#EEE2DE','#B31312','#2B2A4C','#1F6E8C','#0E3EDA','#B97A95','#26191B','#155E63',
	'#781C68','#47597E','#FEFF86','#2E112D','#B01C33','#235952','#4A772F','#FF0000','#FF4D00','#280B45','#85EB4E'];


const myButton = document.querySelector('.my_button');
const myColor = document.querySelector('.color');

const changeColor = ()=>{
	const randomColor = getColor();
	document.body.style.backgroundColor = colors[randomColor];
	myColor.textContent = colors[randomColor];
}

function getColor(){
	return Math.floor(Math.random()*colors.length);
}
myButton.addEventListener('click', changeColor);