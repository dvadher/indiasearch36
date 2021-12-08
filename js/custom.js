$(document).ready(function () {
    /*====================== js for sticky and mobile menu ====================== */
    var min_height = $(window).height() - ($(".custom-header").height() + $(".custom-footer").height());
    $(".main_page").css('min-height', min_height + 'px');
    $(window).resize(function () {
        var min_height = $(window).height() - ($(".custom-header").height() + $(".custom-footer").height());
        $(".main_page").css('min-height', min_height + 'px');
    });

    
    $(window).scroll(function(){
        var navHeight = $('#custom-header').height();
        var sticky = $('#custom-header');
        if ($(window).scrollTop() > 0) {
            sticky.addClass("sticky")
            $('#dashboard-page').css('padding-top',navHeight+"px");
        } else {
            sticky.removeClass("sticky");
            $('#dashboard-page').css('padding-top',0);
        }
    });
    $('.jb_front_nav_close button').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


    $('#home-slider').owlCarousel({
        loop: true,
        center: true,
        items: 1,
        autoplay: true,
        dots: false,
        nav: false,
        autoplayTimeout: 4000,
        smartSpeed: 950,           
    });

    $('#product-popular').owlCarousel({
        // loop: true,
        items: 4,
        autoplay: false,
        dots: false,
        nav: true,
        autoplayTimeout: 4000,
        smartSpeed: 950,   
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }       
    });
    $('#product-feaured').owlCarousel({
        // loop: true,
        items: 4,
        autoplay: false,
        dots: false,
        nav: true,
        autoplayTimeout: 4000,
        smartSpeed: 950,   
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }            
    });

    $('#related-product').owlCarousel({
        // loop: true,
        items: 4,
        autoplay: false,
        dots: false,
        nav: true,
        autoplayTimeout: 4000,
        smartSpeed: 950,   
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }            
    });

    $('#recent-view').owlCarousel({
        // loop: true,
        items: 4,
        autoplay: false,
        dots: false,
        nav: true,
        autoplayTimeout: 4000,
        smartSpeed: 950,    
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }        
    });
    $('#new-arrival').owlCarousel({
        // loop: true,
        items: 1,
        autoplay: false,
        dots: false,
        nav: true,
        autoplayTimeout: 4000,
        smartSpeed: 950,           
    });

    $('#product-most-popular').owlCarousel({
        // loop: true,
        items: 1,
        autoplay: false,
        dots: false,
        nav: true,
        autoplayTimeout: 4000,
        smartSpeed: 950,           
    });


    /*====================== js for sticky and mobile menu ====================== */

        // // type animation
        // var TxtType = function(el, toRotate, period) {
        //     this.toRotate = toRotate;
        //     this.el = el;
        //     this.loopNum = 0;
        //     this.period = parseInt(period, 10) || 2000;
        //     this.txt = '';
        //     this.tick();
        //     this.isDeleting = false;
        // };
    
        // TxtType.prototype.tick = function() {
        //     var i = this.loopNum % this.toRotate.length;
        //     var fullTxt = this.toRotate[i];
    
        //     if (this.isDeleting) {
        //         this.txt = fullTxt.substring(0, this.txt.length - 1);
        //     } else {
        //         this.txt = fullTxt.substring(0, this.txt.length + 1);
        //     }
    
        //     this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    
        //     var that = this;
        //     var delta = 200 - Math.random() * 100;
    
        //     if (this.isDeleting) {
        //         delta /= 2;
        //     }
    
        //     if (!this.isDeleting && this.txt === fullTxt) {
        //         delta = this.period;
        //         this.isDeleting = true;
        //     } else if (this.isDeleting && this.txt === '') {
        //         this.isDeleting = false;
        //         this.loopNum++;
        //         delta = 500;
        //     }
    
        //     setTimeout(function() {
        //         that.tick();
        //     }, delta);
        // };
    
        // window.onload = function() {
        //     var elements = document.getElementsByClassName('typewrite');
        //     for (var i = 0; i < elements.length; i++) {
        //         var toRotate = elements[i].getAttribute('data-type');
        //         var period = elements[i].getAttribute('data-period');
        //         if (toRotate) {
        //             new TxtType(elements[i], JSON.parse(toRotate), period);
        //         }
        //     }
        //     // INJECT CSS
        //     var css = document.createElement("style");
        //     css.type = "text/css";
        //     css.innerHTML = ".typewrite > .wrap { border-right: 0.05em solid #8c30f559}";
        //     document.body.appendChild(css);
        // };


     /*====================== js for scrollTop ====================== */
        var btn = $('#button');

            $(window).scroll(function() {
            if ($(window).scrollTop() > 500) {
               btn.addClass('show');
            } else {
               btn.removeClass('show');
            }
            });

            btn.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, '500');
            });
    /*====================== js for scrollTop ====================== */

     $('.count').each(function() {

                $(this).prop('counter', 0).animate({
            
                counter: $(this).text()
            
                }, {
            
                duration: 10000,
            
                easing: 'swing',
            
                step: function(now) {
            
                    $(this).text(Math.ceil(now));
                }
                });
            });
            
    
    AOS.init({
        duration: 1200,
        });


        var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoplay: false, 
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: false,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });

    
});/*====================== all js end ====================== */

