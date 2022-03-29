//++++++++++++++++++++++++++++++++++++++++++++++++++ESTRUTURA SEQUENCIAL++++++++++++++++++++++++++++++++++++++++++++++++++

// 1-Crie um script que leia o nome da pessoa e mostre o nome dela em um alert() e no console 

/*
let nome = prompt("Escreva seu nome");

alert("Seu nome é " +nome);
console.log(nome);
*/

//________________________________________________________________________________________________________________________

// 2-Crie um script que leia do usuário dois números e mostre a soma desses dois números.

/*
let num1 = parseInt(prompt("Digite um numero"));
let num2 = parseInt(prompt("Digite outro numero"));

let soma = num1 + num2;

alert("O resultado da sua soma é " + soma)
console.log(soma);
*/

//________________________________________________________________________________________________________________________

// 3-Crie um script que leia duas notas do usuário e calcule a média do aluno.

/*
let nota1 = parseInt(prompt("Digite sua primeira nota"));
let nota2 = parseInt(prompt("Digite a sua segunda nota"));

let media = (nota1 + nota2) / 2;

alert("A sua média é " + media);
console.log(media);
*/

//________________________________________________________________________________________________________________________

// 4-Crie um programa leia o ano em que o usuário nasceu e diga a idade atual dele.

/*
let anoNascimento = parseInt(prompt("Digite o ano do seu nascimento"));
let hoje = new Date();
let anoAtual = hoje.getFullYear();
let idade = anoAtual - anoNascimento;

alert("Sua idade é " + idade);
console.log(idade);
*/

//________________________________________________________________________________________________________________________

// 5-Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

/*
let salarioHora = parseInt(prompt("Digite o seu salário por hora"));
let horasTrabalhadas = parseInt(prompt("Digite a horas trabalhadas no mês"));

let salario = salarioHora * horasTrabalhadas

alert("Seu salário do mês foi " + salario);
console.log(salario);
*/

//________________________________________________________________________________________________________________________

// 6-Faça um script que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.    C = 5 * ((F-32) / 9).

/*
const grauFahrenheit = parseInt(prompt("Digite um grau em Fahrenheit"));

const grauCelsius = 5 * ((grauFahrenheit - 32) /9);

alert(`${grauFahrenheit} Fahrenheit é igual a ${grauCelsius} graus Celsius`);
*/







//++++++++++++++++++++++++++++++++++++++++++++++++++ESTRUTURA DE DECISÃO++++++++++++++++++++++++++++++++++++++++++++++++++

// 1-Faça um Programa que peça dois números e imprima o maior deles.

/*
let num1 = parseInt(prompt("Digite um numero"));
let num2 = parseInt(prompt("Digite outro numero"));

if (num1 > num2) {
  alert(`${num1} é o maior número`);
} else if (num1 < num2) {
  alert(`${num2} é o maior número`);
} else {
  alert("Os números são iguais");
}
*/

//________________________________________________________________________________________________________________________

// 2-Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.

/*
let valor = parseInt(prompt("Digite um valor"));

if(valor <= 0){
  alert("Esse número é negativo");
  console.log("Esse número é negativo");
} else{
  alert("Esse número é positivo");
  console.log("Esse número é positivo");
}
*/

//________________________________________________________________________________________________________________________

// 3-Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.

/*
let letra = prompt("Digite uma letra");

if (letra === "F" || letra === "f") {
  console.log("Feminino");
}
else if (letra === "M" || letra === "m") {
  console.log("Masculino")
} else {
  alert("Inválido");
  console.log("Inválido");
}
*/

//________________________________________________________________________________________________________________________

// 4-Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
// 1.	A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// 2.	A mensagem "Reprovado", se a média for menor do que sete;
// 3.	A mensagem "Aprovado com Distinção", se a média for igual a dez.

