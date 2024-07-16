const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');

sendButton.addEventListener('click', sendMessage);

function sendMessage() {
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = messageText;

        chatMessages.appendChild(messageElement);

        messageInput.value = '';
    }
}
