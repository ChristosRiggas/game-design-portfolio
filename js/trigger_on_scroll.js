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

});