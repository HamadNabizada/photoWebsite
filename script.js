const menuBtn = document.getElementById('menuNav');
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('close');
const navMenuWebsite = document.getElementById('navMenuWebsite');
const navMenuContact = document.getElementById('navMenuContact');
const navMenuSocial = document.getElementById('navMenuSocial');
const socialSubMenu = document.getElementById('socialSubMenu');
const websiteSubMenu = document.getElementById('websiteSubMenu');
const contactSubMenu = document.getElementById('contactSubMenu');


function displayMenu(){
    menu.classList.toggle('menuHide');
}
function closeAllSubMenu(){
    let arrSubMenu = document.getElementsByClassName("subMenu")
    for (let index = 0; index < arrSubMenu.length; index++) {
        const element = arrSubMenu[index];
        element.classList.add('subMenuOpen')
        
    }
}
function toggleWebSubMenu(){
    closeAllSubMenu();
    websiteSubMenu.classList.remove('subMenuOpen')
}
function toggleSocialSubMenu(){
    closeAllSubMenu();
    socialSubMenu.classList.remove('subMenuOpen')
}
function toggleContactSubMenu(){
    closeAllSubMenu();
    contactSubMenu.classList.remove('subMenuOpen')
}



navMenuWebsite.addEventListener('click', toggleWebSubMenu);
navMenuSocial.addEventListener('click', toggleSocialSubMenu);
navMenuContact.addEventListener('click', toggleContactSubMenu);
menuBtn.addEventListener('click', displayMenu);
closeMenu.addEventListener('click', displayMenu);