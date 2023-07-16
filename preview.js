const thumbnail_btns = document.querySelectorAll('.thumbnails > .thumbnail-btn');

const images = {
    '1': 'images/image-product-1.jpg',
    '2': 'images/image-product-2.jpg',
    '3': 'images/image-product-3.jpg',
    '4': 'images/image-product-4.jpg',
};


function deactivate(current_active_btn, thumbnails) {
    const active_btn = thumbnails.find(btn => btn.classList.contains('active') && btn != current_active_btn);
    active_btn.classList.remove('active');
}

function switchImage(e) {
    const target_id = this.parentElement.dataset.target; // the id of the large product img
    const preview_img = document.querySelector(`#${target_id}`); // getting it by its id
    const img_id = this.dataset.id; // the id of the img
    preview_img.src = images[img_id]; // changing the source of the preview img
    this.classList.add('active'); // active thumbnail-btn
    const thumbnails = Array.from(this.parentElement.children);
    deactivate(this, thumbnails);
}


thumbnail_btns.forEach(btn => {
    btn.addEventListener('click', switchImage);
})