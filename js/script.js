let closeMenu = document.getElementById("icon-close")
let dropMenu = document.getElementsByClassName("ham-berger-menu")
let hamBerger = document.getElementsByClassName('ham-berger')


function close() {
    dropMenu[0].style.transform = 'translateX(-250px)'

}


closeMenu.addEventListener('click' , close)

console.log(dropMenu[0]);
console.log(hamBerger[0]);








