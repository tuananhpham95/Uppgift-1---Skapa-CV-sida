const navIcons = document.querySelector('.navbar__icons');
const navLinks = document.querySelector('.navbar__links');
const banner = document.querySelector('.banner')

navIcons.addEventListener('click',()=>{
    navLinks.classList.toggle('navbar__open');
})