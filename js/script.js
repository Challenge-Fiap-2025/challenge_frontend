document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-contato");
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");
    const mensagemErro = document.getElementById("mensagemErro");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      mensagemErro.textContent = "";
      let erros = [];
  
      if (nome.value.trim() === "") {
        erros.push("O campo nome é obrigatório.");
      }
  
      if (email.value.trim() === "") {
        erros.push("O campo e-mail é obrigatório.");
      } else if (!email.value.includes("@") || !email.value.includes(".")) {
        erros.push("Insira um e-mail válido.");
      }
  
      if (mensagem.value.trim() === "") {
        erros.push("A mensagem não pode estar vazia.");
      }
  
      if (erros.length > 0) {
        mensagemErro.innerHTML = erros.join("<br>");
      } else {
        alert("Mensagem enviada com sucesso!");
        form.reset();
      }
    });
  });