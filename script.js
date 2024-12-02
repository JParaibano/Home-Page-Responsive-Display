let menu = document.querySelector('.menu');
let navMenu = document.querySelector('.nav-menu');

// Adiciona um evento de clique ao elemento 'menu'.
menu.addEventListener('click', () => {
    // Alterna a classe 'ativo' no elemento 'menu' e navMenu.
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})