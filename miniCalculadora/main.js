const btnResult = document.querySelector('.btn-result');
let op1 = document.querySelector('.op1');
let op2 = document.querySelector('.op2');
let operando = document.querySelector('.operando');
let resultOP = document.querySelector('.result');
console.log('deberia funcionar no?')

btnResult.addEventListener('click',calcular);

function calcular(){
  let operador1 = parseInt(op1.value);
  let operador2 = parseInt(op2.value);
  let op = operando.value;
  if(op == '+' || op == '-' || op == '/' || op == '*' || op == '%'){
    let result
    switch(op){
      case '/':
        result = operador1 / operador2;
        console.log(result)
        break;
        case '-':
        result = operador1 - operador2;
        console.log(result)
        break;
        case '+':
        result = operador1 + operador2;
        console.log(result)
        break;
        case '*':
        result = operador1 * operador2;
        console.log(result)
        break;
        case '%':
        result = operador1 % operador2;
        console.log(result)
        break;
    }

    const colorR = Math.floor(Math.random() * 256);
    const colorG = Math.floor(Math.random() * 256);
    const colorB = Math.floor(Math.random() * 256);

    resultOP.style.color = `rgb(${colorR}, ${colorG}, ${colorB})`
    
    resultOP.textContent = result;
  }

}