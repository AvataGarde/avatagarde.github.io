// Dark mode toggle
(function () {
    const toggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Restore saved theme or respect system preference
    const saved = localStorage.getItem('theme');
    if (saved) {
        html.setAttribute('data-theme', saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        html.setAttribute('data-theme', 'dark');
    }

    toggle.addEventListener('click', function () {
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });
})();

// Fade-in on scroll (IntersectionObserver)
(function () {
    var targets = document.querySelectorAll('.fade-in');
    if (!('IntersectionObserver' in window)) {
        // Fallback: just show everything
        targets.forEach(function (el) { el.classList.add('visible'); });
        return;
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    targets.forEach(function (el) { observer.observe(el); });
})();

// Mobile hamburger menu
(function () {
    var hamburger = document.getElementById('nav-hamburger');
    var navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            hamburger.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });
})();
