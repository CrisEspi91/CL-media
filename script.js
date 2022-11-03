
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


