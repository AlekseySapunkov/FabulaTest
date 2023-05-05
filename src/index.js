const modal = document.querySelector('.modal');
const submitButtons = document.querySelectorAll('button[type="submit"]');
const closeButton = document.querySelector('.modal__close-button')
const forms = document.querySelectorAll('form')
function checkValidity(event) {
  const formNode = event.target.form
  const isValid = formNode.checkValidity()
  console.log(isValid)

  if(isValid === true){
    submitButtons.forEach(submitButton =>submitButton.disabled = false)
} else{
  submitButtons.forEach(submitButton =>submitButton.disabled = true)
}
}
forms.forEach(form=>form.addEventListener('input', checkValidity))

submitButtons.forEach(btn =>btn.addEventListener('click', function (event) {
    event.preventDefault();
    modal.style.display = "block"
    
  }))
closeButton.addEventListener('click', function (event) {
    event.preventDefault();
    modal.style.display = "none"
  })