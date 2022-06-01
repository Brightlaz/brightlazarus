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
const overview = document.querySelector('.container2');
const contain1 = document.querySelector('.contain1')
const contain2 = document.querySelector('.contain2')

const nav = document.querySelector('nav');
const infoNav = document.querySelector('.infoNav');
const overviewNav = document.querySelector('.overviewNav')
const info = document.querySelector('#info');
const body = document.querySelector('#body');
const homeLink = document.querySelector('#home');
const homeLink2 = document.querySelector('#home2')
const home = document.querySelector('.container');

// Download resume button
const download = document.querySelector('#download')

// Type variables
const typingText = document.querySelector('#typing-text');
const cursor = document.querySelector('.cursor');
const toggle = document.querySelector('#toggle')
const data = ["HI,", " I'M", " BRIGHT", " LAZARUS", " I", " AM", " A", " FRONT-END", " WEB", " DEVELOPER"]
const typingDelay = 120;
const loadingDelay = 1500;
let dataIndex = 0;
let charIndex = 0;


// Main functions and helper functions
/**
 * To make the slider effects through the pages
 * @param {*indicates next or prev} control 
 * @param {*make visible the present navbar} nav1 
 * @param {*make invisible the prev navbar} nav2 
 * @param {*border style} color1 
 * @param {*make invisible the prev slide} slide2 
 * @param {*make visible the present slide} slide1 
 */
function makeSlider(control, nav1, nav2, color1, slide2, slide1 = infoNav) {
    slider.style.transition = 'transform 0.4s ease-in-out';
    control;
    slider.style.transform = 'translateX(' + (-100 * counter) + '%)';
    // slider.classList.add('move')
    nav1.classList.remove('off');
    nav2.classList.add('off');
    slide2.classList.remove('off');
    slide1.classList.add('off')
    nav.style.borderBottom = color1
}
/**
 * To scroll to the home page
 */
function homeScroll() {
    const flow = document.querySelector('#flow');
    window.scrollTo({
        top: flow.offsetTop,
        behavior: 'auto'
    })
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
/**
 * tping effect
 */
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
/**
 * Scrolling effect
 * @param {*scroll direction} where 
 */
function scroll(where) {
    window.scrollTo({
        top: where.offsetTop,
        behavior: 'smooth'
    })
}
/**
 * Building a fixed navbar
 */
function fixedNav() {
    if (window.scrollY == home.offsetTop) {
        if (!home.classList.contains('off'))
            nav.classList.remove('nav_fixed')
    } else {
        nav.classList.add('nav_fixed')
    }
}
/**
 * To hide a page
 * @param {*which page} container1 
 */
function hidden(container1) {
    container1.classList.add('off')
}


// Event listener

/**
 * Page loaded
 */
window.addEventListener('DOMContentLoaded', () => {
    fixedNav();
    contain2.classList.add('off');
    if (nav.className !== 'nav_fixed') {
        overview.classList.add('off')
        setTimeout(type, loadingDelay)
    } else {
        hidden(home)
    }
});


/**
 * Event listeners for the page sliders controls
 */
slider.style.transform = 'translateX(' + (-100 * counter) + ' %)';
// slider.classList.add('move')
info.addEventListener('click', () => {
    if (counter >= slides.length - 1) return;
    makeSlider(counter++, overviewNav, infoNav, '1px solid white', contain2);
    setTimeout(() => {
        window.scrollTo({
            top: contain2.offsetTop,
            behavior: 'auto'
        })
    }, 300)
})
test.addEventListener('click', () => {
    if (counter <= 0) return;
    makeSlider(counter--, infoNav, overviewNav, 'transparent', contain1, contain2);
    setTimeout(() => {
        window.scrollTo({
            top: contain1.offsetTop,
            behavior: 'auto'
        })
    }, 300)
})
homeLink2.addEventListener('click', () => {
    if (counter <= 0) return;
    makeSlider(counter--, infoNav, overviewNav, 'transparent', contain1, contain2)
    setTimeout(() => {
        homeScroll()
    }, 400)

})

/**scrolling event listeners */
scrollDown.addEventListener('click', function() {
    overview.classList.remove('off');
    scroll(nav);
    setTimeout(() => { hidden(home) }, 700)

})
homeLink.addEventListener('click', function() {
    homeScroll()
})
window.addEventListener('scroll', function() {
    fixedNav();
})

/**
 * Download resume
 */
download.addEventListener('click', () => {
    window.open('assets/Resume/my_profile_resume.pdf', '_blank')
})