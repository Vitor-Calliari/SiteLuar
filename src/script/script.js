// Manda o usuário para o topo da página toda vez que carregado.
document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

function showSidebar() {
    const sidebar = document.querySelector('.lateral')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.lateral')
    sidebar.style.display = 'none'
}