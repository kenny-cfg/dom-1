let count = 0

const clickMeButton = document.getElementById('click_me_button')
const resetButton = document.getElementById('reset_button')
const multiplyBy10Button = document.getElementById('multiply_by_10')
const counterSpan = document.getElementById('counter')


/*
 * - Add a new reset button
 * - Add a click handler to the new button
 * - In the click handler, update the count
 * - DRY up the code (DRY = Don't repeat yourself)
 */

const updateCount = (newCount) => {
  count = newCount
  counterSpan.innerText = count
}

const addClickHandler = (element, functionToCall) => {
  element.addEventListener('click', functionToCall)
}

addClickHandler(clickMeButton, () => updateCount(count + 1))
addClickHandler(resetButton, () => updateCount(0))
addClickHandler(multiplyBy10Button, () => updateCount(count * 10))