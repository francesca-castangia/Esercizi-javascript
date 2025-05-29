// Crea uno script che:

// Al click del bottone inserisca la modalità dark

const button = document.querySelector('.btn');

button.addEventListener("click", () => {
  document.body.classList.toggle('theme')
});