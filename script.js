const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

// Create and append the text box div
let lightboxTextBox = document.querySelector('.text-box');
if (!lightboxTextBox) {
    lightboxTextBox = document.createElement('div');
    lightboxTextBox.className = 'text-box';
    lightboxTextBox.style.display = 'none'; // Initially hidden
    lightbox.querySelector('.lightbox-content').appendChild(lightboxTextBox);
}

function openLightbox() {
    lightbox.style.display = 'flex';
    document.body.classList.add('no-scroll'); // Disable background scrolling
}

function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.classList.remove('no-scroll'); // Re-enable background scrolling
}


document.querySelectorAll('.portfolio-item button').forEach(button => {
    button.addEventListener('click', () => {
        const isInfoButton = button.classList.contains('info-button');
        const isTHCButton = button.classList.contains('THC-button');

        if (isInfoButton || isTHCButton) {
            const infoText = button.getAttribute('data-info') || 'No additional information available.';
            lightboxImg.style.display = 'none';
            lightboxTextBox.innerHTML = infoText; 
            lightboxTextBox.style.display = 'block'; 
        } else {
            const fullsizeSrc = button.querySelector('img').getAttribute('data-fullsize');
            lightboxImg.src = fullsizeSrc;
            lightboxImg.style.display = 'block'; 
            lightboxTextBox.style.display = 'none'; 
        }

        openLightbox();
    });
});

// Close button functionality
closeBtn.addEventListener('click', closeLightbox);

// Close lightbox on outside click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });

         //Close the menu when clicking on a button
        const menuButtons = mobileMenu.querySelectorAll('button');
        menuButtons.forEach(button => {
            button.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
            });
        });
        // Close the menu when clicking outside of it
        document.addEventListener('click', (event) => {
            if (!mobileMenu.contains(event.target) && !hamburger.contains(event.target)) {
                mobileMenu.classList.remove('open');
            }
        });
    }
    
})
