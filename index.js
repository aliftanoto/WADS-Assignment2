document.addEventListener("DOMContentLoaded", function() {
   
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

   
    document.querySelectorAll(".services, .article-item, .event-item, .hospital").forEach(item => {
        item.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.05) translateY(-5px)";
        });
        item.addEventListener("mouseout", function() {
            this.style.transform = "scale(1) translateY(0)";
        });
    });
});

/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for menu links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Simple bounce effect on hover
    document.querySelectorAll(".service-item, .article-item, .event-item, .hospital-item").forEach(item => {
        item.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.05) translateY(-5px)";
        });
        item.addEventListener("mouseout", function() {
            this.style.transform = "scale(1) translateY(0)";
        });
    });

    // Dynamic typing effect
    function typeEffect(element, text, speed) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    const typingElement = document.getElementById("typing-text");
    if (typingElement) {
        typeEffect(typingElement, "Welcome to Our Website", 100);
    }
});

const stars = document.querySelectorAll('.star');
const scoreText = document.getElementById('scoreText');
let currentRating = 3;

// Set the initial rating (3 stars selected)
updateStars(currentRating);
scoreText.textContent = "Rating: " + currentRating;

function updateStars(rating) {
    stars.forEach(star => {
        const value = parseInt(star.getAttribute('data-value'));
        if (value <= rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

