// js/main.js - Umumiy JavaScript funksiyalari uchun

document.addEventListener('DOMContentLoaded', function () {
    console.log("Main JavaScript file loaded.");

    // Example: Highlight active navigation link
    const navLinks = document.querySelectorAll('header nav ul li a');
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split("/").pop();
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.style.fontWeight = 'bold';
            link.style.textDecoration = 'underline';
            link.style.color = '#5cb85c'; // Highlight color
        }
    });

    // Add any other global scripts here
    // For example, handling form submissions with Fetch API, 
    // or initializing common UI components.

    // Placeholder for form submission handling (e.g., login, registration, etc.)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            console.log(`Form submitted: ${form.id}`);
            // In a real application, you would gather form data and send it to a server.
            // For example: new FormData(form)
            alert('Form submission is for demonstration only. Check console for details.');
        });
    });

}); 