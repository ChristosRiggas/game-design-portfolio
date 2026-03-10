let slideIndex = 0;
let slideshowInterval;

window.onload = function(){

    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide").length;

    showSlides();
    startSlideshow();

    document.querySelector(".next").onclick = function(){
        changeSlide(1);
    };

    document.querySelector(".prev").onclick = function(){
        changeSlide(-1);
    };

    const slideshow = document.getElementById("slideshow");

    slideshow.addEventListener("mouseenter", stopSlideshow);
    slideshow.addEventListener("mouseleave", startSlideshow);

    function changeSlide(n){
        slideIndex += n;

        if(slideIndex >= totalSlides) slideIndex = 0;
        if(slideIndex < 0) slideIndex = totalSlides-1;

        showSlides();
    }

    function showSlides(){
        slides.style.transform = "translateX(" + (-slideIndex * 100) + "%)";
    }

    function startSlideshow(){
        slideshowInterval = setInterval(function(){
            changeSlide(1);
        },5000);
    }

    function stopSlideshow(){
        clearInterval(slideshowInterval);
    }

};