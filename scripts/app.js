let screenElement = document.getElementById('screen')
let buttonNumber0 = document.getElementById('number0')
let buttonNumber1 = document.getElementById('number1')
let buttonNumber2 = document.getElementById('number2')
let buttonNumber3 = document.getElementById('number3')
let buttonNumber4 = document.getElementById('number4')
let buttonNumber5 = document.getElementById('number5')
let buttonNumber6 = document.getElementById('number6')
let buttonNumber7 = document.getElementById('number7')
let buttonNumber8 = document.getElementById('number8')
let buttonNumber9 = document.getElementById('number9')
let buttonPlus = document.getElementById('plus')
let buttonMinus = document.getElementById('minus')
let buttonTimes = document.getElementById('times')
let buttonDivide = document.getElementById('divide')
let buttonEquals = document.getElementById('equals')
let buttonPercent = document.getElementById('percent')
let buttonC = document.getElementById('C')
let digitoOperation = false


const buttonClick = (event)=>{
    let digitoNumber = parseInt(event.target.innerText)
   if (screenElement.innerText === '0' && digitoNumber){
        screenElement.innerText = event.target.innerText
   }else{ 
     if(!digitoNumber){
        if (isNaN(digitoOperation)){ //Se o próximo digito for uma operação, substitui
            screenElement.innerText = screenElement.innerText.slice(0,-1) + event.target.innerText
        }else{
            screenElement.innerText += event.target.innerText
        }
                          
      }else{
        screenElement.innerText += event.target.innerText   
      }
      digitoOperation = parseInt(event.target.innerText)
   }
}

const cleanerDisplay = ()=>{
    screenElement.innerText = '0'
}

const equalsDisplay = (event) =>{
    screenElement.innerText = eval(screenElement.innerText)
}


buttonNumber0.addEventListener('click',buttonClick)
buttonNumber1.addEventListener('click',buttonClick)
buttonNumber2.addEventListener('click',buttonClick)
buttonNumber3.addEventListener('click',buttonClick)
buttonNumber4.addEventListener('click',buttonClick)
buttonNumber5.addEventListener('click',buttonClick)
buttonNumber6.addEventListener('click',buttonClick)
buttonNumber7.addEventListener('click',buttonClick)
buttonNumber8.addEventListener('click',buttonClick)
buttonNumber9.addEventListener('click',buttonClick)
buttonPlus.addEventListener('click',buttonClick)
buttonMinus.addEventListener('click',buttonClick)
buttonTimes.addEventListener('click',buttonClick)
buttonDivide.addEventListener('click',buttonClick)
buttonEquals.addEventListener('click',equalsDisplay)
buttonPercent.addEventListener('click',buttonClick)
buttonC.addEventListener('click',cleanerDisplay)