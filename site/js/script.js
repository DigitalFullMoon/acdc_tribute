document.addEventListener("DOMContentLoaded", () => {

    /* ============================
       🔊 SON SUR LA NAVIGATION
    ============================ */
    const navLinks = document.querySelectorAll(".nav-link");
    const sound = document.getElementById("navClickSound");

    if (sound) {
        navLinks.forEach(link => {
            link.addEventListener("click", e => {
                const targetId = link.getAttribute("href");

                if (targetId && targetId.startsWith("#")) {
                    e.preventDefault();

                    sound.currentTime = 0;
                    sound.play().catch(() => {});

                    setTimeout(() => {
                        sound.pause();
                        sound.currentTime = 0;
                    }, 1500);

                    setTimeout(() => {
                        const target = document.querySelector(targetId);
                        if (target) {
                            target.scrollIntoView({ behavior: "smooth" });
                        }
                    }, 300);
                }
            });
        });
    }

    /* ============================
       🔤 FILTRE PRENOM (lettres uniquement)
    ============================ */
    const firstnameInput = document.getElementById("firstname");

    if (firstnameInput) {
        firstnameInput.addEventListener("keydown", e => {
            if (
                !/[a-z\s]/i.test(e.key) &&
                !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key)
            ) {
                e.preventDefault();
            }
        });
    }

    /* ============================
       📀 BOUTONS "LIRE PLUS" ALBUMS
    ============================ */
    const albumLinks = document.querySelectorAll(".album-link");

    albumLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const album = link.dataset.album;
            console.log("Album sélectionné :", album);

            // Ici tu pourras plus tard ouvrir une modale
            // ou charger dynamiquement le contenu
        });
    });

});
