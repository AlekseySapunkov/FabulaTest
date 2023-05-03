const modal = document.querySelector('.modal');
const submitButtons = document.querySelectorAll('button[type="submit"]');
const closeButton = document.querySelector('.modal__close-button')
const form = document.querySelector('.form')
console.log(modal)
console.log(closeButton)
function checkValidity(event) {
  const formNode = event.target.form
  const isValid = formNode.checkValidity()

  formNode.submitButtons.disabled = !isValid
}

form.addEventListener('input', checkValidity)

submitButtons.forEach(btn =>btn.addEventListener('click', function (event) {
    modal.style.display = "block"
    
  }))
closeButton.addEventListener('click', function (event) {
    event.preventDefault();
    modal.style.display = "none"
  })