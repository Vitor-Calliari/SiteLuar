// Adiciona um ouvinte de evento ao documento que é acionado quando todo o conteúdo HTML é completamente carregado.
document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0; // Esta linha declara uma variável inicializando-a com 0. Esta variável é usada para armazenar a posição de rolagem anterior.
    const header = document.getElementById('cabecalho'); // Puxa o ID do nosso cabeçalho e armazena ele na constante 'header'.

    window.addEventListener('scroll', function() { // Adiciona um evento à janela que é acionado quando o usuário rola a página.
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Obtém a posição atual de rolagem e a armazena na variável.

        if (scrollTop > lastScrollTop) { // É executado se a posição atual de rolagem for maior que a posição de rolagem anterior, ou seja;
            // Rolando para baixo;
            header.classList.remove('visible'); // Esta linha remove a classe 'visible' do elemento 'header'.
            header.classList.add('hidden'); // Esta linha adiciona a classe 'hidden' ao elemento 'header'.
        } else {
            // Rolando para cima.
            header.classList.remove('hidden'); // Esta linha remove a classe 'hidden' do elemento 'header'.
            header.classList.add('visible'); // Esta linha adiciona a classe 'visible' ao elemento 'header'.
        }

        lastScrollTop = scrollTop; // Esta linha atualiza a posição de rolagem anterior com a posição de rolagem que agora, é atual.
    });
});














// document.addEventListener('DOMContentLoaded', function() {
//     let lastScrollTop = 0;
//     const header = document.getElementById('cabecalho');

//     window.addEventListener('scroll', function() {
//         let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//         if (scrollTop > lastScrollTop) {
//             // Rolando para baixo
//             header.classList.remove('visible');
//             header.classList.add('hidden');
//         } else {
//             // Rolando para cima
//             header.classList.remove('hidden');
//             header.classList.add('visible');
//         }

//         lastScrollTop = scrollTop;
//     });
// });