const chickenBtn = document.getElementById('chicken-btn')
const eggBtn = document.getElementById('egg-btn')
const choiceBtns = document.getElementById('choice-btns')
const heading = document.getElementById('heading')

// document.querySelector('img').src

chickenBtn.addEventListener('click', () => {
  document.querySelector('img').src = 'https://images.unsplash.com/photo-1589050593767-a754dd738587?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoaWNrZW58ZW58MHx8MHx8fDA%3D'
  document.querySelector('img').alt = "chicken"
  choiceBtns.style.display = 'none'
  heading.innerHTML = `You chose Chicken!`
})

eggBtn.addEventListener('click', () => {
  document.querySelector('img').src = 'https://devsprouthosting.com/images/egg.jpg'
  document.querySelector('img').alt = "egg"
  choiceBtns.style.display = 'none'
  heading.innerHTML = `You chose Egg!`
})
