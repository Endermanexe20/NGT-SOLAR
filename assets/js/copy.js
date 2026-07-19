document.querySelectorAll('.copy-btn').forEach((btn) => {
  const icon = btn.querySelector('i');
  const defaultIconClass = icon ? icon.className : '';

  btn.addEventListener('click', async () => {
    const text = btn.getAttribute('data-copy') || btn.textContent.trim();

    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      const temp = document.createElement('textarea');
      temp.value = text;
      temp.style.position = 'fixed';
      temp.style.opacity = '0';
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      document.body.removeChild(temp);
    }

    if (icon) {
      icon.className = 'fa-solid fa-check text-emerald-500';
    }
    btn.classList.add('copied');

    clearTimeout(btn._copyTimeout);
    btn._copyTimeout = setTimeout(() => {
      if (icon) icon.className = defaultIconClass;
      btn.classList.remove('copied');
    }, 1600);
  });
});
