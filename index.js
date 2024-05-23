let count = 0

const button = document.getElementById('click_me_button')
const counterSpan = document.getElementById('counter')

console.log(counterSpan)

button.addEventListener('click', () => {
  count ++
  counterSpan.innerText = count
})