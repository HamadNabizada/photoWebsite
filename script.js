const menuBtn = document.getElementById('menuNav');
const menu = document.getElementById('menu');
const close = document.getElementById('close');

function displayMenu(){
    menu.classList.toggle('menuHide');
}

menuBtn.addEventListener('click', displayMenu);
close.addEventListener('click', displayMenu);