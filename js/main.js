const LinksNav = document.querySelectorAll('.nav-link')
const CheckMenu = document.getElementById('CheckMenu')
const headerNav = document.getElementById('header_nav')

LinksNav.forEach(e => {
    e.addEventListener('click', () => {
      headerNav.style.left = '-100%'
    })
})

CheckMenu.addEventListener('click', () => {
  headerNav.style.left = '0'
})