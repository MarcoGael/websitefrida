var menuHD = document.getElementById('menu-hd');
var menuMobile = document.getElementById('menu-mobile');

menuHD.addEventListener('click', function(event){
    event.preventDefault()

    menuMobile.classList.toggle('show')
})

const slider = document.querySelector("#slider");
console.log('slider', slider)
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLetf = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement("afterbegin", sliderSectionLast)

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-100%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.marginLeft = "-100%";
    }, 500);
}

function Prev() {
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast)
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener("click", function(){
    Next();
});

btnLetf.addEventListener("click", function(){
    Prev();
});

// setInterval(function(){
//     Next();
// }, 5000);