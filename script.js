const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const toggleMenu = () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
};
hamburger.addEventListener('click', toggleMenu);
hamburger.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleMenu(); }
});
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Highlight the nav link of the section currently in view
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');
const setActive = () => {
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 160) current = s.id; });
    navItems.forEach(a => a.classList.toggle('active', a.getAttribute('href').slice(1) === current));
};
window.addEventListener('scroll', setActive, { passive: true });
setActive();
