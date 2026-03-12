let slideIndex = 1;
let slideshowInterval;
let isAnimating = false;

window.onload = function(){

    const slides = document.querySelector(".slides");

    const firstClone = slides.children[0].cloneNode(true);
    const lastClone = slides.children[slides.children.length-1].cloneNode(true);

    slides.appendChild(firstClone);
    slides.insertBefore(lastClone, slides.firstChild);
    slides.style.transition = "none";
    slides.style.transform = "translateX(-100%)";

    const totalSlides = slides.children.length;

    startSlideshow();

    document.querySelector(".next").onclick = () => changeSlide(1);
    document.querySelector(".prev").onclick = () => changeSlide(-1);

    const slideshow = document.getElementById("slideshow");

    slideshow.addEventListener("mouseenter", stopSlideshow);
    slideshow.addEventListener("mouseleave", startSlideshow);

    slides.addEventListener("transitionend", function(){

        isAnimating = false;

        if(slideIndex === totalSlides - 1){

            slides.style.transition = "none";
            slideIndex = 1;
            slides.style.transform = "translateX(" + (-slideIndex * 100) + "%)";

            slides.offsetHeight; // force reflow

            slides.style.transition = "transform 0.8s ease";
        }

        if(slideIndex === 0){

            slides.style.transition = "none";
            slideIndex = totalSlides - 2;
            slides.style.transform = "translateX(" + (-slideIndex * 100) + "%)";

            slides.offsetHeight; // force reflow

            slides.style.transition = "transform 0.8s ease";
        }

    });

    function changeSlide(n){

        if(isAnimating) return;
        isAnimating = true;

        slideIndex += n;

        showSlides();
    }

    function showSlides(){

        slides.style.transition = "transform 0.8s ease";
        slides.style.transform = "translateX(" + (-slideIndex*100) + "%)";

        document.querySelectorAll(".slide").forEach(slide=>{
            slide.classList.remove("active");
        });

        document.querySelectorAll(".slide")[slideIndex].classList.add("active");

    }

    function startSlideshow(){
        slideshowInterval = setInterval(()=> changeSlide(1),6000);
    }

    function stopSlideshow(){
        clearInterval(slideshowInterval);
    }

    requestAnimationFrame(()=>{
        slides.style.transition = "transform 0.8s ease";
    }); 

};

setTimeout(() => {
    document.querySelector(".slideshow-container").classList.add("loaded");
}, 100);


// solution with no black flash but jump 

// let slideIndex = 0;
// let slideshowInterval;
// let isAnimating = false;

// window.onload = function() {
//     const container = document.querySelector(".slides");
//     const slides = document.querySelectorAll(".slide");
//     const totalSlides = slides.length;

//     // Start on the first slide
//     container.style.transform = `translateX(0%)`;
//     slides[slideIndex].classList.add("active");

//     function showSlide(index) {
//         const offset = -index * 100;
//         container.style.transform = `translateX(${offset}%)`;

//         slides.forEach(slide => slide.classList.remove("active"));
//         slides[index].classList.add("active");
//     }

//     function changeSlide(n) {
//         if (isAnimating) return;
//         isAnimating = true;

//         let nextIndex = slideIndex + n;

//         if (nextIndex >= totalSlides) {
//             // Animate last → first smoothly
//             nextIndex = 0;
//         } else if (nextIndex < 0) {
//             // Animate first → last smoothly
//             nextIndex = totalSlides - 1;
//         }

//         slideIndex = nextIndex;
//         showSlide(slideIndex);

//         // allow next animation after transition duration
//         setTimeout(() => isAnimating = false, 800);
//     }

//     // Arrows
//     document.querySelector(".next").onclick = () => changeSlide(1);
//     document.querySelector(".prev").onclick = () => changeSlide(-1);

//     // Hover pause
//     const slideshow = document.getElementById("slideshow");
//     slideshow.addEventListener("mouseenter", stopSlideshow);
//     slideshow.addEventListener("mouseleave", startSlideshow);

//     function startSlideshow() {
//         slideshowInterval = setInterval(() => changeSlide(1), 6000);
//     }

//     function stopSlideshow() {
//         clearInterval(slideshowInterval);
//     }

//     startSlideshow();

//     // Fade-in container and hero zoom
//     setTimeout(() => container.parentElement.classList.add("loaded"), 100);
// };