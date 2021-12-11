let modalMain = document.getElementById('modal_main');
let modalSuccess = document.getElementById('modal_success');
let modalClose = document.getElementsByClassName('modal__close');

for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].onclick = function() {
        const modal = this.closest('.modal');
        
        if (modal.classList.contains('modal_active')) {
            modal.className = 'modal';
        }
    }
    modalClose.item(1).onclick = function() {
        modalSuccess.className = 'modal modal_active';
        modalMain.className = 'modal';
    }
}