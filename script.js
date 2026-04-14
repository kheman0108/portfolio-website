const elements = document.querySelectorAll(".fade-in");

function showOnScroll() {
    const trigger = window.innerHeight * 0.8;

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
            el.style.transition = "0.8s";
        }
    });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);