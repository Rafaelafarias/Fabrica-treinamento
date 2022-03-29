let cores = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const letras = document.querySelectorAll("span")

for(let i =0; i<cores.length; i++){
    letras[i].style.color = cores[i]
}