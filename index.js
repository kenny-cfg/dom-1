const embeddedDiv = document.getElementById('embedded_div')

for (let i = 0; i < 1000; i++) {
  const newParagraph = document.createElement('p')
  newParagraph.innerText = `<p>This is paragraph number ${i}</p>`
  embeddedDiv.append(newParagraph)
}
