$(function() {
    // banner slider
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        arrows: false,


    });

    // Service slider
    $('.service-main').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        arrows: false,
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            }

        ]
    });
    $('.post-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 1000,
        arrows: true,
        nextArrow: '.right',
        prevArrow: '.left',
        centerMode: true,
        centerPadding: false,
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }

        ]
    });
    $('.brands-main').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        arrows: false,
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            }

        ]
    });







    var containerEl = document.querySelector('.project-main');

    var mixer = mixitup(containerEl);

    $('.venobox').venobox();








    $('.back-to-top').click(function() {

        $('html,body').animate({ scrollTop: 0 }, 800);

    });

    $(window).scroll(function() {

        var scrolling = $(this).scrollTop();

        if (scrolling > 400) {
            $('.back-to-top').fadeIn(500);
        } else {
            $('.back-to-top').fadeOut(500);
        }




    });
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });




    $(".navbar-nav .nav-item a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                window.location.hash = hash;
            });
        } // End if
    });

});