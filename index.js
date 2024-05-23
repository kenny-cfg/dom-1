let count = 0

const button = document.getElementById('click_me_button')
const counterSpan = document.getElementById('counter')

const clickHandler = () => {
  count++
  counterSpan.innerText = count
}

// button.addEventListener('click', () => {
//   count++
//   counterSpan.innerText = count
// })
