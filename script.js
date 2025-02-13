// Search bar open and close function
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

// Search bar open and close function on webpage scrolling
window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
    loginForm.classList.remove('active');
};

// Login form open and close functions
let loginForm = document.querySelector('.login-form-container');
let loginFormClose = document.querySelector('#login-form-close');

// Register form open and close functions
let registerForm = document.querySelector('.register-form-container');
let registerFormClose = document.querySelector('#register-form-close');

// Forgot Password form open and close functions
let forgotPasswordForm = document.querySelector('.forgot-password-form-container');
let forgotPasswordFormClose = document.querySelector('#forgot-password-form-close');

// Open and close the login form
document.querySelector('#open-login-form').addEventListener('click', (event) => {
    event.preventDefault();
    registerForm.classList.remove('active');
    forgotPasswordForm.classList.remove('active');
    loginForm.classList.add('active');
    console.log('Login form opened');
});

loginFormClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
    console.log('Login form closed');
});

// Open and close the register form
document.querySelector('#open-register-form').addEventListener('click', (event) => {
    event.preventDefault();
    loginForm.classList.remove('active');
    forgotPasswordForm.classList.remove('active');
    registerForm.classList.add('active');
    console.log('Register form opened');
});

registerFormClose.addEventListener('click', () => {
    registerForm.classList.remove('active');
    console.log('Register form closed');
});

// Open and close the Forgot Password form
document.querySelector('#open-forgot-password').addEventListener('click', (event) => {
    event.preventDefault();
    loginForm.classList.remove('active');
    registerForm.classList.remove('active');
    forgotPasswordForm.classList.add('active');
    console.log('Forgot Password form opened');
});

// Back to Login from Forgot Password
document.querySelector('#back-to-login').addEventListener('click', (event) => {
    event.preventDefault();
    forgotPasswordForm.classList.remove('active');
    loginForm.classList.add('active'); // Show the login form
    console.log('Back to Login form');
});

// Close buttons for the forms
forgotPasswordFormClose.addEventListener('click', () => {
    forgotPasswordForm.classList.remove('active');
    console.log('Forgot Password form closed');
});


// Function to show the login form
function showLoginForm() {
    loginForm.classList.add('active'); // Show the login form
}

// Check login status on page load
window.onload = function() {
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    let loginIcon = document.getElementById('login-btn');

    if (isLoggedIn === 'true') {
        // User is logged in, change the header content to "Logout"
        loginIcon.innerHTML = '<span> Logout</span>';
        loginIcon.setAttribute('onclick', 'logout()');
    } else {
        // User is not logged in, show "Login"
        loginIcon.innerHTML = '<span> Login</span>';
        loginIcon.setAttribute('onclick', 'showLoginForm()');
    }
};


//menubar open and close function in small view

let menu=document.querySelector('#menu-bar');
let navBar=document.querySelector('.navbar');
menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');
});

//video controls
 
let videoBtn=document.querySelectorAll('.vid-btn');
videoBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src=btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});
// review slide function
let swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints:{
        640:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
    },
});
// brand name moving function
let brandSwiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
    },
});
// Search bar open and close function
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

// Search bar open and close function on webpage scrolling
window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
    loginForm.classList.remove('active');
};

// Login form open and close functions
let loginForm = document.querySelector('.login-form-container');
let loginFormClose = document.querySelector('#login-form-close');

// Register form open and close functions
let registerForm = document.querySelector('.register-form-container');
let registerFormClose = document.querySelector('#register-form-close');

// Forgot Password form open and close functions
let forgotPasswordForm = document.querySelector('.forgot-password-form-container');
let forgotPasswordFormClose = document.querySelector('#forgot-password-form-close');

// Open and close the login form
document.querySelector('#open-login-form').addEventListener('click', (event) => {
    event.preventDefault();
    registerForm.classList.remove('active');
    forgotPasswordForm.classList.remove('active');
    loginForm.classList.add('active');
    console.log('Login form opened');
});

loginFormClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
    console.log('Login form closed');
});

// Open and close the register form
document.querySelector('#open-register-form').addEventListener('click', (event) => {
    event.preventDefault();
    loginForm.classList.remove('active');
    forgotPasswordForm.classList.remove('active');
    registerForm.classList.add('active');
    console.log('Register form opened');
});

registerFormClose.addEventListener('click', () => {
    registerForm.classList.remove('active');
    console.log('Register form closed');
});

// Open and close the Forgot Password form
document.querySelector('#open-forgot-password').addEventListener('click', (event) => {
    event.preventDefault();
    loginForm.classList.remove('active');
    registerForm.classList.remove('active');
    forgotPasswordForm.classList.add('active');
    console.log('Forgot Password form opened');
});

// Back to Login from Forgot Password
document.querySelector('#back-to-login').addEventListener('click', (event) => {
    event.preventDefault();
    forgotPasswordForm.classList.remove('active');
    loginForm.classList.add('active'); // Show the login form
    console.log('Back to Login form');
});

// Close buttons for the forms
forgotPasswordFormClose.addEventListener('click', () => {
    forgotPasswordForm.classList.remove('active');
    console.log('Forgot Password form closed');
});


// Function to show the login form
function showLoginForm() {
    loginForm.classList.add('active'); // Show the login form
}

// Check login status on page load
window.onload = function() {
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    let loginIcon = document.getElementById('login-btn');

    if (isLoggedIn === 'true') {
        // User is logged in, change the header content to "Logout"
        loginIcon.innerHTML = '<span> Logout</span>';
        loginIcon.setAttribute('onclick', 'logout()');
    } else {
        // User is not logged in, show "Login"
        loginIcon.innerHTML = '<span> Login</span>';
        loginIcon.setAttribute('onclick', 'showLoginForm()');
    }
};


//menubar open and close function in small view

let menu=document.querySelector('#menu-bar');
let navBar=document.querySelector('.navbar');
menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');
});

//video controls
 
let videoBtn=document.querySelectorAll('.vid-btn');
videoBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src=btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});





