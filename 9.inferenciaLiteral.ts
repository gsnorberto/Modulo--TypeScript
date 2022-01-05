function fazerRequisicao(url: string, method: 'GET' | 'POST'){
    // ..... 
}

type Methods = 'GET' | 'POST'; // O TS recomenda a utilização desse type para limitar o tipo de entrada para o "method" abaixo. Prevenindo que o usuário entre com um valor diferente de 'GET' e 'POST', já que a função acima exige como parâmetro um desses dois tipos.

let url = "https://www.google.com"
let method: Methods = 'GET'

fazerRequisicao(url, method)