// List of messages
const messages = [
    "You make the world more beautiful! 🌷",
    "You're as radiant as this flower! 🌼",
    "You've got petals of charm! 🌺",
    "You must be a magician because you just made my heart bloom! 💖",
    "Is it the flower, or is it you making everything brighter? 😘",
    "If beauty were a petal, you'd be a whole bouquet! 🌺🌸🌹",
    "I must be a bee because I'm attracted to your sweetness! 🐝💐"
];

// Function to display the flower pop-up
function showFlowerPopup() {
    const popup = document.getElementById('flowerPopup');
    const message = document.getElementById('flowerMessage');

    // Select a random message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    message.textContent = randomMessage;

    // Show the popup
    popup.style.display = 'block';
}

// Show the flower popup when the page loads
window.onload = showFlowerPopup;