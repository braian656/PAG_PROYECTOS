const buttons = document.querySelectorAll('.btn_bulb');

buttons.forEach((btn)=>{
	const foco = document.querySelector('.bulb')
	btn.addEventListener('click', ()=>{
		if(btn.classList.contains('light')){
			foco.classList.add('on');
			
		}else{
			foco.classList.remove('on');
			
		}
	})
})