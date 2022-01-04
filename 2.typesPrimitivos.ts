let nome: string = "Gabriel";

let idade: number = 11;

let boleano: boolean = false;

let nomes: string[] = ['boniecky', 'Gabriel', 'sara']

let idades: number[] = [1,2,3,4]
let idades2: Array<number> = [1,2,3,4] // Outra forma de declarar. Raramente usada


// O "any" ignora as verificações de tipagem
let nomes2: any[] = ['boniecky', 'Gabriel', 'sara']
nomes2.push(556);