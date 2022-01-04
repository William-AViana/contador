const curentValue = document.getElementById('curentValue')
const buttonIncrement = document.querySelector('#adicionar')
const buttonDecrement = document.querySelector('#subtrair')
var curentNumber = 0

function increment() {
  curentNumber += 1
  curentValue.innerHTML = curentNumber
  if (curentNumber > 4) {
    buttonIncrement.setAttribute('disabled', 'true')
  }

  if (curentNumber >= -4) {
    buttonDecrement.removeAttribute('disabled')
  }

  if (curentValue.innerHTML >= 0) {
    curentValue.style.color = 'black'
  }
}

function decrement() {
  curentNumber -= 1
  curentValue.innerHTML = curentNumber
  if (curentNumber <= 4) {
    buttonIncrement.removeAttribute('disabled')
  }

  if (curentNumber < -4) {
    buttonDecrement.setAttribute('disabled', 'true')
  }

  if (curentValue.innerHTML < 0) {
    curentValue.style.color = 'red'
  }
}

buttonIncrement.addEventListener('click', increment)

buttonDecrement.addEventListener('click', decrement)

