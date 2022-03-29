/*let number=20 //funciona no escopo local

const number3 = 30 //

var number2 = 10 //funciona no escopo global - é ultrapassado*/


/*Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido*/

/*let nota = prompt("Digite uma nota");*/

/*
while(true)
{
    let nota = prompt("Digite uma nota");
    if(nota >= 0 && nota <= 10){
        alert("Sua nota é: " + nota)
        break;

    }
    else{
        alert("Nota inválida")
    }
}*/

/*
let terminaloop = true
while(terminaloop)
{
    let nota = prompt("Digite uma nota");
    if(nota >= 0 && nota <= 10){
        alert("Sua nota é: " + nota)
        break;

    }
    else{
        alert("Nota inválida")
    }
}*/

//Mostrando loop do for
/*
for (var i = 0; i<=10; i++){
    console.log(i)
}

console.log("esse aqui " + i)*/

//3.Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.
/*
let terminaloop = true
while(terminaloop)
{
let nome = prompt("Digite seu nome");
let senha = prompt("Digite sua senha");

    if(senha === nome){
        alert("A senha não pode ser igual ao nome")
        console.log("Digite sua senha");
    }
    else{
        console.log("Seu nome é: " + nome);
        console.log("Sua senha é : " + senha);
        break;
    }
}*/

//4.Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois modifique o programa para que ele mostre os números um ao lado do outro.
/*
for(let i = 1; i<=20; i++){
    console.log(i);
}*/
/*
for(let i = 1; i<=20; i++){
    j = i
    console.log(i, j);
}*/

//5. Faça um programa que leia 5 números e informe o maior número.
/*
let maior = 0;
for(let i = 1; i<=5; i++){
    let imput = parseInt(prompt("Digite um numero"));
    if(i === 0){
        maior = imput;
    }
    if (imput>maior){
        maior = imput;
    }
}
alert(maior);*/

/*9.    Dado um número n, para cada número entre 0 e 100, imprime um valor por linha da seguinte maneira:

Se i for múltiplo de 3 e 5, imprima o FizzBuzz.
Se i for múltiplo de 3 (mas não de 5), imprima o Fizz.
Se i for múltiplo de 5 (mas não de 3), imprima o Buzz.
Se i não for múltiplo de 3 ou 5, imprima o valor de i.*/
/*
for(let i=0; i<=100; i++)
{
    if(i%3==0 && i%5==0){
        console.log("O numero é multiplo de 3 e 5: " + i + " FizzBuzz");
    }
    else if(i%3==0 && i%5!=0){
        console.log("O numero é multiplo de 3 mas não de 5: " + i + "Fizz");
    }
    else if(i%3!=0 && i%5==0){
        console.log("O numero é multiplo de 5 mas não de 3: "  + i + "Buzz");
    }
    else if(i%3!=0 && i%5!=0){
        console.log("O numero não é multiplo de 3 e 5: " + i);
    }
}*/

//APRENDENDO SOBRE LISTAS
/*
let nomes = [];
/*
nomes[0] = "Victor"
nomes[1] = "Thiago"
nomes[2] = "Cecilia"
//no console lenght é o tamanho da lista
nomes[1] = "Pedro" //substituiu
*/
/*
nomes[0] = "Victor"
nomes[1] = "Thiago"
nomes.push("Eleonor") //acrescenta elementos na lista na ultima posição disponivel
nomes.push("Candice")


console.log(nomes.length)
console.log(nomes)

nomes.pop()//tira o ultimo elemento da lista

console.log(nomes)
console.log(nomes[3])
*/

/*
let listaNomes = [];
for (let i=0; i<10; i++){
    let nomes = prompt("Digite um nome")
    listaNomes.push(nomes)
}
console.log(listaNomes)
*/
//faça um
/*
let minhaLista = [1, 5, 3, 2, 10]
for (let i = 0; i< minhaLista.length; i++){
    console.log(minhaLista[i])
}*/

// Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.
/*
let minhaLista = [1, 5, 3, 2, 10, 22, 52, 22, 100, 7]
for (let i= minhaLista.length-1; i>=0; i--){
    console.log(minhaLista[i])
}*/

//FUNÇÃO
/*
function helloworld(){
    console.log("Hello world")
}

helloworld()
*/
/*
function somaDois(num1,num2){
    console.log(num1+num2)
}
somaDois(3,4)
somaDois(10,4)
somaDois(200,5)
somaDois(4,7)

function somaDois(num1,num2){
    console.log(parseInt(num1)+parseInt(num2))
}
somaDois('3','4')
somaDois(10,4)
somaDois(200,'5')
somaDois('4',7)
*/

//criar função com as quatro operações no console
/*
function opBasicas(num1, num2){
    console.log(parseInt(num1) + parseInt(num2));
    console.log(parseInt(num1) - parseInt(num2));
    console.log(parseInt(num1) * parseInt(num2));
    console.log(parseInt(num1) / parseInt(num2));
}
opBasicas()
*/

//Crie uma função que receba um inteiro e diga se ele é “Par” para números pares ou “Ímpar” para números impares.
/*
let num = parseInt(prompt("Digite um numero"));
function parOuImpar(num){
    if( num % 2 === 0){
        console.log("Esse número é par")
        return;
    }
    else{
        console.log("Esse número é impar")
        return;
    }
}
parOuImpar(num)*/

