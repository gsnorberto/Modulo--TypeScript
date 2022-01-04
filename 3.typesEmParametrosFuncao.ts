//primeira letra maiúscula e o resto minúscula
//Recebe String como parâmetro de função e retorna string também
function firstLetterUpperCase(name: string): string {
    let firstLetter = name.charAt(0).toUpperCase();
    return firstLetter+name.substring(1);
}

//let nome: number = firstLetterUpperCase('gabriel')