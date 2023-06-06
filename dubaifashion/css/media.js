

$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

$(document).ready(function () {
    // add all to same gallery
    $("#banner a").attr("data-fancybox", "mygallery");
    // assign captions and title from alt-attributes of images:
    $("#banner a").each(function () {
        $(this).attr("data-caption", $(this).find("img").attr("alt"));
        $(this).attr("title", $(this).find("img").attr("alt"));
    });
    // start fancybox:
    $("#banner a").fancybox();
});

$(function () {
    // Owl Carousel
    var owl = $("#banner");
    owl.owlCarousel({
        margin: 10,
        loop: true,
        nav: false,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                autoPlaySpeed: 1000,
                autoPlayTimeout: 1000,
                autoplayHoverPause: true

            },
            600: {
                items: 1,
                autoplay: true,
                autoPlaySpeed: 1000,
                autoPlayTimeout: 1000,
                autoplayHoverPause: true

            },
            1000: {
                items: 1,
                autoplay: true,
                autoPlaySpeed: 1000,
                autoPlayTimeout: 1000,
                autoplayHoverPause: true

            }
        }
    });
});


$(document).ready(function () {
    // add all to same gallery
    $("#gallery a").attr("data-fancybox", "mygallery");
    // assign captions and title from alt-attributes of images:
    $("#gallery a").each(function () {
        $(this).attr("title", $(this).find("img").attr("alt"));
    });
    // start fancybox:
    $("#gallery a").fancybox();
});


$(function () {
    // Owl Carousel
    var owl = $("#gallery");
    owl.owlCarousel({
        margin: 10,
        loop: true,
        autoplay: true,
        autoPlayTimeout: 2000,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: true
            }
        }
    });
});


$(document).ready(function () {
    // add all to same gallery
    $("#floorplans a").attr("data-fancybox", "mygallery");
    // assign captions and title from alt-attributes of images:
    $("#floorplans a").each(function () {
        $(this).attr("title", $(this).find("img").attr("alt"));
    });
    // start fancybox:
    $("#floorplans a").fancybox();
});



// Click function
$('#tabs-nav li').click(function () {
    $('#tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
});