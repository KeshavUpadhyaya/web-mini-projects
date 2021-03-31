const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');
const container = document.getElementById('container');

openButton.addEventListener('click', () => {
  console.log('clicked openButton');
  container.classList.add('active');
})

closeButton.addEventListener('click', () => {
  container.classList.remove('active');
})