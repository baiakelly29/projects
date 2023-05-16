let resultadoFinal = 0
let valorClicado = '0'
let operadorAnterior;

let screen = document.querySelector('.screen');

buttonClick = (valor)=>{
    if(isNaN(valor)){
        funcaoOperador(valor)
    }else{
        operacaoNumerica(valor);
    }
    screen.innerText = valorClicado;
}

funcaoOperador = (simbolo)=>{
    switch (simbolo){
        case 'C':
            valorClicado = '0';
            resultadoFinal = 0;
            break;
        case '←':
            if(valorClicado==='0'){

            }
        case '=':
            if(operadorAnterior == null){
                return;
            }
            operacoes()
            operadorAnterior = null
            valorClicado = resultadoFinal;
            resultadoFinal = 0
    }
}

receberNumero = (numero)=>{

}
operacoes = () =>{

}

init = ()=>{
    document.querySelector('.calc-buttons').addEventListener('click',function(event){
        buttonClick(event.target.innerText)
        
    })
}

init();

