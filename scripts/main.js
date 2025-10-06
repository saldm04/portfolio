const typingTexts = [
  'Web Developer',
  'Data Engineer',
  'Researcher'
];
const typingElement = document.getElementById('typing');
let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingInterval;

function type() {
  const currentText = typingTexts[typingIndex % typingTexts.length];
  const displayedText = isDeleting
    ? currentText.substring(0, charIndex--)
    : currentText.substring(0, charIndex++);

  typingElement.textContent = displayedText;

  if (!isDeleting && charIndex === currentText.length + 1) {
    isDeleting = true;
    typingInterval = setTimeout(type, 1500);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    typingIndex++;
  }

  const speed = isDeleting ? 80 : 140;
  typingInterval = setTimeout(type, speed);
}

document.addEventListener('DOMContentLoaded', () => {
  type();
  setupIntersectionObserver();
  setupNavbar();
  setupThemeToggle();
  setupContactForm();
  document.getElementById('year').textContent = new Date().getFullYear();
});

function setupIntersectionObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    }
  );

  document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach((el) => {
    observer.observe(el);
  });
}

function setupNavbar() {
  const navbar = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link');

  function handleScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  handleScroll();
  window.addEventListener('scroll', handleScroll);

  const sectionIds = [...navLinks].map((link) => link.getAttribute('href'));
  const sections = sectionIds
    .filter((href) => href && href.startsWith('#'))
    .map((href) => document.querySelector(href));

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove('active'));
          const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    },
    {
      threshold: 0.6
    }
  );

  sections.forEach((section) => {
    if (section) sectionObserver.observe(section);
  });
}

function setupThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  const iconLight = themeToggle.querySelector('.icon-light');
  const iconDark = themeToggle.querySelector('.icon-dark');

  const storedTheme = localStorage.getItem('preferred-theme');
  if (storedTheme) {
    applyTheme(storedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('preferred-theme', newTheme);
  });

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    updateThemeIcons(theme);
  }

  function updateThemeIcons(theme) {
    if (theme === 'dark') {
      iconLight.classList.add('d-none');
      iconDark.classList.remove('d-none');
      document.body.classList.add('dark-mode');
    } else {
      iconLight.classList.remove('d-none');
      iconDark.classList.add('d-none');
      document.body.classList.remove('dark-mode');
    }
  }
}

function setupContactForm() {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    status.textContent = 'Invio in corso...';

    try {
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        status.textContent = 'Grazie! Ti risponderò a breve.';
        form.reset();
      } else {
        throw new Error('Errore di rete');
      }
    } catch (error) {
      status.textContent = 'Impossibile inviare il messaggio. Scrivimi via email.';
      status.classList.add('text-danger');
    }

    setTimeout(() => {
      status.textContent = '';
      status.classList.remove('text-danger');
    }, 5000);
  });
}

window.addEventListener('beforeunload', () => {
  clearTimeout(typingInterval);
});
