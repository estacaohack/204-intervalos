/**
  Exemplos de uso de funções de intervalo.
*/
let i = 0;

function incrementar(){
  i++;
  console.log(i);

  if(i > 10){
    clearInterval(intervalo);
  }
}

let intervalo = setInterval(incrementar, 4000);
// setTimeout(incrementar, 1000);
