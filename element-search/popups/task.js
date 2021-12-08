let modalMain = document.getElementById('modal_main');
let modalSuccess = document.getElementById('modal_success');
let modalClose = document.getElementsByClassName('modal__close');

modalClose.item(0).onclick = function() {
    modalMain.className = 'modal';
}

modalClose.item(1).onclick = function() {
    modalSuccess.className = 'modal modal_active';
    modalMain.className = 'modal';
}

modalClose.item(2).onclick = function() {
    modalSuccess.className = 'modal';
}