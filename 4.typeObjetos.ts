//propriedade opicional "?"
function resumo(usuario: {nome:string, idade?: number}){
    return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`
}

let u = {
    nome: 'Gabriel',
    idade: 25
}

resumo(u);