const divs = document.querySelectorAll('div')
const button = document.querySelector('button')

function logText(e) {
    console.log(this.classList.value)
    // e.stopPropagation() // Stop bubbling!
    // console.log(this)
}

divs.forEach((div) => div.addEventListener('click', logText, {
    capture: false,
    once: true // Once here make the event fire once even after clicking the the divs
}))

button.addEventListener('click', () => {
    console.log('Click!')
}, {
    once: true // The same here every time the button get clicked the even only fires once
})