/*
let num1 = parseInt(prompt("Digite a nota 1")) 
let num2 = parseInt(prompt("Digite a nota 2"))
let media = ((num1+num2) / 2)


//4.1
if(media >= 7 && media <= 10){
  console.log(media + " = Aprovado")
}
//4.2
else if(media < 7 && media >= 0){
  console.log(media + " = Reprovado")
}
//4.3
else if(media === 10){
  console.log(media + " = Aprovado com Distinção")
}
else{
  console.log("Média inválida. Notas 1 e 2 devem ser de 0 a 10")
}
*/

//________________________________________________________________________________________________________________________

// 5-Faça um Programa que leia três números e mostre o maior e o menor deles.

/*
let num1 = parseInt(prompt("Digite o primeiro numero"))
let num2 = parseInt(prompt("Digite o segundo numero"))
let num3 = parseInt(prompt("Digite o terceiro numero"))

if( num1<num2 && num1<num3){
  console.log("Esse foi o menor número " + num1)
}
else if( num2<num1 && num2<num3){
  console.log("Esse foi o menor número " + num2)
}
else if( num3<num1 && num3<num2){
  console.log("Esse foi o menor número " + num3)
}
if( num1>num2 && num1>num3){
  console.log("Esse foi o maior número " + num1)
}
else if( num2>num1 && num2>num3){
  console.log("Esse foi o maior número " + num2)
}
else{
  console.log("Esse foi o maior número " + num3)
}
*/

//________________________________________________________________________________________________________________________

// 6-Faça um Programa que leia dois números e mostre se ele é par ou ímpar.

/*
let num = parseInt(prompt("Digite um numero"))

if( num % 2 === 0){
    console.log("Esse número é par")
}
else{
    console.log("Esse número é impar")
}
*/

//________________________________________________________________________________________________________________________





//++++++++++++++++++++++++++++++++++++++++++++++++++ESTRUTURA DE REPETIÇÃO++++++++++++++++++++++++++++++++++++++++++++++++++


// 1-Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

/*
let nota = prompt("Digite uma nota");
while (true) {
  let nota = prompt("Digite uma nota");
  if (nota >= 0 && nota <= 10) {
    alert("Sua nota é: " + nota)
    break;

  }
  else {
    alert("Nota inválida")
  }
}
*/

//________________________________________________________________________________________________________________________

// 2-MOSTRAR DIFERENÇA ENTRE VAR E LET

/*
var nota = prompt("Digite uma nota");
while (true) {
  var nota = prompt("Digite uma nota");
  if (nota >= 0 && nota <= 10) {
    alert("Sua nota é: " + nota)
    break;

  }
  else {
    alert("Nota inválida")
  }
}
*/

//________________________________________________________________________________________________________________________

// 3-Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

/*
let erro = false;
let usuario, senha;

do {
  usuario = prompt("Escreva seu nome");
  senha = prompt("Digite sua senha");

  if (usuario == senha) {
    erro = true;
    alert("ERRO")
  } else {
    erro = false;
  }
} while (erro);

alert("Cadastro realizado");
*/

//________________________________________________________________________________________________________________________

// 4-Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro.

/*
for (let i = 1; i <= 20; i++) {
  console.log(i);
*/

//________________________________________________________________________________________________________________________

// 5-Faça um programa que leia 5 números e informe o maior número.

/*
let maior = 0;
for (let i = 1; i <= 5; i++) {
  let imput = parseInt(prompt("Digite um numero"));
  if (i === 0) {
    maior = imput;
  }
  if (imput > maior) {
    maior = imput;
  }
}
alert(maior);
*/

//________________________________________________________________________________________________________________________

// 6-Faça um programa que leia 5 números e informe a soma e a média dos números.

/*
let soma = 0;
let media = 0;

for (let i = 1; i <= 5; i++) {
  let numero = parseInt(prompt("Digite um numero"));
  soma += numero
}
media = soma / 5
console.log("A soma dos números é: " + soma);
console.log("A média dos números é: " + media);
*/

//________________________________________________________________________________________________________________________

