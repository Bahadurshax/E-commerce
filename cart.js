const counter = document.querySelector('.counter');
const num = counter.querySelector('#num');
const cart_btn = document.querySelector('#cart_btn');
const items_count = cart_btn.querySelector('.items-count');
const cart = document.querySelector('.cart');
const cart_content = cart.querySelector('.cart-content');
const add_btn = document.querySelector('#add_btn'); // add to cart btn
    
let count = 0;

counter.addEventListener('click', e => {
    let btn = e.target.dataset.btn;

    if (btn == 'increment') {
        count++;
    }
    else if (btn == 'decrement') {
        if (count <= 0) return;
        count--;
    } else {
        return;
    }

    num.textContent = count;
})

cart_btn.addEventListener('click', e => {
    cart.classList.toggle('show');
})

function addToCart() {
    const quantity = Number(num.textContent);

    if (quantity == 0) return;

    const total_price = quantity * 125;

    cart_content.innerHTML = `
    <div class="item d-flex">
        <img src="images/image-product-1-thumbnail.jpg" alt="img">
        <div>
            <h4>Fall Limited Edition Sneakers</h4>
            <p>$125.00 x ${quantity} <strong>$${total_price}.00</strong></p>
        </div>
        <button data-btn="delete" onclick=deleteItem() aria-label="Remove the item">
            <img src="images/icon-delete.svg" alt="delete button icon">
        </button>
    </div>
    <!-- /.item -->
    <button class="btn btn-block">Checkout</button>`;

    items_count.textContent = quantity;
    items_count.style.display = 'inline';
}

function deleteItem() {
    cart_content.innerHTML = '<p>Your cart is empty</p>';
    items_count.style.display = 'none';
}

add_btn.addEventListener('click', addToCart);