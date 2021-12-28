const selection = document.querySelectorAll('.select')

const active = document.querySelector('.active')

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
