'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
});

function viewImage(event, src) {
    event.preventDefault();
    document.getElementById('image-viewer').src = src;
}

// Add event listeners to image links
document.querySelectorAll('#go a').forEach(link => {
    link.addEventListener('click', function(event) {
        viewImage(event, this.href);
    });
});

// Set default image in the viewer when the page loads
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('image-viewer').src = './ButtonPage/stephenShedden01.png';
});
