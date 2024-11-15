document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded and ready.");

    // Navbar Scroll Check
    const navbar = document.querySelector(".navbar");

    function handleNavbarScroll() {
        if (window.scrollY > 600) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }
    
    window.addEventListener("scroll", handleNavbarScroll);

    //About Text and Image Transition
    const about = document.querySelector('#about'); // Adjust selector if necessary
    const aboutSection = document.querySelector('.about-section');
    const aboutText = document.querySelector('.about-text');
    const aboutImages = document.querySelector('.about-images');

    const textObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("About text is in view, triggering fade-in animation.");
                // Add classes to trigger animations
                aboutText.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the section is visible

    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("About images are in view, triggering slide-in animation.");
                aboutImages.classList.add('slide-in');
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    }, { threshold: 0.1 });

    // Start observing each element
    if (aboutText) textObserver.observe(aboutText);
    if (aboutImages) imageObserver.observe(aboutImages);


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
            top: targetSection.offsetTop - 70,
            behavior: "smooth"
        });
    }

    



    // Contact Form Validation and Submission
    const contactForm = document.querySelector('#contact-form');
    console.log("Contact form element:", contactForm); // Debugging log

    // Ensure contactForm exists before adding an event listener
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            console.log("Submit button clicked."); // Debugging log

            const firstname = document.querySelector('#firstname').value.trim();
            const lastname = document.querySelector('#lastname').value.trim();
            const mobile = document.querySelector('#mobile').value.trim();
            const email = document.querySelector('#email').value.trim();
            const message = document.querySelector('#message').value.trim();

            let isValid = true;

            // First Name validation
            if (firstname === "") {
                showError('firstname', 'Please enter your first name');
                isValid = false;
            } else {
                clearError('firstname');
            }

            // Last Name validation
            if (lastname === "") {
                showError('lastname', 'Please enter your last name');
                isValid = false;
            } else {
                clearError('lastname');
            }

            // Mobile Number validation (10 digits)
            const mobilePattern = /^[0-9]{10}$/;
            if (!mobilePattern.test(mobile)) {
                showError('mobile', 'Mobile number must be a 10-digit number');
                isValid = false;
            } else {
                clearError('mobile');
            }

            // Email validation
            if (!validateEmail(email)) {
                showError('email', 'Please enter a valid email address');
                isValid = false;
            } else {
                clearError('email');
            }

            

            // Message validation (minimum 50 characters)
            const minMessageLength = 50;
            if (message.length < minMessageLength) {
                showError('message', `Message must be at least ${minMessageLength} characters long`);
                isValid = false;
            } else {
                clearError('message');
            }

            // If form is valid, display success message and reset the form
            if (isValid) {
                alert("Thank you for your message!");
                contactForm.reset();
            }
        });
    } else {
        console.error("Contact form not found.");
    }

    // Helper functions for showing and clearing errors
    function showError(field, message) {
        const fieldElement = document.querySelector(`#${field}`);
        const errorElement = document.querySelector(`#${field}-error`);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('error-message');
            // console.log(`Error in ${field}: ${message}`); // Debugging log
        } else {
            console.error(`Error span for ${field} not found.`);
        }
    }

    function clearError(field) {
        const fieldElement = document.querySelector(`#${field}`);
        const errorElement = document.querySelector(`#${field}-error`);
        if (errorElement) {
            errorElement.textContent = "";
            fieldElement.classList.remove('error');
        }
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }
});


    
    //Scroll to top on page reload
    // setTimeout(function () {
    //     window.scrollTo(0, 0);
    // }, 0);



    // $('.carousel').carousel({
    //     interval: 200
    // });



    





