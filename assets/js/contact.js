document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  const body = `Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0A%0A${message}`;
  const mailtoLink = `mailto:info@solarclean.com?subject=${encodeURIComponent(subject)}&body=${body}`;

  window.location.href = mailtoLink;
  alert('Your email app will open with your message ready to send.');
  this.reset();
});
