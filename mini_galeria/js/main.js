	const carousel = document.querySelector('.container_img');
	const imagenes = document.querySelectorAll('img');
	const btnPrev = document.querySelector('.prev');
	const btnNext = document.querySelector('.next');
	const widthImagen = imagenes[0].clientWidth;

	let currentCount = 0;

const previous = ()=>{
	
	if(currentCount <= 0) return;
	currentCount--
	carousel.style.transform = `translateX(${-widthImagen * currentCount}px)`
}

const next = ()=>{
	if(currentCount >= imagenes.length -1) return;
	currentCount++
	carousel.style.transform = `translateX(${-widthImagen * currentCount}px)`
}
btnPrev.addEventListener('click', previous);
btnNext.addEventListener('click', next);