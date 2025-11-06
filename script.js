// Initialize EmailJS
emailjs.init("YOUR_USER_ID");

const form = document.getElementById('contact-form');
const response = document.getElementById('form-response');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(() => {
      response.textContent = "Message sent successfully!";
      form.reset();
    }, (error) => {
      response.textContent = "Failed to send message. Please try again.";
      console.error(error);
    });
});
