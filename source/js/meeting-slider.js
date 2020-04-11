
const list = document.getElementById('slider-list')
const leftButton = document.getElementById('left-arrow')
const rightButton = document.getElementById('right-arrow')
const items = document.querySelectorAll('.meeting__item')
const itemsValue = items.length
let counter = 0

rightButton.addEventListener('click', evt => {
  evt.preventDefault()
  if (counter < itemsValue - 1) {
    counter++
    list.style.transform = 'translateX(' + (-222 * counter) + 'px';
    console.log(counter)
  }
})


leftButton.addEventListener('click', evt => {
  evt.preventDefault()
  if (counter > 0) {
    counter--
    list.style.transform = 'translateX(' + (-222 * counter) + 'px';
    
  }
})