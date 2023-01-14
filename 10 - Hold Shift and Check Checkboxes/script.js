const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
// console.log(checkboxes)
let lastChecked

function handleCheck(e) {
    // Checked if they had the shift key down,
    // AND check if they are checking it!
    let inBetween = false
    if (e.shiftKey && this.checked) {
        // go ahead and do what we please
        // loop over single checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox)
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween
                // console.log(inBetween)
                console.log('STARTING & ENDING LOOPING')
            }

            if (inBetween) {
                checkbox.checked = true
            }
            
        })
    }
    
    lastChecked = this
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
