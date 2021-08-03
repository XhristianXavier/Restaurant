
const activeMenu = () =>{
    let menu = document.querySelector('#menu-header');
    let layerMenu = document.querySelector('#layer-menu');
    menu.classList.toggle('menu-header-active');
    layerMenu.classList.toggle('layer-menu-active');
}
document.querySelector('#burguer-menu').addEventListener('click',() =>{
 activeMenu();
});

document.querySelector('#close-menu-header').addEventListener('click', () =>{
activeMenu();  
})