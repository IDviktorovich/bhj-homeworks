let sliderItem = document.querySelectorAll('.slider__items div');
let next = document.querySelector('.slider__arrow_next');
let prev = document.querySelector('.slider__arrow_prev');

let arrSliderItem = Array.from(sliderItem);
console.log(arrSliderItem);

// let item = arrSliderItem.findIndex(idx => idx.className = 'slider__item slider__item_active');

let activeItemIndex = 0;

next.onclick = function() { 
    if (activeItemIndex < arrSliderItem.length) {
        arrSliderItem[activeItemIndex].className = 'slider__item';
        activeItemIndex += 1;
        arrSliderItem[activeItemIndex].classList.add('slider__item_active');
    } else {
        activeItemIndex = 0;
        arrSliderItem[activeItemIndex].classList.add('slider__item_active');
    }
}

prev.onclick = function() {
    arrSliderItem[activeItemIndex].className = 'slider__item';
    activeItemIndex -= 1;
}