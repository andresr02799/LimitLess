; (function ($) {
    "use strict";

    $(document).ready(function () {

        /**-----------------------------
         *  Navbar fix
         * ---------------------------*/
        $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a', function (e) {
            e.preventDefault();
        })

        /*-------------------------------------
            menu
        -------------------------------------*/
        $('.navbar-area .menu').on('click', function () {
            $(this).toggleClass('open');
            $('.navbar-area .navbar-collapse').toggleClass('sopen');
        });

        // mobile menu
        if ($(window).width() < 992) {
            $(".in-mobile").clone().appendTo(".sidebar-inner");
            $(".in-mobile ul li.menu-item-has-children").append('<i class="fas fa-chevron-right"></i>');
            $('<i class="fas fa-chevron-right"></i>').insertAfter("");

            $(".menu-item-has-children a").on('click', function (e) {
                // e.preventDefault();

                $(this).siblings('.sub-menu').animate({
                    height: "toggle"
                }, 300);
            });
        }

        var menutoggle = $('.menu-toggle');
        var mainmenu = $('.navbar-nav');

        menutoggle.on('click', function () {
            if (menutoggle.hasClass('is-active')) {
                mainmenu.removeClass('menu-open');
            } else {
                mainmenu.addClass('menu-open');
            }
        });

        /*--------------------------------------------------
            select onput
        ---------------------------------------------------*/
        if ($('.single-select').length) {
            $('.single-select').niceSelect();
        }

        /**banner-move**/
        if ($('.banner-bg-img').length) {
            function touches(e) {
                var x = e.touches ? e.touches[0].clientX : e.clientX,
                    y = e.touches ? e.touches[0].clientY : e.clientY;
                var w = window.innerWidth / 2;
                var h = window.innerHeight / 2;
                var l = -(x - w) / (w / 1) - 1;
                var t = -(y - h) / (h / 1) - 1;
                TweenMax.to($('.banner-bg-img'), 1, {
                    top: t + "%",
                    left: l + "%"
                });
            }
            window.addEventListener("mousemove", touches);
            window.addEventListener("touchstart", touches);
            window.addEventListener("touchmove", touches);
        }

        /*--------------------------------------------
            Search Popup
        ---------------------------------------------*/
        var bodyOvrelay = $('#body-overlay');
        var searchPopup = $('#td-search-popup');
        var sidebarMenu = $('#sidebar-menu');

        $(document).on('click', '#body-overlay', function (e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
            sidebarMenu.removeClass('active');
        });
        $(document).on('click', '.search-bar-btn', function (e) {
            e.preventDefault();
            searchPopup.addClass('active');
            bodyOvrelay.addClass('active');
        });

        // sidebar menu 
        $(document).on('click', '.sidebar-menu-close', function (e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            sidebarMenu.removeClass('active');
        });
        $(document).on('click', '#navigation-button', function (e) {
            e.preventDefault();
            sidebarMenu.addClass('active');
            bodyOvrelay.addClass('active');
        });


        /*--------------------------------------------
            banner slider
        ---------------------------------------------*/
        var $st = $('.pagination');
        var $slickEl = $('.banner-slider');
        $slickEl.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $st.text(i + ' ' + slick.slideCount);
        });
        $slickEl.slick({
            centerMode: false,
            slidesToShow: 1,
            focusOnSelect: true,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            fade: true,
            nextArrow: $(".next"),
            prevArrow: $(".prev"),
            appendDots: $(".banner-slider-control .slider-dots"),
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: false,
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: false,
                        slidesToShow: 1
                    }
                }
            ]
        });
        var $scprogressBar = $(".slider-controlprogress");
        var $progressBarLabel = $(".slider__label_Progress");
        $(".banner-slider").on(
            "beforeChange",
            function (event, slick, currentSlide, nextSlide) {
                var calc = (nextSlide / (slick.slideCount - 1)) * 100;
                $scprogressBar
                    .css("background-size", calc + "% 100%")
                    .attr("aria-valuenow", calc);
                $progressBarLabel.text(calc + "% completed");
            }
        );

        /*--------------------------------------------
            testimonial slider
        ---------------------------------------------*/
        var $st = $('.pagination');
        var $slickEl = $('.testimonial-slider');
        $slickEl.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $st.text(i + ' ' + slick.slideCount);
        });
        $slickEl.slick({
            centerMode: false,
            slidesToShow: 1,
            focusOnSelect: true,
            dots: true,
            infinite: true,
            nextArrow: $(".next"),
            prevArrow: $(".prev"),
            appendDots: $(".testimonial-slider-control .slider-dots"),
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: false,
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: false,
                        slidesToShow: 1
                    }
                }
            ]
        });
        var $scprogressBar = $(".slider-controlprogress");
        var $progressBarLabel = $(".slider__label_Progress");
        $(".testimonial-slider").on(
            "beforeChange",
            function (event, slick, currentSlide, nextSlide) {
                var calc = (nextSlide / (slick.slideCount - 1)) * 100;
                $scprogressBar
                    .css("background-size", calc + "% 100%")
                    .attr("aria-valuenow", calc);
                $progressBarLabel.text(calc + "% completed");
            }
        );

        /*--------------------------------------------
            testimonial slider
        ---------------------------------------------*/
        var $st = $('.pagination');
        var $slickEl = $('.testimonial-slider-2');
        $slickEl.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $st.text(i + ' ' + slick.slideCount);
        });
        $slickEl.slick({
            centerMode: false,
            slidesToShow: 2,
            focusOnSelect: true,
            dots: false,
            infinite: true,
            nextArrow: $(".next"),
            prevArrow: $(".prev"),
            appendDots: $(".testimonial-slider-control .slider-dots"),
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: false,
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: false,
                        slidesToShow: 1
                    }
                }
            ]
        });

        /*--------------------------------------------
            client slider
        ---------------------------------------------*/
        $('.client-slider').slick({
            dots: false,
            arrows: false,
            infinite: false,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 5,
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });

        /*--------------------------------------------
            client slider
        ---------------------------------------------*/
        $('.instagram-slider').slick({
            dots: false,
            arrows: false,
            infinite: false,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 6,
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });


        /*------------------------------------------------
            Magnific JS
        ------------------------------------------------*/
        $('.video-play-btn').magnificPopup({
            type: 'iframe',
            removalDelay: 260,
            mainClass: 'mfp-zoom-in',
        });
        $.extend(true, $.magnificPopup.defaults, {
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'https://www.youtube.com/embed/Wimkqo8gDZ0'
                    }
                }
            }
        });

        /*------------------------------------------------
            Magnific JS
        ------------------------------------------------*/
        $('.video-play-btn-inner').magnificPopup({
            type: 'iframe',
            removalDelay: 260,
            mainClass: 'mfp-zoom-in',
        });
        $.extend(true, $.magnificPopup.defaults, {
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'https://www.youtube.com/embed/Wimkqo8gDZ0'
                    }
                }
            }
        });

        /* -----------------------------------------
            fact counter
        ----------------------------------------- */
        $('.counter').counterUp({
            delay: 15,
            time: 2000
        });

        /*-------------------------------------------------
            wow js init
        --------------------------------------------------*/
        new WOW().init();


        /*----------------------------------------
           back to top
        ----------------------------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });

    });

    $(window).on("scroll", function () {
        /*---------------------------------------
            back-to-top
        -----------------------------------------*/
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }

        /*---------------------------------------
            sticky-active
        -----------------------------------------*/
        var scroll = $(window).scrollTop();
        if (scroll < 445) {
            $(".navbar").removeClass("sticky-active");
        } else {
            $(".navbar").addClass("sticky-active");
        }

    });


    $(window).on('load', function () {

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click', '.cancel-preloader a', function (e) {
            e.preventDefault();
            $("#preloader").fadeOut(2000);
        });

    });

    // Obtener elementos del DOM
    const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".close-btn");

    // Mostrar el pop-up después de unos segundos
    window.onload = function () {
        setTimeout(() => {
            popup.style.display = "flex";
        }, 2000); // 2 segundos de retraso
    };

    // Cerrar el pop-up al hacer clic en el botón de cierre
    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Cerrar el pop-up al hacer clic fuera del contenido
    window.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });


})(jQuery);