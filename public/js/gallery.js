
fetch('./api/gallery')
    .then(
        function(response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }
            response.json().then(function(data) {
                console.log(data);
                dataInjection(data)
            });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });


// This function can be improved so that all the data
// can be injected automatically.
// Idea: for( child : data.children)
function dataInjection(data) {
    for(let i=0; i<data.length ; i++){
        addFigure(data[i].path, data[i].description);
    }
}

function addFigure(path, description) {
    const $figureOverlay = document.createElement('figure');
    $figureOverlay.classList.add('mySlides');
    let imgOverlay = document.createElement('img');
    imgOverlay.classList.add('imgFixedHeigth');
    imgOverlay.src = path;
    imgOverlay.alt = description;
    let picNumber = document.createElement('div');
    picNumber.classList.add('picNumber');
    $figureOverlay.appendChild(imgOverlay);
    $figureOverlay.appendChild(picNumber);
    document.getElementById("cP").insertBefore($figureOverlay,document.getElementById("pr"));

    const $responsive = document.createElement('div');
    $responsive.classList.add('responsive');
    const $figure = document.createElement('figure');
    $figure.classList.add('gallery');
    let img = document.createElement('img');
    img.classList.add('imgs');
    img.src = path;
    img.alt = description;
    let figCaption = document.createElement('figcaption');
    figCaption.classList.add('desc');
    figCaption.innerHTML = description;

    $responsive.appendChild($figure);
    $figure.appendChild(img);
    $figure.appendChild(figCaption);

    document.getElementById("picContainerId").insertBefore($responsive,document.getElementById("sign"));


//carousel.js

    let currentSlide = 0;

    let imgs = document.getElementsByClassName("imgs");
    for(let i=0; i<imgs.length; i++){
        imgs[i].addEventListener("click", function(){
            openCarousel();
            showImage(i);
        });
    }

    let imgFixedHeigth = document.getElementsByClassName("imgFixedHeigth");
    for(let i=0; i<imgs.length; i++){
        imgFixedHeigth[i].addEventListener("click", function(){
            closeCarousel();
        });
    }

    document.getElementsByClassName("carouselPics")[0].addEventListener("click", closeCarousel());
    document.getElementById("overlayCarousel").addEventListener("click", closeCarousel());
    document.getElementsByClassName("prev")[0].addEventListener("click", function(){
        prevSlide();
    });
    document.getElementsByClassName("next")[0].addEventListener("click", function(){
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
        if (n >= slides.length) { n = 0; }
        if (n < 0) {n = slides.length - 1; }
        for ( i=0; i<slides.length; i++ ){
            slides[i].style.display="none";
        }
        slides[n].style.display ="block";
        number[n].innerHTML = n+1 + '/' + slides.length;
        currentSlide = n;
    }

    function nextSlide() {
        showImage(currentSlide + 1);
    }

    function prevSlide() {
        showImage(currentSlide - 1);
    }

}

