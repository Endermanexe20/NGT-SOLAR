const params = new URLSearchParams(window.location.search);
document.getElementById('p-name').value = params.get('order') || 'General Inquiry';

document.getElementById('checkout-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const product = document.getElementById('p-name').value;
  const name = document.getElementById('customer_name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();

  const body = `Product: ${product}%0AName: ${name}%0APhone: ${phone}%0AAddress: ${address}`;
  const mailtoLink = `mailto:info@solarclean.com?subject=New Order - ${encodeURIComponent(product)}&body=${body}`;

  window.location.href = mailtoLink;
  alert('Your email app will open to confirm your order.');
});
