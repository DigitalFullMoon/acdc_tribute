document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sound = document.getElementById("navClickSound");

    if (!sound) {
        console.error("Audio navClickSound introuvable");
        return;
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            sound.currentTime = 0;
            sound.play().catch(err => {
                console.warn("Lecture audio bloquée :", err);
            });

            setTimeout(() => {
                sound.pause();
                sound.currentTime = 0;
            }, 1900);
        });
    });
});
