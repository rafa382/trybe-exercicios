let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);

//somar valores do array

let soma = 0;

for(let i = 0; i < numbers.length;i+=1) {
    soma += numbers[i];
}

console.log(soma);

let quantidade = numbers.length; //media valores array

console.log(soma/quantidade);

///valor maior ou menor ou igual a 20

if(soma > 20) {
 console.log("valor maior que 20");
}else if (soma <= 20){
 console.log("valor menor ou igual a 20");
} 

//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maior = 0;

for (let i = 0; i < numbers.length; i+=1) {
    if(numbers[i] > maior){
    maior = numbers[i];    
}
}
console.log(maior);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, 
// imprima a mensagem: "nenhum valor ímpar encontrado";

let impar = 0;

for (let i = 0; i < numbers.length; i+=1) {
    if(numbers[i] % 2 === 1){
    impar = impar+1   
}
}
if(impar > 0) {
console.log(impar);
}
else{
        console.log("nenhum valor ímpar encontrado");
    }

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menor = 700;

for (let i = 0; i < numbers.length; i+=1) {
    if(numbers[i] < menor){
    menor = numbers[i];    
}
}
console.log(menor);

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let arr = [];

for(let i = 1; i < 26 ; i+=1) {
    arr.push(i/2);
}
console.log(arr);

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

