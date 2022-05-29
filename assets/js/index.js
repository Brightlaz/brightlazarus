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
// const data = ["HI, I'M BRIGHT ", "I AM A FRONT-END", " WEB DEVELOPER"];
const data = ["HI,", " I'M", " BRIGHT", " LAZARUS", " I", " AM", " A", " FRONT-END", " WEB", " DEVELOPER"]
const typingDelay = 120;
const loadingDelay = 1500;
let dataIndex = 0;
let charIndex = 0;

window.addEventListener('DOMContentLoaded', () => {
    if (nav.className !== 'nav_fixed' && home.className == 'container') {
        overview.classList.add('off')
        fixedNav();
        setTimeout(type, loadingDelay)
    } else {
        hidden(home)
    }
});

function makeSlider(control, nav1, nav2, color1) {
    slider.style.transition = 'transform 0.4s ease-in-out';
    control;
    slider.style.transform = 'translateX(' + (-100 * counter) + '%)';
    // slider.classList.add('move')
    nav1.classList.remove('off');
    nav2.classList.add('off');
    nav.style.border = color1
}

slider.style.transform = 'translateX(' + (-100 * counter) + ' %)';
// slider.classList.add('move')
info.addEventListener('click', () => {
    if (counter >= slides.length - 1) return;
    makeSlider(counter++, overviewNav, infoNav, '1px solid white');
    setTimeout(() => {
        window.location = "index.html#header"
    }, 300)

})
test.addEventListener('click', () => {
    if (counter <= 0) return;
    makeSlider(counter--, infoNav, overviewNav, 'transparent');
    setTimeout(() => {
        window.location = "index.html#header"
    }, 300)
})
homeLink2.addEventListener('click', () => {
    if (counter <= 0) return;
    makeSlider(counter--, infoNav, overviewNav, 'transparent')
    setTimeout(() => {
        homeScroll()
    }, 400)

})

function homeScroll() {
    window.location = "index.html#flow"
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
        }
        typingText.innerHTML += data[dataIndex].charAt(charIndex);
        charIndex++
        setTimeout(type, typingDelay)
    } else if (dataIndex === 9) {
        cursor.classList.remove('typing')
    } else {
        setTimeout(() => { dataIndex++ }, typingDelay)
        if (dataIndex < data.length) {
            charIndex = 0
            setTimeout(type, typingDelay)
            if (dataIndex === 7) {
                setTimeout(() => {
                    toggle.classList.remove('off')
                }, 200)
            } else if (dataIndex === 3) {
                toggle.classList.add('off')
                charIndex = 0;
                typingText.innerHTML += '<br>'
            }
        }
    }
}
// function type() {
//     if (charIndex < data[dataIndex].length) {
//         if (!cursor.classList.contains('.typing')) {
//             cursor.classList.add('typing');
//         }
//         typingText.innerHTML += data[dataIndex].charAt(charIndex);
//         charIndex++
//         setTimeout(type, typingDelay)
//     } else if (charIndex === data[2].length) {
//         cursor.classList.remove('typing')
//     } else {
//         dataIndex++
//         if (dataIndex === 2) {
//             setTimeout(() => {
//                 toggle.classList.remove('off')
//             }, 200)
//             charIndex = 0;
//             setTimeout(type, typingDelay)
//         } else {
//             toggle.classList.add('off')
//             charIndex = 0;
//             typingText.innerHTML += '<br>'
//             setTimeout(type, typingDelay)

//         }
//     }
// }

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