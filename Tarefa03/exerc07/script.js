// script.js

// Seleciona o botão hamburger e o menu de navegação
const hamburgerButton = document.querySelector('.hamburger-menu');
const mainNav = document.querySelector('.main-nav');

// Adiciona um "ouvinte de evento" para o clique no botão hamburger
hamburgerButton.addEventListener('click', () => {
    // Alterna a classe 'active' no menu de navegação
    // Se 'active' estiver presente, remove. Se não estiver, adiciona.
    mainNav.classList.toggle('active');

    // Também alterna a classe 'active' no próprio botão hamburger
    // para animar o ícone (transformando-o em um 'X')
    hamburgerButton.classList.toggle('active');

    // Opcional: Adicionar/remover uma classe no <body> para desabilitar o scroll
    // quando o menu está aberto, para evitar que o conteúdo de trás role.
    // document.body.classList.toggle('no-scroll');
});

// Opcional: Fechar o menu quando um link é clicado (útil para navegação de uma única página)
const navLinks = document.querySelectorAll('.main-nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove a classe 'active' do menu e do botão hamburger para fechá-los
        mainNav.classList.remove('active');
        hamburgerButton.classList.remove('active');
        // document.body.classList.remove('no-scroll'); // Se você implementou o no-scroll
    });
});
