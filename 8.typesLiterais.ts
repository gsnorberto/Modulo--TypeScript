//Só aceita o tipo específico declarado.
//No exemplo abaixo, nome só aceita o valor "Gabriel"
let nome: 'Gabriel' = 'Gabriel';


//***********************************************************


function mostrarTexto(texto: string, alinhamento: 'left' | 'right' | 'center'){

}

mostrarTexto('Boniecky', 'left');
mostrarTexto('Boniecky', 'right');
//mostrarTexto('Boniecky', 'blabla'); // Só aceita os tipos literais definidos nos parâmetros da função

// ***********************************************************


type VerdadeiroOuFalso = true | false

function temNome(nome: string): VerdadeiroOuFalso{ // O retorno só pode ser true ou false
    if(nome !== ''){
        return true;
    } else {
        return false;
    }
}