// 7-Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.

/*
for (let i = 1; i <= 50; i += 2) {
  console.log(i);
*/

//________________________________________________________________________________________________________________________

// 8-Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:
// a.Tabuada de 5:
// b.	5 X 1 = 5
// c.	5 X 2 = 10
// d.	...
// e.	5 X 10 = 50

/*
let numero = prompt("Digite um numero para saber sua tabuada:")
console.log("a. Tabuada de " + numero + " é:");
for (let i = 1; i <= 10; i++) {
  console.log(numero + "x" + i + " = " + numero * [i]);
}
*/

//________________________________________________________________________________________________________________________





//++++++++++++++++++++++++++++++++++++++++++++++++++DESAFIO FIZBUZZ++++++++++++++++++++++++++++++++++++++++++++++++++

// 9-Dado um número n, para cada número entre 1 e 100, imprime um valor por linha da seguinte maneira:
// Se i for múltiplo de 3 e 5, imprima o FizzBuzz.
// Se i for múltiplo de 3(mas não de 5), imprima o Fizz.
// Se i for múltiplo de 5(mas não de 3), imprima o Buzz.
// Se i não for múltiplo de 3 ou 5, imprima o valor de i.

/*
for (let i = 0; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("O numero é multiplo de 3 e 5: " + i + " FizzBuzz");
  }
  else if (i % 3 == 0 && i % 5 != 0) {
    console.log("O numero é multiplo de 3 mas não de 5: " + i + "Fizz");
  }
  else if (i % 3 != 0 && i % 5 == 0) {
    console.log("O numero é multiplo de 5 mas não de 3: " + i + "Buzz");
  }
  else if (i % 3 != 0 && i % 5 != 0) {
    console.log("O numero não é multiplo de 3 e 5: " + i);
  }
}
*/

//________________________________________________________________________________________________________________________





//++++++++++++++++++++++++++++++++++++++++++++++++++EXERCÍCIOS SOBRE LISTAS++++++++++++++++++++++++++++++++++++++++++++++++++

// 1-Faça um Programa que leia um vetor de 5 números inteiros e mostre-os.

/*
let numeros = [];
for (let i = 0; i < 5; i++) {
  let numero = prompt("Digite um numero");
  numeros.push(numero);
}
console.log(numeros);
*/

//________________________________________________________________________________________________________________________

// 2-Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.

/*
let numeros = [];
for (let i = 0; i < 10; i++) {
  let numero = prompt("Digite um numero")
  numeros.push(numero)
}
for (let i = numeros.length - 1; i >= 0; i--) {
  console.log(numeros[i])
}
*/

//________________________________________________________________________________________________________________________

// 3-Faça um Programa que leia 4 notas, mostre as notas e a média na tela.

/*
let notas = [];
let soma = 0;
let media = 0;
for (let i = 0; i < 4; i++) {
  let nota = parseInt(prompt("Digite uma nota"));
  notas.push(nota);
  soma += nota
}
console.log("Notas informadas:");
for (let i = 0; i < 4; i++) {
  console.log(notas[i]);
}
media = (soma / 4);
console.log("Media das notas: " + media);
*/

//________________________________________________________________________________________________________________________

// 4-Faça um Programa que leia um vetor de 10 caracteres, e diga quantas consoantes foram lidas. Imprima as consoantes.

/*
let vogais = [];
let consoantes = [];
let soma_consoantes = 0
for (let i = 0; i < 10; i++) {
  let letra = (prompt("Digite uma letra"));
  if (letra == 'a' || letra == 'A' || letra == 'e' || letra == 'E' || letra == 'i' || letra == 'I' || letra == 'o' || letra == 'O' || letra == 'u' || letra == 'U') {
    vogais.push(letra);
  }
  else {
    consoantes.push(letra);
    soma_consoantes++
  }
}
console.log("Foi lido: " + soma_consoantes + " consoantes");
console.log("Consoantes lidas: " + consoantes);
*/

