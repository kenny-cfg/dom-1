let count = 0

const clickMeButton = document.getElementById('click_me_button')
const resetButton = document.getElementById('reset_button')
const counterSpan = document.getElementById('counter')

console.log(resetButton)

/*
 * - Add a new reset button
 * - Add a click handler to the new button
 * - In the click handler, update the count
 * - DRY up the code (DRY = Don't repeat yourself)
 */

clickMeButton.addEventListener('click', () => {
  count++
  counterSpan.innerText = count
})

clickMeButton.addEventListener('click', () => {
  count++
  counterSpan.innerText = count
})