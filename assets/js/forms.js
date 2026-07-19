async function handleFormspreeSubmit(form, statusEl, successMessage) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalLabel = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending…';
    statusEl.classList.add('hidden');

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        statusEl.textContent = successMessage;
        statusEl.className = 'mt-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 text-sm font-medium';
        form.reset();
      } else {
        const data = await response.json().catch(() => null);
        const errorMsg = data && data.errors
          ? data.errors.map((err) => err.message).join(', ')
          : (data && data.message) || 'Something went wrong. Please try again or contact us directly.';
        statusEl.textContent = errorMsg;
        statusEl.className = 'mt-4 rounded-xl bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm font-medium';
      }
    } catch (err) {
      statusEl.textContent = 'Network error — please check your connection and try again.';
      statusEl.className = 'mt-4 rounded-xl bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm font-medium';
    }

    statusEl.classList.remove('hidden');
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalLabel;
  });
}
