const chatWidget = document.querySelector('.chat-widget');

const messages = document.querySelector('.chat-widget__messages');

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
});

let now = new Date();
let currentTime = now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();

chatWidget.addEventListener('keyup', (event) => {
    const chatInput = document.getElementById('chat-widget__input');

    let botMessages = ['Доброе утречко', 'Не хочу с тобой разговаривать', 'Мы и так лучшие', 'Не пиши свои вопросы', 'Кем ты себя возомнил?!', 'Успокойся']
    let randomBotMessage = botMessages[Math.floor(Math.random() * botMessages.length)];
    
    if (event.key === 'Enter') {
        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${currentTime}</div>
            <div class="message__text">${chatInput.value}</div>
        </div>
        <div class="message">
            <div class="message__time">${currentTime}</div>
            <div class="message__text">
                ${randomBotMessage}
            </div>
        </div>`
        chatInput.value = '';
    }
});


