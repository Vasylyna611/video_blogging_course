let slideIndex = 1;
showSlides(slideIndex);
 
 
/* Функція показує наступний слайд, збільшуючи індекс на 1*/
function plusSlide() {
    showSlides(slideIndex += 1);
}
 
/* Функція показує попередній слайд, зменшуючи індекс на 1*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}
 
/*Функція встановлює поточний слайд*/
function currentxSlide(n) {
    showSlides(slideIndex = n);
}
 
/*Основна функція*/
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("slider-dots-item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}