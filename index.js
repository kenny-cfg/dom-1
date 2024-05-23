let count = 0

const button = document.getElementById('click_me_button')

button.addEventListener('click', () => {
  count ++
  console.log(count)
})