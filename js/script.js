// Build a base number converting tool. Tool takes a number in a particular base and converts to another base given by the user(UI should make sense).
// So for example I can enter 2 base 10, to be converted to base 2

const UI = {
  inputBase: document.getElementById('numbase'),
  baseInput: document.getElementById('options'),
  result: document.getElementById('result'),
  resetButton: document.getElementById('resetbutton'),
  button: document.getElementById('btn')
}

UI.button.addEventListener('click', (e) => {
  e.preventDefault()
  const convertBase = parseInt(UI.inputBase.value)
  const baseInputNumber = parseInt(UI.baseInput.value)
  if (isNaN(convertBase)) {
    UI.result.textContent = 'Please enter a valid base number'
    UI.result.style.color = 'red'
    return
  }
  const convertNumber = convertBase.toString(baseInputNumber)
  UI.result.textContent = `${convertBase} to base ${baseInputNumber} is ${convertNumber}`
  UI.result.style.color = 'green'
})

UI.resetButton.addEventListener('click', () => {
  UI.inputBase.value = ''
  UI.baseInput.value = '2'
  UI.result.textContent = ''
  UI.result.style.color = 'white'
})