const observer = new IntersectionObserver((entries) => {
    console.log(entries);
    entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting);
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
Array.from(hiddenElements).forEach((el) => observer.observe(el));
