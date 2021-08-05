const buttonMenu = document.querySelector('.button-mobile')
let imgButton = document.querySelector('.button-mobile img')
const menu = document.querySelector('.menu')

buttonMenu.addEventListener('click', () => {
    if (imgButton.getAttribute("src") === './assets/images/icon-close.svg')
        imgButton.setAttribute("src", './assets/images/icon-hamburger.svg')
    else
        imgButton.setAttribute("src", './assets/images/icon-close.svg')

    menu.classList.toggle('active')
})