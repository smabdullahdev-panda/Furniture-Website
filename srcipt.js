const menu = document.getElementById("menu");
const list = document.getElementById("list");
const icon = menu.querySelector(" i ");

menu.addEventListener('click', ()=>{

    list.classList.toggle('nav-list-active');

    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});