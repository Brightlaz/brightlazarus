const typingText = document.querySelector('#typing-text');
const cursor = document.querySelector('.cursor')
const data = ["HI, I'M BRIGHT LAZARUS", "I AM A FRONT-END WEB DEVELOPER"];
const typingDelay = 200;
const loadingDelay = 2000;
let dataIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < data[dataIndex].length) {
        if (!cursor.classList.contains('.typing')) {
            cursor.classList.add('typing')
        }
        typingText.innerHTML += data[dataIndex].charAt(charIndex);
        charIndex++
        setTimeout(type, typingDelay)
    } else if (charIndex === data[1].length) {
        cursor.classList.remove('typing')
    } else {
        dataIndex++
        if (dataIndex === 1) {
            charIndex = 0;
            typingText.innerHTML += '<br>'
            setTimeout(type, typingDelay)
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, loadingDelay)
});