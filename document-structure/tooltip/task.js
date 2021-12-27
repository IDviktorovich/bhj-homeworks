const tipElement = document.querySelectorAll('.has-tooltip');


for (let i = 0; i < tipElement.length; i++) {
    let title = tipElement[i].getAttribute('title');

    let tip = document.createElement('div');
    tip.className = 'tooltip tooltip_active';
    tip.innerHTML = `${title}`;

    tipElement[i].addEventListener('click', (event) => {
        event.preventDefault();
        
        if (tipElement[i].nextElementSibling !== tip) {
            tipElement[i].after(tip);
        } else {
            tip.remove();
        }
    })
}
