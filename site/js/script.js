document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sound = document.getElementById("navClickSound");

    if (!sound) return;

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            // Pour les liens d'ancrage, laisser le son jouer avant de défiler
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                sound.currentTime = 0;
                sound.play().catch(err => console.warn("Audio bloqué :", err));
                
                // Naviguer après le son
                setTimeout(() => {
                    const targetId = this.getAttribute('href');
                    if (targetId !== '#') {
                        const targetElement = document.querySelector(targetId);
                        if (targetElement) {
                            targetElement.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                }, 300);
            }
        });
    });
});