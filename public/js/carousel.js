let currentSlide = 0;

function carousel() {
    let imgs = document.getElementsByClassName("imgs");
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener("click", function () {
            openCarousel();
            showImage(i);
        });
    }

}

// module.exports = {
//     carousel : carousel
// };


let imgFixedHeigth = document.getElementsByClassName("imgFixedHeigth");
for (let i = 0; i < imgs.length; i++) {
    imgFixedHeigth[i].addEventListener("click", function () {
        closeCarousel();
    });
}

document.getElementsByClassName("carouselPics")[0].addEventListener("click", closeCarousel());
document.getElementById("overlayCarousel").addEventListener("click", closeCarousel());
document.getElementsByClassName("prev")[0].addEventListener("click", function () {
    prevSlide();
});
document.getElementsByClassName("next")[0].addEventListener("click", function () {
    nextSlide();
});


function openCarousel() {
    document.getElementById('overlayCarousel').style.display = "block";
    document.getElementsByClassName('carouselPics')[0].style.display = "block";
}

function closeCarousel() {
    document.getElementById('overlayCarousel').style.display = "none";
    document.getElementsByClassName('carouselPics')[0].style.display = "none";
}

function showImage(n) {
    let i;
    let number = document.getElementsByClassName("picNumber");
    let slides = document.getElementsByClassName("mySlides");
    if (n >= slides.length) {
        n = 0;
    }
    if (n < 0) {
        n = slides.length - 1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n].style.display = "block";
    number[n].innerHTML = n + 1 + '/' + slides.length;
    currentSlide = n;
}

function nextSlide() {
    showImage(currentSlide + 1);
}

function prevSlide() {
    showImage(currentSlide - 1);
}