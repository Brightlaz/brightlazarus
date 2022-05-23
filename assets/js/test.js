const infoLink = document.querySelector('#info');
const overviewLink = document.querySelector('#overview')
const one = document.querySelector('.contain1');
const two = document.querySelector('.contain2');
const slides = document.querySelector('.slides')
infoLink.addEventListener('click', function() {
    remove(two, one)
    setTimeout(() => {
        one.classList.add('off');
        two.classList.remove('off');
        slides.classList.add('sliderReverse')
    }, 1000)
    setTimeout(() => {
        two.classList.add('slideIn')
    }, 1000)
})
overviewLink.addEventListener('click', function() {
    remove(one, two)
    setTimeout(() => {
        two.classList.add('off');
        one.classList.remove('off');
        slides.classList.remove('sliderReverse')
    }, 1000)
    setTimeout(() => { one.classList.add('slideIn') }, 1000)
})

function remove(first, second) {
    first.classList.remove('slideOut')
    second.classList.remove('slideIn')
    second.classList.add('slideOut')
}