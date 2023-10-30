const reloj = document.querySelector('.reloj');

function fecha(){
	const horaActual = conseguirFecha();

	reloj.textContent = horaActual;
}


function conseguirFecha(){
	const fecha = new Date();
	const hora = ceroIzquierda(fecha.getHours());
	const minutos = ceroIzquierda(fecha.getMinutes());
	const segundos = ceroIzquierda(fecha.getSeconds());
	return `${hora}:${minutos}:${segundos}`
}


function ceroIzquierda(n){
	return n < 10 ? '0' + n : n;
}

setInterval(fecha, 1000)