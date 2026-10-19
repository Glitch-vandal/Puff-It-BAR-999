const confirmAgeBtn = document.getElementById('confirm-age');
const denyAgeBtn = document.getElementById('deny-age');
const ageGate = document.getElementById('age-gate');
const siteShell = document.getElementById('site-shell');
const tabButtons = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.panel');
const faqItems = document.querySelectorAll('.faq-item');
const yearEl = document.getElementById('year');
const AGE_KEY = 'pib_age_verified';

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

function applyGateState() {
  const isVerified = sessionStorage.getItem(AGE_KEY) === 'true';

  if (ageGate) {
    ageGate.classList.toggle('hidden', isVerified);
  }

  if (siteShell) {
    siteShell.classList.toggle('hidden', !isVerified);
  }
}

if (confirmAgeBtn) {
  confirmAgeBtn.addEventListener('click', () => {
    sessionStorage.setItem(AGE_KEY, 'true');
    applyGateState();
  });
}

if (denyAgeBtn) {
  denyAgeBtn.addEventListener('click', () => {
    window.location.href = 'https://www.google.co.za';
  });
}

applyGateState();

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
