console.log('Hello');

// make product photos interactive

const thumbnailImg = document.getElementsByClassName('thumbnail-img');
const screens = document.getElementsByClassName('screen');

function deactivateScreen() {
    const activeScreen = [...screens].find((screen) => screen.style.opacity == '0.6');
    if (activeScreen) {
        activeScreen.style.opacity = '0';
        activeScreen.parentNode.style.border = 'none'
    }  
}

for (let i = 0; i < thumbnailImg.length; i++) {
    thumbnailImg[i].addEventListener('mouseover', () => {
        if (screens[i].style.opacity < 0.6) {
            screens[i].style.opacity = '0.3';
            thumbnailImg[i].style.cursor = 'pointer';
        }
    })
    thumbnailImg[i].addEventListener('mouseleave', () => {
        if (screens[i].style.opacity < 0.6) {
            screens[i].style.opacity = '0'
        }
    })
    thumbnailImg[i].addEventListener('click', () => {
        deactivateScreen();
        const mainImg = thumbnailImg[i].parentNode.previousElementSibling.firstElementChild;  // so that it can target large image in dialog as well.
        if (i < 4) {
            mainImg.setAttribute('src', `./images/image-product-${i + 1}.jpg`);
        } else {
            mainImg.setAttribute('src', `./images/image-product-${i - 4 + 1}.jpg`);     // for dialog (i >= 4)
        }           
        screens[i].style.opacity = '0.6';
        thumbnailImg[i].style.border = '3px solid hsl(26, 100%, 55%)'
    })   
}

// make image slider in dialog

const largeImg = document.getElementsByClassName('large-img')[0]; 
const dialog = document.getElementById('dialog');

largeImg.onclick = () => {
    dialog.showModal();
};

const closeDialogBtn = document.getElementById('close-dialog');
closeDialogBtn.onclick = () => {
    dialog.close()
}

const dialogPrevBtn = document.getElementById('dialog-prev');
const dialogNextBtn = document.getElementById('dialog-next');

function changeImage(n) {
    const mainImg = document.getElementsByClassName('large-img')[1];
    const currIndex = Number((mainImg.getAttribute('src')).match(/\d/)[0]);
    const nextIndex = currIndex + n;
    if (nextIndex === 0) {
        mainImg.setAttribute('src', `./images/image-product-4.jpg`)
    } else if (nextIndex === 5) {
        mainImg.setAttribute('src', `./images/image-product-1.jpg`)
    } else {
        mainImg.setAttribute('src', `./images/image-product-${nextIndex}.jpg`)
    }
}

dialogPrevBtn.addEventListener('click', () => {
    deactivateScreen();
    changeImage(-1);
})

dialogNextBtn.addEventListener('click', () => {
    deactivateScreen();
    changeImage(1);
})

// (mobile version) make header interactive

const openCloseMenu = document.getElementById('open-close-menu');
const menuContainer = document.getElementsByClassName('menu-container')[0];

function toggleMenu() {
    const styles = window.getComputedStyle(openCloseMenu);
    const bgImg = styles.getPropertyValue('background-image');
    if (menuContainer.style.display === 'block') {
        menuContainer.style.display = 'none';
        openCloseMenu.style.backgroundImage = bgImg.replace('close', 'menu');
        openCloseMenu.style.position = 'relative';
    } else {
        menuContainer.style.display = 'block';
        openCloseMenu.style.backgroundImage = bgImg.replace('menu', 'close');
        openCloseMenu.style.position = 'fixed';
    }
}

openCloseMenu.addEventListener('click', toggleMenu)

// (mobile) make product photos interactive

const thumbnailImgTag = document.getElementsByClassName('thumbnail-img-tag');

if (screen.width < 650) {
    console.log('This is a mobile version.')
    for (let i = 0; i < thumbnailImgTag.length; i++) {
        const srcVal = thumbnailImgTag[i].getAttribute('src');
        const newSrc = srcVal.replace(/-thumbnail/g, '');
        thumbnailImgTag[i].setAttribute('src', newSrc);
        console.log(thumbnailImgTag[i].src);
    }
    showImage(0)
}

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currIndex = 0;

function showImage(n) {
    thumbnailImg[n].style.visibility = 'visible';
}

function slideImage(n) {
    thumbnailImg[currIndex].style.visibility = 'hidden';
    currIndex += n;
    if (currIndex === 4) {
        currIndex = 0
    } else if (currIndex === -1) {
        currIndex = 3
    }
    showImage(currIndex)
}

prevBtn.onclick = () => { slideImage(-1) }
nextBtn.onclick = () => { slideImage(1) }

// make amount button interactive

const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const currAmountSpan = document.getElementById('curr-amount');
let currAmount = 0;

minusBtn.onclick = () => {
    if (currAmount > 0) {
        currAmount--;
        currAmountSpan.innerText = currAmount;
    }
}

plusBtn.onclick = () => {
    currAmount++;
    currAmountSpan.innerText = currAmount;
}

// this section is about the 'cart'

const cartBtn = document.getElementById('cart-btn');
const cartContent = document.getElementsByClassName('cart')[0];

function toggleCart() {
    if (cartContent.style.display === 'block') {
        cartContent.style.display = 'none'
    } else {
        cartContent.style.display = 'block'
    }
}

cartBtn.addEventListener('click', toggleCart)

const products = [
    {
        id: 1,
        name: 'Fall Limited Edition Sneakers',
        price: 125.00
    }
]

const cartBody = document.getElementsByClassName('cart-body')[0];
const badge = document.getElementById('badge');

class ShoppingCart {
    constructor() {
        this.amount = 0
    }
    addCart() {
        this.amount += currAmount;
        const totalPrice = (this.amount * products[0].price).toFixed(2);
        cartBody.innerHTML = `
        <div class="cart-body-detail">
            <img src="./images/image-product-1-thumbnail.jpg" />
            <div>
                <div>${products[0].name}</div>
                <div>$${products[0].price} x ${this.amount} <span class="total-price">${totalPrice}</span></div>
            </div>
            <button class="small-btn" id="delete-btn">
                <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
            </button>
        </div>
        <button id="checkout-btn" class="orange-btn">Checkout</button>
        `;

        this.updateBadge();

        const deleteBtn = document.getElementById('delete-btn');
        deleteBtn.addEventListener('click', this.clearCart.bind(this))
    }
    updateBadge() {
        if (this.amount > 0) {
            badge.style.visibility = 'visible';
            badge.textContent = this.amount;
        } else if (this.amount === 0) {
            badge.style.visibility = 'hidden';
        }
    }
    clearCart() {
        cartBody.innerHTML = "Your cart is empty.";
        this.amount = 0;

        this.updateBadge();
    }
}

const cart = new ShoppingCart();

const addCartBtn = document.getElementById('add-cart-btn');
addCartBtn.addEventListener('click', cart.addCart.bind(cart));