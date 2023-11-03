// Nav Toggle 
// Select Button and Links
const navBtn = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');

// add event Listener 
navBtn.addEventListener('click', () => {
    links.classList.toggle('show-links');
})

// Smooth Scroll 
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
        // Prevent Default
        e.preventDefault();
        links.classList.remove('show-links');

        const id = e.target.getAttribute('href').slice(1);
        const element = document.getElementById(id);

        let position = element.offsetTop - 62;

        window.scrollTo({
            left: 0,
            top: position,
            behavior: "smooth"
        });
    });
});