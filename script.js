document.addEventListener("DOMContentLoaded", function() {
    // Handle Get Started button click with email validation
    const getStartedButton = document.querySelector('.get_started');
    const emailInput = document.querySelector('.email');

    getStartedButton.addEventListener('click', function() {
        const email = emailInput.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email pattern for validation

        if (emailPattern.test(email)) {
            alert(`Thank you for joining Netflix, ${email}!`);
            emailInput.value = ''; // Clear the input field
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Handle Sign In button click
    const signInButton = document.querySelector('.signin_button');
    signInButton.addEventListener('click', function() {
        alert('Redirecting to the Sign-In page...');
    });

    // Handle language selection
    const languageSelect = document.getElementById('LanguageSelect');
    languageSelect.addEventListener('change', function() {
        alert(`Language changed to ${this.value}`);
    });

    // Play/pause videos on hover
    const videos = document.querySelectorAll('video');

    videos.forEach((video) => {
        video.addEventListener('mouseenter', () => video.play());
        video.addEventListener('mouseleave', () => video.pause());
    });

    // Highlight buttons on hover
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = '#f40612'; // Highlight color
            button.style.transform = 'scale(1.1)'; // Slightly enlarge the button
        });
        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = '#dc030f'; // Revert to original color
            button.style.transform = 'scale(1)'; // Revert to original size
        });
    });

    // Toggle visibility of sections (example for expanding/collapsing content)
    const cards = document.querySelectorAll('.card_1, .card_2, .card_3, .card_4');

    cards.forEach((card) => {
        card.addEventListener('click', function() {
            const description = card.querySelector('h3');
            if (description.style.display === 'none' || description.style.display === '') {
                description.style.display = 'block';
            } else {
                description.style.display = 'none';
            }
        });
    });

    // Adding fade-in effect to the hero section
    const heroSection = document.querySelector('.hero_card');
    heroSection.style.opacity = 0;
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            heroSection.style.opacity = 1;
            heroSection.style.transition = 'opacity 1s ease-in-out';
        }
    });
});
