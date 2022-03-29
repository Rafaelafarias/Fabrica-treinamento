const url = "https://jsonplaceholder.typicode.com/users"

/*
fetch(url)
.then( resposta => resposta.json() )
//.then( dados => console.log(dados) )
then( dados => {


    const username = document.querySelector("#username")
    const nomeUsuario = document.querySelector("#nome-usuario")
    const userEmail = document.querySelector("#user-email")

    username.textContent = dados[1].username
    nomeUsuario.textContent = dados[1].name
    userEmail.textContent = dados[1].email

    //console.log(dados[1])

    let nome = dados[1].username
    let email = dados[1].email

    /*console.log(dados[1].username) //aparece o nome do usuario- acessa o objeto 
    console.log(dados[1].email)*/
/*})
.catch( err => console.log("DEU RUIM!" + err))*/

async function pegaDados(){
    const username = document.querySelector("#username")
    const nomeUsuario = document.querySelector("#nome-usuario")
    const userEmail = document.querySelector("#user-email")

    //joga a tela de carregamento para o usuário
    const response = await fetch(url, //espera a resposta da função
        {
            method : "GET"
        }) 
    const dados = await response.json()

    //tira barra de carregamento
    username.textContent = dados[1].username
    nomeUsuario.textContent = dados[1].name
    userEmail.textContent = dados[1].email    

    console.log(response)
}

pegaDados() //chamar a função. Ai no console aparece a promessa