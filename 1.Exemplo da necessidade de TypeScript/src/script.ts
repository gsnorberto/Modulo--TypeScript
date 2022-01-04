let numero1 = document.getElementById('numero1') as HTMLInputElement; //Vai se comportar como elemento de input do html.
let numero2 = document.getElementById('numero2') as HTMLInputElement;
let botao = document.getElementById('calcular');
let res = document.getElementById('resultado');

function calcular(num1: number, num2: number){
    return num1 + num2;
}

botao.addEventListener('click', function(){
    res.innerHTML = calcular( +numero1.value, +numero2.value ).toString(); // O "+" converte o número em inteiro, pois a função espera receber um número int. Depois de obter o resultado da função, é necessário convertê-lo em string pois é o formato suportado para inserir elelemntos na tag
}) 