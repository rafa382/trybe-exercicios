const a = 30;
const b = 87;

//Adição

console.log(a + b);

//Subtração

console.log(a - b);

//Multiplicação

console.log(a * b);

//Divisão

console.log(a / b);

//Módulo

console.log(a % b);

//Programa que retorna maior de dois números

const valor1 = 54;
const valor2 = 89;

console.log(Math.max(valor1, valor2));

//Programa que retorna maior de três números

const v1 = 43;
const v2 = 6;
const v3 = 3;

console.log(Math.max(v1, v2, v3));

//Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo,
//"negative" se for negativo e "zero" caso contrário.

const valor = 70;

if(valor>0){
    console.log("Positive")
}else if(valor<0){
    console.log("Negative")
}else{
    console.log("Zero")
}

//*Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo.
// Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum 
// ângulo for inválido o programa deve retornar uma mensagem de erro.

const ang1 = 60;
const ang2 = 60;
const ang3 = 60;

let somaAng = ang1 + ang2 + ang3;

if(somaAng==180){
    console.log(true);
}else if(somaAng>180){
    console.log(false);
}else{
    console.log("erro");
}

//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let nomeDaPeca = 'BISPO';


if(nomeDaPeca.toLowerCase() === 'rainha') {
    console.log('A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.');
}else if (nomeDaPeca.toLowerCase() === 'bispo') {
    console.log('O bispo move-se ao longo da diagonal. Não pode pular outras peças.');
}else{
    console.log('Erro');
}

// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

let nota = -3;

if(nota >= 90 && nota <= 100) {
    console.log('A')
}
else if(nota >= 80 && nota <= 100) {
    console.log('B')
}
else if(nota >= 70 && nota <= 100) {
    console.log('C')
}
else if(nota >= 60 && nota <= 100) {
    console.log('D')
}
else if(nota >= 50 && nota <= 100) {
    console.log('E')
}
else if(nota < 50 && nota >=0) {
    console.log('F')
}
else{
   console.log('Erro') 
}

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

const numero1 = 10;
const numero2 = 3;
const numero3 = 5;


if(numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0){
    console.log(true);
}else{
    console.log(false);
}

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

const n1 = 20;
const n2 = 40;
const n3 = 50;


if(n1 % 2 === 1 || n2 % 2 === 1 || n3 % 2 === 1){
    console.log(true);
}else{
    console.log(false);
}

// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e 
// seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do 
// produto) a empresa terá ao vender mil desses produtos.

const valorCusto = 500;
const valorVenda = 1600;
const impostoSobreOCusto = 0.2;


const valorCustoTotal = valorCusto + (impostoSobreOCusto * valorCusto) 

 const lucro = valorVenda - valorCustoTotal 

 console.log(lucro * 1000);

 if(valorCusto < 0) {
     console.log("Erro,valor menor que 0");
 }else if(valorVenda < 0) {
     console.log("impostoSobreOCusto");
 }


// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.
// Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

const salarioBruto = 5000;
let inss;
let salarioLiquido;

if(salarioBruto < 1556.94) {
    inss = salarioBruto *  0.08;
}
else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    inss = salarioBruto * 0.09;
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    inss = salarioBruto * 0.11;
}
else if(salarioBruto > 5189.82) {
    inss = 570.88
}




if( salarioBruto < 1903.98){
    const salarioBase = salarioBruto - inss;
    salarioLiquido = salarioBase;
}
else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05){
    const salarioBase = salarioBruto - inss;
    const ir = (salarioBase * 0.075) - 142.80;
    salarioLiquido = salarioBase - ir;    
}
else if(salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
    const salarioBase = salarioBruto - inss;
    const ir = (salarioBase * 0.15) - 354.80;
    salarioLiquido = salarioBase - ir;
}
else if(salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
    const salarioBase = salarioBruto - inss;
    const ir = (salarioBase * 0.225) - 636.13;
    salarioLiquido = salarioBase - ir;
}
else if (salarioBruto > 4.664,68) {
    const salarioBase = salarioBruto - inss;
    const ir = (salarioBase * 0.275) - 869.36;
    salarioLiquido = salarioBase - ir;
}
console.log(salarioLiquido);