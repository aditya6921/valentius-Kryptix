// =====================================
// 1. NAVBAR SMOOTH SCROLLING
// =====================================

const navItems = document.querySelectorAll(".navbar nav");

navItems.forEach((item) => {
    item.addEventListener("click", () => {

        const targetId = item.dataset.target;
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// =====================================
// 2. BACK TO TOP
// =====================================

const backToTop = document.getElementById("back-to-top");

backToTop.addEventListener("click", (event) => {

    event.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// =====================================
// 3. DARK / LIGHT MODE
// =====================================

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "☀";
        } else {
            themeToggle.textContent = "☾";
        }

    });

}


// =====================================
// 4. TYPING EFFECT
// =====================================

const roleText = document.querySelector(".role");

const text = "Software Developer";

let index = 0;

roleText.textContent = "";
roleText.classList.add("typing");

function typeText() {

    if (index < text.length) {

        roleText.textContent += text.charAt(index);

        index++;

        setTimeout(typeText, 100);
    }
}

typeText();


// =====================================
// 5. SCROLL REVEAL ANIMATION
// =====================================

const revealElements = document.querySelectorAll(
    ".about, .skills, .work, .contact, .project"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    observer.observe(element);
});


// =====================================
// 6. PROJECT HOVER INTERACTION
// =====================================

const projects = document.querySelectorAll(".project");

projects.forEach((project) => {

    project.addEventListener("mouseenter", () => {
        project.classList.add("project-hover");
    });

    project.addEventListener("mouseleave", () => {
        project.classList.remove("project-hover");
    });

});


// =====================================
// 7. PROJECT IMAGE TILT
// =====================================

const projectImages = document.querySelectorAll(".project-image");

projectImages.forEach((imageContainer) => {

    imageContainer.addEventListener("mousemove", (event) => {

        const rect = imageContainer.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        imageContainer.style.transform =
            `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });

    imageContainer.addEventListener("mouseleave", () => {

        imageContainer.style.transform =
            "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
    });

});