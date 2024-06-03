const slideshowImg = document.getElementById('slideshow-img');
const intervalInput = document.getElementById('interval');
const sizeInput = document.getElementById('size');
const loopCheckbox = document.getElementById('loop');
let currentIndex = 1;
let intervalId;

function applyChanges() {
    clearInterval(intervalId);
    const interval = parseInt(intervalInput.value) * 1000;
    const size = sizeInput.value + 'px';
    const loop = loopCheckbox.checked;

    intervalId = setInterval(() => {
        currentIndex = loop ? (currentIndex % 5) + 1 : currentIndex === 5 ? 1 : currentIndex + 1;
        slideshowImg.src = `images/img${currentIndex}.jpg`;
        slideshowImg.style.width = size;
    }, interval);
}

// Initial application of settings
applyChanges();
