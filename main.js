const selection = document.querySelectorAll('.select')
const active = document.querySelector('.active')
const modal = document.getElementById('modal')
const hamburguer = document.querySelector('.hamburguer')
const animate = document.querySelector('.animate')

selection.forEach(el => {
  el.addEventListener('click', () => {
    selectItem(el)
  })
})

function selectItem(el) {
  if (el.classList.value != 'active') {
    selection.forEach(element => {
      element.classList.remove('active')
    })
    el.classList.add('active')
  }
  if (el.classList.value == 'active') {
    el.classList.remove('active')
  }
}

hamburguer.addEventListener('click', () => {
  hamburguer.classList.add('animate')
  hamburguer.classList.remove('hamburguer')
  modal.style.opacity = 1
})

if (animate) {
  modal.addEventListener('click', () => {
    animate.classList.add('hamburguer')
    animate.classList.remove('animate')
  })
}
