let dead = document.getElementById('dead');
let lost = document.getElementById('lost');


function getHole(index) {
    return document.getElementById(`hole${index}`)
}

for (let i = 0; i <= 9; i++) {
    const hole = getHole(i + 1);

    hole.onclick = function() {
        if (hole.classList.contains('hole_has-mole')) {
            dead.textContent++;
        } else {
            lost.textContent++;
        }

        if (dead.textContent === '10') {
            alert('Вы выиграли');
            dead.textContent = '0';
            lost.textContent = '0';
        } else if (lost.textContent === '5') {
            alert('Вы проиграли');
            dead.textContent = '0';
            lost.textContent = '0';
        }
    }
}
