document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.getElementById('hamburger-menu');
    var navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active'); // Toggle the visibility of the nav menu
        });
    } else {
        console.error('Menu elements not found!');
    }
});
