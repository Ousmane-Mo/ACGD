document.addEventListener('DOMContentLoaded', function() {
    var backToTopButton = document.getElementById('bttb');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
});

function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}