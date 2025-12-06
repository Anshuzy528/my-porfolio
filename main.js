// You can add animations here later
console.log("Portfolio loaded!");
// SCROLL REVEAL
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
});

reveals.forEach(r => observer.observe(r));
