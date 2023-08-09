const logInOverlay = document.getElementById('login-overlay');
const backdrop1Element = document.getElementById('backdrop1');
const signUpOverlay = document.getElementById('signup-overlay');
const backdrop2Element = document.getElementById('backdrop2');

const logInButton = document.getElementById('login');
const signUpButton = document.getElementById('signup');
const cancelButtonForLogIn = document.getElementById('canceller-login');
const cancelButtonForSignUp = document.getElementById('canceller-signup');
const registerLink = document.getElementById('register-now');
const loginLink = document.getElementById('login-now');


logInButton.addEventListener('click', openLogInOverlay);
signUpButton.addEventListener('click', openSignUpOverlay);
cancelButtonForLogIn.addEventListener('click', closeLogInOverlay);
cancelButtonForSignUp.addEventListener('click', closeSignUpOverlay);
backdrop1Element.addEventListener('click', closeLogInOverlay);
backdrop2Element.addEventListener('click', closeSignUpOverlay);
registerLink.addEventListener('click', openSignUpOverlay);
loginLink.addEventListener('click', openLogInOverlay);