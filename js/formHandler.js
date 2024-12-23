import { sendEmail } from './emailService.js';

export const initializeForm = () => {
    const form = document.querySelector('.contact-form');
    const submitButton = form.querySelector('.submit-btn');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        const formData = {
            name: form.querySelector('input[name="name"]').value,
            email: form.querySelector('input[name="email"]').value,
            phone: form.querySelector('input[name="phone"]').value,
            message: form.querySelector('textarea[name="message"]').value
        };

        const result = await sendEmail(formData);

        if (result.success) {
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
        } else {
            alert('Sorry, there was an error sending your message. Please try again or contact us directly.');
        }

        // Reset button state
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
    });
};