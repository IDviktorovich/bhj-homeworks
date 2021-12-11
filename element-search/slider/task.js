let sliderItem = document.querySelectorAll('.slider__items div');
let next = document.querySelector('.slider__arrow_next');
let prev = document.querySelector('.slider__arrow_prev');

let arrSliderItem = Array.from(sliderItem);
console.log(arrSliderItem);

let activeItem = arrSliderItem.findIndex(idx => idx.className = 'slider__item slider__item_active');
console.log(activeItem);

next.onclick = function() {
    arrSliderItem[activeItem].className = 'slider__item';

    (activeItem !== arrSliderItem.length-1) ? activeItem += 1 : activeItem = 0;

    arrSliderItem[activeItem].className = 'slider__item slider__item_active';
}

prev.onclick = function() {
    arrSliderItem[activeItem].className = 'slider__item';

    (activeItem !== 0) ? activeItem -= 1 : activeItem = arrSliderItem.length-1;

    arrSliderItem[activeItem].className = 'slider__item slider__item_active';
}