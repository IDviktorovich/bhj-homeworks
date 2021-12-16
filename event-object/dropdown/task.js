const listItem = document.querySelectorAll('.dropdown__item');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownValue = document.querySelector('.dropdown__value');
const link = document.querySelectorAll('.dropdown__link')

dropdownValue.addEventListener('click', function() {
    if (dropdownList.classList.contains('dropdown__list_active')) {
        dropdownList.className = "dropdown__list";
    } else {
        dropdownList.classList.add('dropdown__list_active');
    }
})

let arrListItem = Array.from(listItem);
let arrLink = Array.from(link);

for (let i = 0; i < arrLink.length; i++) {
    arrLink[i].onclick = function(event) {
        event.preventDefault();
    }
}
console.log(arrListItem);

for (let i = 0; i < arrListItem.length; i++) {
    arrListItem[i].addEventListener('click', function () {
        dropdownValue.textContent = this.textContent;
        dropdownList.className = "dropdown__list";
    })
}