function openLogInOverlay(event) {
    event.preventDefault();
    logInOverlay.style.display = 'block';
    backdrop1Element.style.display = 'block';
}

function openSignUpOverlay(event) {
    event.preventDefault();
    signUpOverlay.style.display = 'block';
    backdrop2Element.style.display = 'block';
}

function closeLogInOverlay(event) {
    event.preventDefault();
    logInOverlay.style.display = 'none'
    backdrop1Element.style.display = 'none'
}


function closeSignUpOverlay(event) {
    event.preventDefault();
    signUpOverlay.style.display = 'none'
    backdrop2Element.style.display = 'none'
}