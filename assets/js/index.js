/**
 * Define Global Variables
 * 
 */
// Scroll variables
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let counter = 1
let size = slides[0].clientWidth

const scrollDown = document.querySelector('#scrollDown');
const overview = document.querySelector('.container2');

const nav = document.querySelector('nav');
const info = document.querySelector('#info');
const body = document.querySelector('#body');
const homeLink = document.querySelector('#home');
const home = document.querySelector('.container');

// Type variables
const typingText = document.querySelector('#typing-text');
const cursor = document.querySelector('.cursor');
const data = ["HI, I'M BRIGHT LAZARUS", "I AM A FRONT-END WEB DEVELOPER"];
const typingDelay = 200;
const loadingDelay = 2000;
let dataIndex = 0;
let charIndex = 0;



// slider.style.transform = 'translateX(' + (size * counter) + ' px)';
// info.addEventListener('click', () => {
//     slider.style.transition = 'transform 0.4s ease-in-out';
//     counter++;
//     slider.style.transform = 'translateX(' + (size * counter) + 'px)';
// })





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
    fixedNav();
    setTimeout(type, loadingDelay)

});

scrollDown.addEventListener('click', function() {
    overview.classList.remove('off');
    scroll(nav);
    setTimeout(() => { hidden(home) }, 500)

})
homeLink.addEventListener('click', function() {
    home.classList.remove('off')
    scroll(home)
    setTimeout(() => { hidden(overview) }, 500)
    if (window.scrollY === home.offsetTop) {
        nav.classList.remove('nav_fixed')
    }

    typingText.innerHTML = '';
    dataIndex = 0;
    charIndex = 0;
    setTimeout(type, loadingDelay);

})


function scroll(where) {
    window.scrollTo({
        top: where.offsetTop,
        behavior: 'smooth'
    })
}

function fixedNav() {
    if (window.scrollY == home.offsetTop) {
        if (!home.classList.contains('off'))
            nav.classList.remove('nav_fixed')
    } else {
        nav.classList.add('nav_fixed')
    }
}
window.addEventListener('scroll', function() {
    fixedNav();
})

function hidden(container1) {
    container1.classList.add('off')

}