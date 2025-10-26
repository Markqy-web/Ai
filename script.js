document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    const chatContainer = document.getElementById('chat-container');
    const promptCards = document.querySelectorAll('.prompt-card');

    // Nonchalant responses
    const loadingPhrases = [
        "Let me think... or not.",
        "Googling it, I guess.",
        "Meh, fine, I'll look it up.",
        "If I must...",
        "Sigh... checking now."
    ];
    
    const errorResponses = [
        "Couldn't find anything. Not that I looked hard.",
        "404 - My motivation not found.",
        "The internet is being difficult. Not my problem.",
        "I'd answer but... nah.",
        "Ask someone who cares more."
    ];

    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `flex mb-4 chat-message ${isUser ? 'justify-end' : ''}`;
        
        if (!isUser) {
            messageDiv.innerHTML = `
                <div class="bg-gray-700 rounded-full p-2 mr-3">
                    <i data-feather="cpu" class="text-green-400"></i>
                </div>
                <div class="flex-1">
                    <div class="bg-gray-700/50 rounded-xl p-4 inline-block">
                        <p>${message}</p>
                    </div>
                    <p class="text-xs text-gray-500 mt-1">Just now</p>
                </div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="flex-1 text-right">
                    <div class="bg-green-600/30 rounded-xl p-4 inline-block">
                        <p>${message}</p>
                    </div>
                    <p class="text-xs text-gray-500 mt-1">Just now</p>
                </div>
                <div class="bg-gray-700 rounded-full p-2 ml-3">
                    <i data-feather="user" class="text-green-400"></i>
                </div>
            `;
        }
        
        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
        feather.replace();
    }

    function simulateThinking() {
        const randomPhrase = loadingPhrases[Math.floor(Math.random() * loadingPhrases.length)];
        addMessage(randomPhrase);
    }

    function simulateError() {
        const randomError = errorResponses[Math.floor(Math.random() * errorResponses.length)];
        addMessage(randomError);
    }

    async function fetchWebSearch(query) {
        try {
            // In a real implementation, you would use a backend API to safely make web searches
            // For demo purposes, we'll simulate a response
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(`I found this about "${query}": It's probably something. I dunno, not my job to care.`);
                }, 2000);
            });
        } catch (error) {
            console.error('Error fetching data:', error);
            simulateError();
            return null;
        }
    }

    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const query = userInput.value.trim();
        if (!query) return;

        addMessage(query, true);
        userInput.value = '';
        
        simulateThinking();
        
        const response = await fetchWebSearch(query);
        if (response) {
            // Remove the loading message
            chatContainer.removeChild(chatContainer.lastChild);
            addMessage(response);
        }
    });

    // Add click handlers for prompt cards
    promptCards.forEach(card => {
        card.addEventListener('click', () => {
            const prompt = card.getAttribute('data-prompt');
            userInput.value = prompt;
            userInput.focus();
        });
    });

    // Allow pressing Enter to submit (but Shift+Enter for new line)
    userInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            chatForm.dispatchEvent(new Event('submit'));
        }
    });
});
