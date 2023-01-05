const nav = document.getElementById('nav')
const button = document.getElementById('nav-btn')
const background = document.getElementById('black-nav')

button.addEventListener('click', abrirMenu)
background.addEventListener('click', ocultarMenu)

function abrirMenu(){
    nav.style.right='-50px'
    background.style.display='block'
    button.style.transform = 'rotate(180deg)'
}

function ocultarMenu(){
    nav.style.right='-250px'
    background.style.display='none'
    button.style.transform = 'rotate(0deg)'
}

window.onscroll = function(){
    scroll = document.documentElement.scrollTop
    links = document.getElementsByClassName('nav-a')
    header = document.getElementById('header')
    logoBlanco = document.getElementById('logo-blanco')
    logoNegro = document.getElementById('logo-negro')

    if(scroll > 100){
        header.classList.add('nav-change')
        logoBlanco.style.display = 'none'
        logoNegro.style.display = 'inline'
    }else if(scroll < 20){
        header.classList.remove('nav-change')
        logoBlanco.style.display = 'inline'
        logoNegro.style.display = 'none'

    }
}

