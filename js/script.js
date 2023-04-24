const btn = document.querySelector('#menu-btn')
const menu = document.querySelector('#menu')

btn.addEventListener('click', navToggle)

function navToggle(e) {
    btn.classList.toggle('open', !btn.classList.contains('open'))
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
}