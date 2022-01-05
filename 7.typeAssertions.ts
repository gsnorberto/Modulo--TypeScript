let idadeField = document.getElementById('idade') as HTMLInputElement;

console.log( idadeField.value ); // Por padrão, acontece um erro pois o TypeScript não pode ter a certeza de que "idadeField" é um input, Pois só o input tem a propriedade "value". Para corrigir isso, foi adicionado o "as HTMLInputElement" no final da sua declaração.