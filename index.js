    // Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        window.scrollTo(0, 0);
    }, 0);

    
    // Navbar Toggle for Small Screens
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarMenu = document.querySelector('.navbar-collapse');
    navbarToggler.addEventListener('click', function () {
        navbarMenu.classList.toggle('show');    
    });

    // Smooth Scroll Functionality
    const links = document.querySelectorAll('.navbar-nav a');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 70, // Adjusts for navbar height
            behavior: "smooth"
        });
    }

    function confirmCall() {
        return confirm("Do you want to call this number?");
    }

    function confirmEmail() {
        return confirm("Do you want to send an email to this address?");
    }

    
    // Contact Form Validation
    const contactForm = document.querySelector('#contact-form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;
        let valid = true;

        if (name.trim() === "") {
            showError('name', 'Please enter your name');
            valid = false;
        } else {
            clearError('name');
        }

        if (!validateEmail(email)) {
            showError('email', 'Please enter a valid email');
            valid = false;
        } else {
            clearError('email');
        }

        if (message.trim() === "") {
            showError('message', 'Please enter your message');
            valid = false;
        } else {
            clearError('message');
        }

        if (valid) {
            alert("Thank you for your message!");
            contactForm.reset();
        }
    });

    function showError(field, message) {
        const fieldElement = document.querySelector(`#${field}`);
        const errorElement = document.querySelector(`#${field}-error`);
        errorElement.textContent = message;
        fieldElement.classList.add('error');
    }

    function clearError(field) {
        const fieldElement = document.querySelector(`#${field}`);
        const errorElement = document.querySelector(`#${field}-error`);
        errorElement.textContent = "";
        fieldElement.classList.remove('error');
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }
});


$('.carousel').carousel({
    interval: 0.2
  });




