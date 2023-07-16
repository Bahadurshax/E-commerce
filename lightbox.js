const preview_img = document.querySelector('#preview_1');
const lightbox_preview = document.querySelector('.lightbox-window > img');
const lightbox_modal = document.querySelector('.lightbox-modal');
const img_sources = Object.values(images);

let i = 0;

lightbox_modal.addEventListener('click', e => {
    let btn_type = e.target.dataset.btn;
    
    if (btn_type == 'close') {
        lightbox_modal.classList.remove('open');
    }

    else if (btn_type == 'next') {
        i++;
        if (i == img_sources.length) {
            i = 0;
        }
    }
        
    else if (btn_type == 'prev') {
        i--;
        if (i < 0) {
            i = img_sources.length - 1;
        }
    } else {
        return;
    }

    lightbox_preview.src = img_sources[i];
});


preview_img.addEventListener('click', e => {
    lightbox_modal.classList.add('open');
})