const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);
menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

handleResize();

window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
    return '<div class="viewer"><button class="close-viewer">X</button><img src="${pic}" alt="${alt}"></div>';
    //couldn't get it to return without it being in a single line
}

function viewHandler(event) {
    if (event.target.tagName === 'IMG') {
        const imageSrc = event.target.src;
        const imageParts = imageSrc.split("-");
        const fullImageSrc = imageParts[0] + "-full.jpeg";  

        
        const viewerHTML = viewerTemplate(fullImageSrc, event.target.alt);
        document.body.insertAdjacentHTML("afterbegin", viewerHTML);

        
        const viewer = document.querySelector('.viewer');
        viewer.style.display = 'block';

        
        const closeButton = document.querySelector('.close-viewer');
        closeButton.addEventListener('click', closeViewer);
    }
}

function closeViewer() {
    const viewer = document.querySelector('.viewer');
    viewer.remove();
}

document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    gallery.addEventListener('click', viewHandler);
});