//________________________________________________________________________________________________________________________

// 5-Faça um Programa que leia 20 números inteiros e armazene-os num vetor. Armazene os números pares no vetor PAR e os números IMPARES no vetor ímpar. Imprima os três vetores.

/*
let numeros_inteiros = [];
let pares = [];
let impares = [];
for (let i = 0; i < 20; i++) {
  let numero = parseInt(prompt("Digite um numero"))
  numeros_inteiros.push(numero)
  if (numero % 2 === 0) {
    pares.push(numero);
  }
  else {
    impares.push(numero);
  }
}
console.log("Numeros digitados: " + numeros_inteiros);
console.log("Numeros pares: " + pares);
console.log("Numeros ímpares: " + impares);
*/

//________________________________________________________________________________________________________________________

// 6-Faça um Programa que peça as quatro notas de 10 alunos, calcule e armazene num vetor a média de cada aluno, imprima o número de alunos com média maior ou igual a 7.0.

/*
let somaNota = 0;
const mediaAlunos = [];
let mediaAluno = 0;
//laço for para os 10 alunos
for (let i = 1; i <= 10; i++) {
  somaNota = 0;
  //laço for para as 4 notas de cada aluno
  for (let j = 1; j <= 4; j++) {
    const nota = parseInt(prompt(`Digite a ${j}ª nota do aluno ${i}`));
    somaNota += nota;
  }
  mediaAluno = somaNota / 4;
  mediaAlunos.push(mediaAluno);
}

const mediasMaior7 = [];
for (let i = 0; i < mediaAlunos.length; i++) {
  if (mediaAlunos[i] >= 7) {
    mediasMaior7.push(mediaAlunos[i]);
  }
}

alert(`Número de alunos com média maior ou igual a 7.0 é ${mediasMaior7.length}`);
*/

//________________________________________________________________________________________________________________________

// 7-Faça um Programa que leia um vetor de 5 números inteiros, mostre a soma, a multiplicação e os números.

/*
let numerosInteiros = [];
let soma = 0
let multiplicacao = 1;
for (let i = 0; i < 5; i++) {
  let numero = parseInt(prompt("Digite um numero"))
  numerosInteiros.push(numero)
  soma += numero
  multiplicacao *= numero;
}
console.log(`Numeros digitados: ${numerosInteiros}`);
console.log(`Soma dos numeros: ${soma}`);
console.log(`Multiplicação dos numeros: ${multiplicacao}`);
*/

//________________________________________________________________________________________________________________________

// 8-Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo vetor. Imprima a idade e a altura na ordem inversa a ordem lida.

/*
let idades = []
let alturas = []
for (let j = 1; j <= 5; j++) {
  let idade = parseInt(prompt(`Digite a idade da  ${j} ª pessoa`));
  idades.push(idade);
  let altura = parseInt(prompt(`Digite a altura da  ${j} ª pessoa`));
  alturas.push(altura);
}
console.log("Idades na ordem inversa:");
for (let i = idades.length - 1; i >= 0; i--) {
  console.log(idades[i]);
}
console.log("Alturas na ordem inversa:");
for (let i = alturas.length - 1; i >= 0; i--) {
  console.log(alturas[i]);
}
*/

//________________________________________________________________________________________________________________________

// 9-O instrutor deve elaborar esse programa.
// Cria um script que receba o nome de várias pessoas até o usuário desejar parar o programa, bote o nome dessas pessoas em uma lista e sorteie uma dessas pessoas para pagar o churrasco.
// O output do código deve ter o seguinte formato:
// “{nomeDaPessoa} foi sorteada para pagar o churrasco!”

/*
var nomes = [];
var i = 0;
while (true) {
  nomes.push(prompt("Digite um nome ou 0 para parar"));

  if (parseInt(nomes[i]) === 0) {
    nomes.pop(nomes[i]);
    break;
  }
  i++;
}
i = Math.floor(Math.random() * nomes.length);
console.log(nomes[i] + " foi sorteada para pagar o churrasco!");
*/

