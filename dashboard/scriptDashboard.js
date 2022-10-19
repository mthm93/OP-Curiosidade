/* Menu Animado */

let list = document.querySelectorAll('aside li');
function activeLink() {
    list.forEach((item) =>
    item.classList.remove('hovered'));
    this.classList.add('hovered');
}
list.forEach((item) =>
item.addEventListener('mouseover', activeLink))

/* Abre a fecha do Menu */

let toggle = document.querySelector('.toggle');
let nav = document.querySelector ('nav');
let main = document.querySelector('main');

toggle.onclick = function() {
    nav.classList.toggle('active');
    main.classList.toggle('active');
}

/* Impressão da página de Relatórios */

function imprimir() {
    window.print();
    return false;
}