let iconClose = document.getElementById("icon-close")
let dropMenu = document.getElementsByClassName("ham-berger-menu")
let iconBar = document.getElementById('icon-bar')


function close() {
    dropMenu[0].style.transform = 'translateX(-250px)'    
}

function open() {
    dropMenu[0].style.transform = 'translateX(0)'
}


iconClose.addEventListener('click' , close)
iconBar.addEventListener('click' , open)








