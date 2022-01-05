//A finalidade principal do type é de organizar melhor seu código.

//Type e interface funcionam de forma quase igual
//A diferença é que o type não é modificável, ou seja, não consegue colocar propriedades novas.

type User = {
    nome: string,
    idade: number
}

// interface User {
//     nome: string,
//     idade: number
// }

//*********************************************/

//Em vez disso
// function resumo(usuario: {nome: string, idade: number}){
//     return `Olá ${usuario.nome}, você tem ${usuario.idade} anos`
// }

//Use isso
function resumo(usuario: User){
    return `Olá ${usuario.nome}, você tem ${usuario.idade} anos`
}

resumo({
    nome: 'Gabriel',
    idade: 90,
})