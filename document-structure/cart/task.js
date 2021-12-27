let quantityValue = document.querySelectorAll('.product__quantity-value');
const quantityValueInc = document.querySelectorAll('.product__quantity-control_inc');
const quantityValueDec = document.querySelectorAll('.product__quantity-control_dec');

for (let i = 0; i < quantityValueInc.length; i++) {
    quantityValueInc[i].addEventListener('click', () => {
        quantityValue[i].textContent = +quantityValue[i].textContent + 1;
    });

    quantityValueDec[i].addEventListener('click', () => {
        if (quantityValue[i].textContent > 1) {
            quantityValue[i].textContent = +quantityValue[i].textContent - 1;
        }
    });
}

const productAdd = document.querySelectorAll('.product__add');
const productCart = document.querySelector('.cart__products');

console.log(productCart.children);

for (let i = 0; i < productAdd.length; i++) {
    let product = document.querySelectorAll('.product');
    let productId = product[i].dataset.id;
    let productImage = document.querySelectorAll('.product__image');
    let productImageLink = productImage[i].getAttribute('src');
    
    productAdd[i].addEventListener('click', () => {
    
        if (productId[i] in productCart.children) {
            let productCount = document.querySelectorAll('.cart__product-count');
            productCount[i].textContent = +productCount[i].textContent + +quantityValue[i].textContent;
        } else {
            productCart.insertAdjacentHTML('beforeend', `
            <div class="cart__product" data-id="${productId[i]}">
                <img class="cart__product-image" src="${productImageLink}">
                <div class="cart__product-count">${quantityValue[i].textContent}</div>
            </div>`)
        }
    })
}

