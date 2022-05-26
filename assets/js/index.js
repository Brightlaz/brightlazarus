/**
 * Define Global Variables
 * 
 */
// Scroll variables
const slider = document.querySelector('.slider');
const test = document.querySelector('#test')
const slides = document.querySelectorAll('.slide');
let counter = 0;


const scrollDown = document.querySelector('#scrollDown');
const toggle = document.querySelector('#toggle')
const overview = document.querySelector('.container2');

const nav = document.querySelector('nav');
const infoNav = document.querySelector('.infoNav');
const overviewNav = document.querySelector('.overviewNav')
const info = document.querySelector('#info');
const body = document.querySelector('#body');
const homeLink = document.querySelector('#home');
const homeLink2 = document.querySelector('#home2')
const home = document.querySelector('.container');
// Type variables
const typingText = document.querySelector('#typing-text');
const cursor = document.querySelector('.cursor');
const data = ["HI, I'M BRIGHT LAZARUS", "I AM A FRONT-END WEB DEVELOPER"];
const typingDelay = 100;
const loadingDelay = 1500;
let dataIndex = 0;
let charIndex = 0;

function makeSlider(sign, nav1, nav2, color1, color2) {
    slider.style.transition = 'transform 0.4s ease-in-out';
    sign;
    slider.style.transform = 'translateX(' + (-100 * counter) + '%)';
    // slider.classList.add('move')
    nav1.classList.remove('off');
    nav2.classList.add('off');
    nav.style.backgroundColor = color1
    nav.style.color = color2
}

slider.style.transform = 'translateX(' + (-100 * counter) + ' %)';
// slider.classList.add('move')
info.addEventListener('click', () => {
    if (counter >= slides.length - 1) return;
    makeSlider(counter++, overviewNav, infoNav, 'whitesmoke', 'black');
    setTimeout(() => {
        window.location = "index.html#header"
    }, 300)

})
test.addEventListener('click', () => {
    if (counter <= 0) return;
    makeSlider(counter--, infoNav, overviewNav, 'black', 'white');
    setTimeout(() => {
        window.location = "index.html#header"
    }, 300)
})
homeLink2.addEventListener('click', () => {
    if (counter <= 0) return;
    makeSlider(counter--, infoNav, overviewNav, 'black', 'white')
    setTimeout(() => {
        homeScroll()
    }, 400)

})

function homeScroll() {
    home.classList.remove('off');
    toggle.classList.add('off')
    scroll(home)
    setTimeout(() => { hidden(overview) }, 600)
    if (window.scrollY === home.offsetTop) {
        nav.classList.remove('nav_fixed')
    }

    typingText.innerHTML = '';
    dataIndex = 0;
    charIndex = 0;
    setTimeout(type, loadingDelay);
}


function type() {
    if (charIndex < data[dataIndex].length) {
        if (!cursor.classList.contains('.typing')) {
            cursor.classList.add('typing');
            toggle.classList.add('off')
        }
        typingText.innerHTML += data[dataIndex].charAt(charIndex);
        charIndex++
        setTimeout(type, typingDelay)
    } else if (charIndex === data[1].length) {
        cursor.classList.remove('typing')
        setTimeout(() => {
            toggle.classList.remove('off')
        }, 200)
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
    if (!nav.classList.contains('nav_fixed')) {
        overview.classList.add('off')
        fixedNav();
        setTimeout(type, loadingDelay)
    } else {
        hidden(home)
    }
});

scrollDown.addEventListener('click', function() {
    overview.classList.remove('off');
    scroll(nav);
    setTimeout(() => { hidden(home) }, 600)

})
homeLink.addEventListener('click', function() {
    homeScroll()
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