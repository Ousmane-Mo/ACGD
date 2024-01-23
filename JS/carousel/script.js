$(document).ready(function () {
    $('.carousel-content').attr("src", urlImages[0]);
    $('#nextBtn').click(function () { 
            $('.carousel-content').attr("src", urlImages[1]); 
    });
});

let urlImages = ['image/S&R-Logo.png', 'image/Stewie and Rupert.png', 'image/stewie-middle-finger.png', 'image/Stewie-stare-down-Rupert.jpg', 'image/Griffin_family.png']



