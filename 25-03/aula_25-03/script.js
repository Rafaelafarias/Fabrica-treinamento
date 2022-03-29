//***let h1Element = document.querySelector("h1")

const h1Element = document.querySelector("h1") //constante não muda, h1Element tem que ser sempre isso

h1Element.style.background = "red"
h1Element.style.color = "white"
h1Element.style.textAlign = "center"

const elementoP = document.querySelector("p") //querySelector seleciona só o primeiro do tipo

//const elementoP = document.querySelector("#paragrafo")
elementoP.style.background = "#1eb1a5"
elementoP.style.color = "white"
elementoP.style.fontSize = "30px"
elementoP.style.textAlign = "center"

const elementoH4 = document.querySelector("#pa-dois")
elementoH4.style.background = "violet"
elementoH4.style.color = "white"
elementoH4.style.fontSize = "30px"
elementoH4.style.textAlign = "center"

//2 EDIÇÃO
/*
const elementoH1 = document.createElement("h1")
const body = document.querySelector("body")

elementoH1.textContent = "Hello Js"

body.append(elementoH1) // ou body.appendChild ele joga o elemento que você quer para o que tem antes do ponto ou body.InsertAdjacentElement*/