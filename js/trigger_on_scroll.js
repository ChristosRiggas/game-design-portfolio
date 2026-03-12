const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("reveal-visible");
        }

    });
}, {
    threshold: 0.1
});

window.addEventListener("load", () => {

    document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right")
    .forEach(el => {

        observer.observe(el);

        // if already visible on page load
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight){
            el.classList.add("reveal-visible");
        }

    });


    
    // Toggle project card details when the entire row is clicked
    // previously this was tied to the button

    document.querySelectorAll(".project-row").forEach(row => {
         // click toggles details
        row.addEventListener("click", () => {
            row.classList.toggle("active");
        });

        // allow keyboard activation (Enter/Space)
        row.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                row.classList.toggle("active");
            }
        });
    });

    // Hamburger menu toggle functionality
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navMenu = document.getElementById("nav-menu");

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener("click", () => {
            hamburgerBtn.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // Close menu when clicking on a nav link
        navMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                hamburgerBtn.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });
    }

});

