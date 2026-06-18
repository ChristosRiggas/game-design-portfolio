document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("imageLightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxClose = document.getElementById("lightboxClose");

   const pageImages = document.querySelectorAll(
    ".project-image img:not(.no-image-lightbox), .card-images img:not(.no-image-lightbox), .detail-panel img:not(.no-image-lightbox), .project-card-short img:not(.no-image-lightbox)"
    );

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

// Lightbox for videos
document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("mediaLightbox");
    const lightboxContent = document.getElementById("mediaLightboxContent");
    const closeBtn = document.getElementById("mediaLightboxClose");
    const videoTriggers = document.querySelectorAll(".gallery-video-trigger");

    function closeLightbox() {
        lightbox.setAttribute("aria-hidden", "true");
        lightboxContent.innerHTML = "";
        document.body.classList.remove("lightbox-open");
    }

    videoTriggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            const videoSrc = trigger.dataset.videoSrc;

            lightboxContent.innerHTML = `
                <video class="lightbox-video" controls autoplay playsinline>
                    <source src="${videoSrc}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;

            lightbox.setAttribute("aria-hidden", "false");
            document.body.classList.add("lightbox-open");
        });
    });

    closeBtn.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && lightbox.getAttribute("aria-hidden") === "false") {
            closeLightbox();
        }
    });
});
