const inputDisplay = document.querySelector('.input');
const boxBtn = document.querySelector('.buttons');

boxBtn.addEventListener('click',(e)=>{
    const btnTarget = e.target;

    if(!btnTarget.classList.contains('btn')) return;

    const btnValue = btnTarget.dataset.value;
    if(btnTarget.classList.contains('clear-input')){
        inputDisplay.value = '';
    }else if(btnTarget.classList.contains('delete')){
        inputDisplay.value = inputDisplay.value.slice(0,-1);
    }else if(btnTarget.classList.contains('igual')){
        try{
            const result = eval(inputDisplay.value);
            inputDisplay.value = result
        }catch(error){
            inputDisplay.value = 'sintax error'
        }
    }
    else{
        inputDisplay.value += btnValue
    }
})