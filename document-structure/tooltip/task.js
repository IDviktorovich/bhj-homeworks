const tipElement = document.querySelectorAll('.has-tooltip');


for (let i = 0; i < tipElement.length; i++) {
    let title = tipElement[i].getAttribute('title');

    let tip = document.createElement('div');
    tip.className = 'tooltip';
    tip.innerHTML = `${title}`;
    tipElement[i].after(tip);

    tipElement[i].addEventListener('click', (event) => {
        event.preventDefault();

        let coords = tipElement[i].getBoundingClientRect();
        console.log(coords);
        tip.style.left = coords.left + 'px';
        tip.style.top = coords.bottom + 'px';

        tip.classList.toggle('tooltip_active');
    })
}