//________________________________________________________________________________________________________________________

// 10-Cria um script que receba o nome de várias pessoas até o usuário desejar parar o programa, bote o nome dessas pessoas em uma lista e sorteie duas dessas pessoas para te dar um presente.
// As pessoas não podem ser repetidas.
// O output do código deve ter o seguinte formato:
// “{nomeDaPessoa} e { nomeDaOutra } foram sorteados para te dar um presente!”

/*
let pessoasSorteio = [];
let i = 0;
let num_1 = 0
let num_2 = 0
while (true) {
  pessoasSorteio.push(prompt("Digite um nome ou 0 para parar"));
  if (parseInt(pessoasSorteio[i]) === 0) {
    pessoasSorteio.pop(pessoasSorteio[i]);
    break;
  }
  i++;
}
num_1 = Math.floor(Math.random() * pessoasSorteio.length);
pessoasSorteio.pop(pessoasSorteio[num_1]);
num_2 = Math.floor(Math.random() * pessoasSorteio.length);
console.log(pessoasSorteio[num_1] + " e " + pessoasSorteio[num_2] + " foram sorteados para te dar um presente!");
*/

//________________________________________________________________________________________________________________________





//++++++++++++++++++++++++++++++++++++++++++++++++++EXERCÍCIOS FUNÇÕES++++++++++++++++++++++++++++++++++++++++++++++++++

// 1-Crie uma função que receba um inteiro e diga se ele é “Par” para números pares ou “Ímpar” para números impares.

/*
let num = parseInt(prompt("Digite um numero"));
function parOuImpar(num) {
  if (num % 2 === 0) {
    console.log("Esse número é par");
    return;
  }
  else {
    console.log("Esse número é impar");
    return;
  }
}
parOuImpar(num);
*/

//________________________________________________________________________________________________________________________

// 2-Crie uma função que receba dois números e retorne o resultado da soma entre eles.

/*
function soma(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

let num1 = parseInt(prompt("Digite um número"));
let num2 = parseInt(prompt("Digite outro número"));

let resultado = soma(num1, num2);

alert(`A soma dos dois números é: ${resultado}`);
*/

//________________________________________________________________________________________________________________________

// 3-Crie uma função que receba um número e retorne o oposto desse número. Exemplos de retornos:
// negativo(1) // return -1
// negativo(-5) // return 5

/*
function oposto(valor) {
  return -valor;
}

let valor = parseInt(prompt("Digite um valor"));

alert(`O valor oposto de ${valor} é: ${oposto(valor)}`);
*/

//________________________________________________________________________________________________________________________

// 4-Crie uma função que receba um array de números, e retorne a soma de todos os números positivos desse array. Exemplos de retornos:
// somaDePositivos([1,-4,7,12]) // 1 + 7 + 12 = 20 -> return 20

/*
function somaPositivos(num) {
  let soma = 0;

  for (i = 0; i < num.length; i++) {
    if (num[i] > 0) {
      soma += num[i];
    }
  }

  return soma;
}

const array = [1, -4, 7, 12];

console.log(`O valor da soma dos números positivos é igual a ${somaPositivos(array)}`);
*/


//________________________________________________________________________________________________________________________

// 5-Dado um array de números inteiros, crie uma função que retorne o valor do menor número desse array. Exemplos de outputs:
// Dado [34, 15, 88, -2] sua solução deve retornar o -2
// Dado [34, -500, -1, 100] sua solução deve retornar o -500

/*
function menorNumero(numeros) {
  let menor = numeros[0];
  for (i = 0; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }
  return menor;
}

const array1 = [34, 15, 88, -2];
const array2 = [34, -500, -1, 100];

console.log(`O menor número do array ${array1} é ${menorNumero(array1)}`);
console.log(`O menor número do array ${array2} é ${menorNumero(array2)}`);
*/
