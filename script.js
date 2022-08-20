var menuHD = document.getElementById('menu-hd');
var menuMobile = document.getElementById('menu-mobile');

menuHD.addEventListener('click', function(event){
    event.preventDefault()

    menuMobile.classList.toggle('show')
})

console.log(menuHD)