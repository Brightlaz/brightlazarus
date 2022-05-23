const infoPage = document.querySelector('#body2')
const test = document.querySelector('#overview')





test.addEventListener('click', () => {
    infoPage.classList.add('slideOut')
    setTimeout(change, 2000)
})

function change() {
    location.href = 'index.html#logo'
}