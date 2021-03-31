const images = document.getElementById('images');
const img = document.querySelectorAll('#images img');

let index = 0;

function run() {
  index++;

  if (index > img.length - 1) {
    index = 0;
  }

  images.style.transform = `translateX(${-index * 500}px)`;

  setTimeout(run, 2000);
}

run();

