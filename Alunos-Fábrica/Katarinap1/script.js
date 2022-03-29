let elem_matricula = document.getElementById("input_matricula");
let elem_nome = document.getElementById("input_nome");
let elem_nota1 = document.getElementById("input_nota1");
let elem_nota2 = document.getElementById("input_nota2");
let btnclicar = document.getElementById("btnclicar");

/**
 * Checa se uma string contem algum dígito
 * @param {*} palavra Texto que deseja verificar se contem número
 * @returns True se encontrou algum dígito na palavra ou False caso o contrário
 */
function contemNumero(palavra) {
  console.log("palavra contem numero ", /\d/.test(palavra) );
  return /\d/.test(palavra);
}


btnclicar.addEventListener("click", function (event) {
  console.log("Valor elemento matricula: " + elem_matricula.value);
  console.log("Valor elemento nome: " + elem_nome.value);
  console.log("Valor elemento nota1: " + elem_nota1.value);
  console.log("Valor elemento nota2: " + elem_nota2.value);

  // warning, error, success, info: em resposta a ação do usuário
  // Caso o usuário tente cadastrar sem digitar, return.
  if (elem_matricula.value == "") {
    event.preventDefault();
    swal("Validação", "Informe a matricula", "error");
    return;
  }

  if (elem_nome.value == "") {
    event.preventDefault();
    swal("Validação", "Informe o seu nome", "error");
    return;
  }

  if (elem_nota1.value == "") {
    event.preventDefault();
    swal("Validação", "Informe sua primeira nota", "error");
    return;
  }

  if (elem_nota2.value == "") {
    event.preventDefault();
    swal("Validação", "Informe sua segunda nota", "error");
    return;
  }

  // isNaN (is not a number) = Verifica se o que o usuário digitou é um número ou um caractere
  if (isNaN(elem_matricula.value)) {
    event.preventDefault();
    swal("Validação", "Informe uma matrícula válida", "error");
    return;
  }

  if (isNaN(elem_nota1.value)) {
    event.preventDefault();
    swal("Validação", "Informe uma primeira nota válida", "error");
    return;
  }

  if (isNaN(elem_nota2.value)) {
    event.preventDefault();
    swal("Validação", "Informe uma segunda nota válida", "error");
    return;
  }

  if (contemNumero(elem_nome.value)) {
    event.preventDefault();
    swal("Validação", "O nome não pode conter dígitos", "error");
    return;
  }
});