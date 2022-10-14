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
let aside = document.querySelector ('aside');
let main = document.querySelector('main');

toggle.onclick = function() {
    aside.classList.toggle('active');
    main.classList.toggle('active');
}