window.addEventListener("DOMContentLoaded", function () {
  const cpfInput = document.getElementById("cpf");
  const celularInput = document.getElementById("celular");

  if (cpfInput) {
    Inputmask("999.999.999-99").mask(cpfInput);
  }

  if (celularInput) {
    Inputmask("(99) 99999-9999").mask(celularInput);
  }
});