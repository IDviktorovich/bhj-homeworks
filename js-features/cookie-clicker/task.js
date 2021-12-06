let sum = document.getElementById('clicker__counter');
let cookie = document.getElementById('cookie');

cookie.onclick = function() {
    sum.textContent++;
    if (sum.textContent % 2 != 0) {
        cookie.width = 150;
    } else {
        cookie.width = 200;
    }
}
