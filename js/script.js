// Add custom JavaScript here
//Typing Effect

function runTypingEffect() {
  const text = "I am Durga Devi";
  const typeingElement = document.getElementById("typing-text");
  const typingDelay = 300; // 100 ms

  typeText(text, typeingElement, typingDelay);
}

function typeText(text, typeingElement, typingDelay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typeingElement.textContent += text.charAt(i);
    }, typingDelay * i);
  }
}

document.addEventListener("DOMContentLoaded", runTypingEffect);
