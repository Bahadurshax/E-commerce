const slider = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
const slider_track = document.querySelector('.carousel-track');

let acc = 0;
let width;

function adjust() {
    width = slider.offsetWidth;
    slider_track.style.width = `${width * slides.length}px`;
    slides.forEach(img => {
        img.style.width = `${width}px`;
    });
    rollSlider();
}

adjust();

window.addEventListener('resize', adjust);

slider.addEventListener('click', e => {
    const btn = e.target.dataset.btn;

    if (btn == 'next') {
        acc++;
        if (acc >= slides.length) {
            acc = 0;
        }
    }
    else if (btn == 'prev') {
        acc--;
        if (acc < 0) {
            acc = slides.length - 1;
        }
    }

    rollSlider();
})

function rollSlider() {
    slider_track.style.transform = `translateX(-${width * acc}px)`;
}