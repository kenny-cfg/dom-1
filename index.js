let count = 0

const button = document.getElementById('click_me_button')
const counterSpan = document.getElementById('counter')

/*
 * - Add a new reset button
 * - Add a click handler to the new button
 * - In the click handler, update the count
 * - DRY up the code (DRY = Don't repeat yourself)
 */

button.addEventListener('click', () => {
  count++
  counterSpan.innerText = count
})
