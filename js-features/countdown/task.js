let timer = document.getElementById('timer');

let countdown = setInterval(() => {
    timer.textContent--;
    if (timer.textContent === '0') {
        clearInterval(countdown);
        return alert('Вы победили в конкурсе!');
    }
    
},1000);

