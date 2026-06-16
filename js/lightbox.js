document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("imageLightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxClose = document.getElementById("lightboxClose");

    const pageImages = document.querySelectorAll(".project-image img, .card-images img, .detail-panel img, .project-card-short img");

    pageImages.forEach((img) => {
        img.style.cursor = "zoom-in";

        img.addEventListener("click", function () {
            lightboxImage.src = img.src;
            lightboxImage.alt = img.alt || "";
            lightbox.classList.add("active");
            lightbox.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";
        });
    });

    function closeLightbox() {
        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");
        lightboxImage.src = "";
        lightboxImage.alt = "";
        document.body.style.overflow = "";
    }

    lightboxClose.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && lightbox.classList.contains("active")) {
            closeLightbox();
        }
    });
});
