$(document).ready(function () {
    CreateCarousel();
    CarouselUpdate();
    $("#prevBtn").click(function () { 
        CI = (CI - 1 + urlImages.length) % urlImages.length;
        CarouselUpdate();
    });
    $('#nextBtn').click(function () { 
        CI = (CI + 1) % urlImages.length;
    
        CarouselUpdate();
    });
});


let urlImages = ['image/S&R-Logo.png', 'image/Stewie and Rupert.png', 'image/stewie-middle-finger.png', 'image/Stewie-stare-down-Rupert.jpg', 'image/Griffin_family.png']
let CI = 0;
function CreateCarousel() {
    div = $('body').append('<div class="carousel-container"></div>');
    img = $('.carousel-container').append($('<img class="carousel-content">'));
    btnBox = $('.carousel-container').append('<div class="btn-container"> </div>');
    btnPrev = $('.btn-container').append('<i id="prevBtn" class="fa-solid fa-arrow-left fa-2xl"></i>');
    btnNext = $('.btn-container').append('<i id="nextBtn" class="fa-solid fa-arrow-right fa-2xl"></i>');
}

function CarouselUpdate() {
    $('.carousel-content').fadeOut(200, function (){
        $(this).attr('src', urlImages[CI]);
        $(this).fadeIn(750);
    });
};

