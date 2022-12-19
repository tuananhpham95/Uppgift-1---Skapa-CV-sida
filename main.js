const navIcons = document.querySelector('.navbar__icons');
const navLinks = document.querySelector('.navbar__links');

navIcons.addEventListener('click',()=>{
    navLinks.classList.toggle('navbar__open');
})