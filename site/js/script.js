document.addEventListener("DOMContentLoaded", function () {
            const navLinks = document.querySelectorAll(".nav-link");
            const sound = document.getElementById("navClickSound");

            navLinks.forEach(link => {
                link.addEventListener("click", function () {
                    sound.currentTime = 0; // Repart du début
                    sound.play();

                    // Arrêter le son après 1.9 secondes
                    setTimeout(() => {
                        sound.pause();
                        sound.currentTime = 0; // Remet au début
                    }, 1900);
                });
            });
        });