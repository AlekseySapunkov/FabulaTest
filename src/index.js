const modal = document.querySelector('.modal');
const btn = document.querySelector('button[type="submit"]');
const closeButton = document.querySelector('.modal__close-button')
console.log(modal)
console.log(closeButton)
btn.addEventListener('click', function (event) {
    event.preventDefault();
    modal.style.display = "block"
  })
closeButton.addEventListener('click', function (event) {
    event.preventDefault();
    modal.style.display = "none"
  })