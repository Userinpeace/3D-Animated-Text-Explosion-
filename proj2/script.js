const textElement = document.getElementById('textElement');
const spans = textElement.children;

// Add mouseover animation
textElement.addEventListener('mouseover', () => {
    anime({
        targets: spans,
        translateX: () => anime.random(-250, 250), // Random X translation
        translateY: () => anime.random(-250, 250), // Random Y translation
        rotate: () => anime.random(-180, 180), // Random rotation
        scale: () => anime.random(0.5, 1.5), // Random scaling
        duration: 500, // Animation duration
        easing: 'easeInSine' // Easing function
    });
});

// Add mouseout animation to reset
textElement.addEventListener('mouseout', () => {
    anime({
        targets: spans,
        translateX: 0,
        translateY: 0,
        rotate: 0,
        scale: 1,
        duration: 500, // Animation duration
        easing: 'easeInSine' // Easing function
    });
});

// Handle click event for the "!" symbol
const clickableElement = document.querySelector('a.clickable');

clickableElement.addEventListener('click', (event) => {
    // Prevent the default behavior
    event.preventDefault();

    // Open the welcome.html in a new tab
    window.open('welcome.html', '_blank'); // Open the HTML file in a new tab
});
