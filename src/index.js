document.addEventListener('DOMContentLoaded', () => {
    // Get a reference to the form element
    const form = document.getElementById('create-task-form');

    // Add an event listener for the form's submit event
    form.addEventListener('submit', (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Your custom logic for handling the form submission goes here
        // For example, you can retrieve form data and perform AJAX requests

        // Access form data (if needed)
        const formData = new FormData(form);
        const formDataObject = Object.fromEntries(formData.entries());
        console.log(formDataObject);
    })
    });
