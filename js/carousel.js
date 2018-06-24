
function openCarousel() {
    document.getElementById('overlayCarousel').style.display = "block";
    document.getElementsByClassName('carouselPics')[0].style.display = "block";
}

function closeCarousel() {
    document.getElementById('overlayCarousel').style.display = "none";
    document.getElementsByClassName('carouselPics')[0].style.display = "none";
}

function test(){
    console.log("test");
}

function showImage(n) {
    let i;
    let number = document.getElementsByClassName("picNumber");
    let slides = document.getElementsByClassName("mySlides");
    if (n >= slides.length) { n = 0; }
    if (n < 0) {n = slides.length - 1; }
    for ( i=0; i<slides.length; i++ ){
        slides[i].style.display="none";
    }
    slides[n].style.display ="block";
    number[n].innerHTML = n+1 + '/' + slides.length;
    currentSlide = n;
}

function nextSlide(ev) {
    //ev.stopPropagation();
    showImage(currentSlide + 1);
}

function prevSlide(ev) {
    //ev.stopPropagation();
    showImage(currentSlide - 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}

function showLeftArrow() {
    console.log("left");
    let x = document.getElementsByClassName("prevSpan");
    x.display = 'block';
}

function showRightArrow() {
    console.log("right");
    let x = document.getElementsByClassName("nextSpan");
    x.display = 'block';
}