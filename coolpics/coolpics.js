const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}
handleResize();

document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.gallery img');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.querySelector('.close');

  images.forEach(img => {
    img.addEventListener('click', function() {
      const fullImg = img.getAttribute('data-full');
      if (fullImg) {
        modalImg.src = fullImg;
        modal.classList.remove('hide');
      }
    });
  });

  closeBtn.addEventListener('click', function() {
    modal.classList.add('hide');
    modalImg.src = '';
  });

  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.add('hide');
      modalImg.src = '';
    }
  });
});