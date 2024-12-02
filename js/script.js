// Build a base number converting tool. Tool takes a number in a particular base and converts to another base given by the user(UI should make sense).
// So for example I can enter 2 base 10, to be converted to base 2

const UI = {
  inputBase: document.getElementById('numbase'),
  baseInput: document.getElementById ('options'),
  baseFrom: document.getElementById('result'),
  baseTo: document.getElementById('resetbutton'),
  button: document.getElementById('btn'),
}

UI.button.addEventListener ('click', (e) => {
  e.preventDefault ()
  const convertBase = parseInt(inputBase.value)
  const baseInputNumber = parseInt(baseInput.value)
  if (isNaN(convertBase)) {
    result.textContent = 'please enter a valid base number'
    result.style.color = 'red'
    return
  }

  const convertNumber = convertBase.toString (baseInputNumber)

  result.textContent = `${convertBase} to base ${baseInputNumber} is ${convertNumber}`
  result.style.color = 'green'
})
