
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    // Check if the user has scrolled more than 550 pixels
    if (window.scrollY > 550) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});