let menuLink = document.querySelectorAll('.menu__item a');

let arrLink = Array.from(menuLink);

console.log(arrLink);

for (let i = 0; i < arrLink.length; i++) {
    let list = arrLink[i].nextElementSibling;

    if (list) {
        arrLink[i].onclick = function() {
            list.className = 'menu menu_sub menu_active';
            return false;
        }
        
    }
}