
const openIcon = document.querySelector('.mobile-nav-open')
const closeIcon = document.querySelector('.mobile-nav-close')
const menu = document.querySelector('.header-nav')

document.querySelectorAll('.mobile-nav-control').forEach(e => {
  e.addEventListener('click', _ => {
      menu.classList.toggle('visible')
      openIcon.classList.toggle('hidden')
      closeIcon.classList.toggle('visible')
  })
})
