// 1.Adicionar o array;
// 2.Criar uma variável com valor 0;
// 3.Criar um loop que percorre o array;
// 4.Incrementar a variável com o valor correspondente a cada loop;
// 5.Criar um if com a condição da variável ser maior que 15;
// 6.Caso a variável obedeça a condição;
// 6.1.Imprimir a variável
// 7.Caso não obedeça a condição;
// 7.1.Imprimir a mensagem "valor menor que 16"

let fruits = [3,4,10,1,12];
let sum = 0;

for(let index = 0;index < fruits.length; index += 1){
    sum += fruits[index];
}
if(sum > 15){
console.log(sum);
}else{
console.log('Valor menor que 16');
}


// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, 
// seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.


let asteriscos = "*****"

for(let n = 1; n <= 5; n += 1){
    console.log(asteriscos)
}

