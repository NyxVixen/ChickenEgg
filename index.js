const chickenBtn = document.getElementById('chicken-btn')
const eggBtn = document.getElementById('egg-btn')

// document.querySelector('img').src

chickenBtn.addEventListener('click', () => {
  document.querySelector('img').src = 'https://devsprouthosting.com/images/chicken.jpg'
  document.querySelector('img').alt = "chicken"
  console.log('You picked chicken!')
})

eggBtn.addEventListener('click', () => {
  document.querySelector('img').src = 'https://devsprouthosting.com/images/egg.jpg'
  document.querySelector('img').alt = "egg"
  console.log('You picked egg!')
})
