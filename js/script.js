const menuButton = document.querySelector(".menu-button");
const navMenu = document.getElementById("navMenu");

function setMenuState(isOpen) {
    if (!menuButton || !navMenu) {
        return;
    }

    navMenu.classList.toggle("is-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
}

function toggleMenu() {
    if (!menuButton || !navMenu) {
        return;
    }

    const isOpen = navMenu.classList.contains("is-open");
    setMenuState(!isOpen);
}

if (menuButton) {
    menuButton.addEventListener("click", toggleMenu);
}

if (navMenu) {
    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 640) {
                setMenuState(false);
            }
        });
    });
}

const revealItems = Array.from(document.querySelectorAll(".project-card, .media-item"));

if (revealItems.length > 0) {
    revealItems.forEach((item, index) => {
        item.classList.add("scroll-reveal");
        item.style.setProperty("--reveal-delay", `${Math.min(index * 85, 340)}ms`);
    });

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add("is-visible");
                    obs.unobserve(entry.target);
                });
            },
            {
                threshold: 0.2,
                rootMargin: "0px 0px -8% 0px",
            },
        );

        revealItems.forEach((item) => observer.observe(item));
    } else {
        revealItems.forEach((item) => item.classList.add("is-visible"));
    }
}