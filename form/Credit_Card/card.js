function isCardNumberValid(number) {
	// normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
	return number === '1234123412341234'
}
function displayError(msg) {
    // Check if error element exists, if not create it
    let errorElement = document.querySelector('.errorMsg')
    if (!errorElement) {
        errorElement = document.createElement('div')
        errorElement.className = 'errorMsg'
        errorElement.style.color = 'red'
        errorElement.style.margin = '10px 0'
        document.querySelector('form').appendChild(errorElement)
    }
    errorElement.innerHTML = msg
}
function submitHandler(event) {
    event.preventDefault()
    let errorMsg = ''
    
    // Fix: Use correct way to access form inputs
    const cardNumber = this.elements.cardNumber.value
    console.log(cardNumber)
    
    // clear any previous errors
    displayError('')
    
    // check credit card number
    if (isNaN(cardNumber)) {
        // it is not a valid number
        errorMsg += 'Card number is not a valid number\n'
    } else if (!isCardNumberValid(cardNumber)) {
        // it is a number, but is it valid?
        errorMsg += 'Card number is not a valid card number\n'
    }
    
    if (errorMsg !== '') {
        // there was an error. stop the form and display the errors.
        displayError(errorMsg)
        return false
    }
    return true
}

document.querySelector('form').addEventListener('submit', submitHandler)