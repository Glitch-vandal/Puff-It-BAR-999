const confirmAgeBtn = document.getElementById('confirm-age');
const denyAgeBtn = document.getElementById('deny-age');
const ageGate = document.getElementById('age-gate');
const siteShell = document.getElementById('site-shell');
const tabButtons = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.panel');
const faqItems = document.querySelectorAll('.faq-item');
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

function unlockSite() {
  ageGate.classList.add('hidden');
  siteShell.classList.remove('hidden');
}

if (confirmAgeBtn) {
  confirmAgeBtn.addEventListener('click', unlockSite);
}

if (denyAgeBtn) {
  denyAgeBtn.addEventListener('click', () => {
    window.location.href = 'https://www.google.co.za';
  });
}

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedPanel = button.dataset.panel;

    tabButtons.forEach((tab) => {
      const isActive = tab === button;
      tab.classList.toggle('active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
    });

    panels.forEach((panel) => {
      panel.classList.toggle('active', panel.id === selectedPanel);
    });
  });
});

faqItems.forEach((item) => {
  const trigger = item.querySelector('.faq-question');

  trigger.addEventListener('click', () => {
    const isOpen = item.classList.contains('active');

    faqItems.forEach((faq) => {
      faq.classList.remove('active');
    });

    if (!isOpen) {
      item.classList.add('active');
    }
  });
});
