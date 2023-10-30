const num = document.querySelector('.num_h1');

const btnIniciar = document.querySelector('.icon-tabler-player-play-filled');
const btnPausa = document.querySelector('.icon-tabler-player-pause-filled');
const btnReiniciar = document.querySelector('.icon-tabler-refresh');

btnIniciar.addEventListener('click', play);
btnPausa.addEventListener('click', pause);
btnReiniciar.addEventListener('click', restart);


let start = 0;
let count;



function play(){
	
	count = setInterval(()=>{
		start++
		let minutes = Math.floor(start / 60);
		let remainingSeconds = start % 60;
		const formattedTime = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
		num.textContent  = formattedTime;
}, 1000)

	btnIniciar.classList.add('red');
	btnPausa.classList.remove('red');
}


function pause(){
	btnIniciar.classList.remove('red');
	btnPausa.classList.add('red');
	clearInterval(count);
}


function restart(){
	btnIniciar.classList.remove('red');
	btnPausa.classList.remove('red');
	start = 0
	num.textContent = start
}



