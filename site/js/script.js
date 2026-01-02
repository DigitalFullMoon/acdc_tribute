document.addEventListener("DOMContentLoaded", () => {

    // ============================================
    // 1. SON SUR LA NAVIGATION
    // ============================================
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

                    // Arrêt du son à la fin ou après lecture complète
                    sound.onended = () => {
                        sound.currentTime = 0;
                    };
                    // Sécurité : arrêt forcé après 3s si le son est trop long
                    setTimeout(() => {
                        sound.pause();
                        sound.currentTime = 0;
                    }, 3000);

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

    // ============================================
    // 2. FILTRE PRÉNOM (lettres, accents, tirets)
    // ============================================
    const firstnameInput = document.getElementById("firstname");

    if (firstnameInput) {
        firstnameInput.addEventListener("keydown", e => {
            // Autorise lettres, espaces, accents, tirets, touches de navigation
            if (
                !/^[a-zA-ZÀ-ÿ\s'-]$/.test(e.key) &&
                !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key)
            ) {
                e.preventDefault();
            }
        });
    }

    // ============================================
    // 3. BOUTONS "LIRE PLUS" ALBUMS (si présents)
    // ============================================
    const albumLinks = document.querySelectorAll(".album-link");

    if (albumLinks.length > 0) {
        albumLinks.forEach(link => {
            link.addEventListener("click", e => {
                e.preventDefault();
                const album = link.dataset.album;
                console.log("Album sélectionné :", album);
                // À compléter : ouverture modale ou chargement dynamique
            });
        });
    }

    // ============================================
    // 4. ACCESSIBILITÉ : FOCUS SUR BOUTON FERMETURE MODALS
    // ============================================
    const memberModals = document.querySelectorAll(".modal");

    memberModals.forEach(modal => {
        modal.addEventListener("shown.bs.modal", () => {
            const closeBtn = modal.querySelector(".btn-close");
            if (closeBtn) {
                closeBtn.focus();
            }
        });
    });

});
