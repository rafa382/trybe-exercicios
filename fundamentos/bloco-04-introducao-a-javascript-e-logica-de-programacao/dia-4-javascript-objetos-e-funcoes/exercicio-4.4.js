let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    info2: {
        personagem2:'Tio Patinhas',
        origem2:'Christmas on Bear Mountain, Dell s Four Color Comics #178', 
        nota2: 'O último MacPatinhas' ,
        recorrente2: 'Ambos recorrentes',
       }
  };

//   1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
//    Valor esperado no console:
 
  console.log('Bem-vinda,' + info.personagem );


//   2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em 
//   seguida, imprima o objeto no console. Valor esperado no console:

info['recorrente'] = 'Sim';

console.log(info);

// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

for(let key in info){ 
 console.log(info);   
}

// 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado
//  no console:

for(let key in info) {
    console.log(info[key]);
}

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os 
// seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O 
// último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma 
// das chaves. Valor esperado no console:

console.log(info.personagem + ' '+'e'+' ' + info.info2.personagem2);
console.log (info.origem +' ' + 'e' + ' ' +info.info2.origem2);
console.log(info.nota+ ' ' +'e'+' '+ info.info2.nota2);
console.log(info.info2.recorrente2);

//PARTE 2
 
function verificaPalindromo(palindromo) {     
    for(var i = 0; i < palindromo.length / 2; i++)
    if (palindromo[i] != palindromo[palindromo.length - i - 1]){
    return false;}
    else{
    return true;
}   
}

console.log(verificaPalindromo('arara'));
console.log(verificaPalindromo("radar"));
console.log(verificaPalindromo("reviver"));
console.log(verificaPalindromo("palindromo"));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.


let arr = [2, 3, 6, 7, 10, 1];

function indexOfMax(arr) {
  if (arr.length === 0) {
      return -1;
  }

  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          maxIndex = i;
          max = arr[i];
      }
  }

  return maxIndex;
}