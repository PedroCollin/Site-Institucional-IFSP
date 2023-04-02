/*===== Toggle do Menu Lateral =====*/ 

const btnMenu = document.getElementById("btn-menu");


btnMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    const menu = document.getElementById("menu-lateral");
    const menuSuperior = document.getElementById("menu-superior");
    const corpoSite = document.getElementById("corpo-site");


    menu.classList.toggle('show')

    
    btnMenu.classList.toggle('bx-x')


    menuSuperior.classList.toggle('body-pd')


    corpoSite.classList.toggle('body-pd')
}


/*===== Adiciona Ativo do momento =====*/ 
const navLista = document.querySelectorAll('.nav-lista')

function colorLink(){
    if(navLista){
        navLista.forEach(l=> l.classList.remove('ativo'))
        this.classList.add('ativo')
    }
}
navLista.forEach(l=> l.addEventListener('click', colorLink))