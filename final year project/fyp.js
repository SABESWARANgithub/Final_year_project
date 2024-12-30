function showPage(pageId) {
    const pages = document.querySelectorAll('.content');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

const chatMessages = document.getElementById('chatMessages');

function appendMessage(content, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);

    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.textContent = content;

    messageDiv.appendChild(messageContent);
    chatMessages.appendChild(messageDiv);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();

    if (message) {
        appendMessage(message, 'user');
        userInput.value = '';

        setTimeout(() => {
            const botResponse = `I'm here to help with your healthcare needs. How can I assist you today?`;
            appendMessage(botResponse, 'bot');
        }, 1000);
    }
}