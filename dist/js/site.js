
function getScrollBarWidth() {
	var inner = document.createElement('p');
	inner.style.width = "100%";
	inner.style.height = "200px";
	var outer = document.createElement('div');
	outer.style.position = "absolute";
	outer.style.top = "0px";
	outer.style.left = "0px";
	outer.style.visibility = "hidden";
	outer.style.width = "200px";
	outer.style.height = "150px";
	outer.style.overflow = "hidden";
	outer.appendChild(inner);

	document.body.appendChild(outer);
	var w1 = inner.offsetWidth;
	outer.style.overflow = 'scroll';
	var w2 = inner.offsetWidth;
	if (w1 == w2) w2 = outer.clientWidth;

	document.body.removeChild(outer);
	return (w1 - w2);
}
function closeAllWindows(){
	$('.modal-window').removeClass('active');
	$('body').removeClass('modal-window-open');
	// $('.modal-window').removeClass('mod-vertical-align-top');
	$.fancybox.close();
}




$(document).ready(function () {


    $(".main-menu").clone().appendTo('.mobile-category__content').addClass('main-menu-mobile');
    $(".product-cart__column-right").clone().appendTo('.product-cart__right-part');
    $(".why-we__item.why-we__item-img").clone().prependTo('.why-we__pictures');
    $(".why-we__info-images").clone().appendTo('.why-we__pictures');

    $('.box-for-product').each(function(){
        if ($(this).has(".pagination__load-line").length) {
            $(this).addClass('mod-with-pagination')
        }
        else {
        }
    });


    //------ sliders and carousels begin -------------------------------
    $('.main-page-slider').not('.slick-initialized').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        arrows: false,
    });

    if ($('.brends-carousel').length) {
        $('.brends-carousel').not('.slick-initialized').slick({
            slidesToShow: 7,
            slidesToScroll: 7,
            dots: true,
            infinite: true,
            cssEase: 'linear',
            arrows: false,
            responsive: [
                {
                    breakpoint: 1271,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        dots: true,
                        arrows: false
                    }
                },
                {
                    breakpoint: 736,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        dots: true,
                        arrows: false
                    }
                },
                {
                    breakpoint: 568,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: true,
                        arrows: false
                    }
                }
            ]
        });
    }

    if ($('.about-us__slider').length) {
        $('.about-us__slider').not('.slick-initialized').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            cssEase: 'linear',
            arrows: false,
        });
    }

    function slickCarousel() {
        if ($('.product-carousel').length) {
            $('.product-carousel').not('.slick-initialized').slick({
                slidesToShow: 4,
                slidesToScroll: 4,
                dots: true,
                infinite: true,
                cssEase: 'linear',
                arrows: true,
                nextArrow: '<button type="button" class="slick-next"><svg width="15" height="12"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arw-right"></use></svg></button>',
                prevArrow: '<button type="button" class="slick-prev"><svg width="15" height="12"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arw-right"></use></svg></button>',
                responsive: [
                    {
                        breakpoint: 1600,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 568,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            dots: true,
                            arrows: false
                        }
                    }
                ]
            });
        }

    }
    if ($('.product-carousel').length) {
        slickCarousel();
    }

    function my_room__Carousel() {
        if ($('.my-room__carousel').length) {
            $('.my-room__carousel').not('.slick-initialized').slick({
                slidesToShow: 4,
                slidesToScroll: 4,
                // focusOnSelect: true,
                dots: true,
                infinite: true,
                cssEase: 'linear',
                arrows: true,
                nextArrow: '<button type="button" class="slick-next"><svg width="15" height="12"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arw-right"></use></svg></button>',
                prevArrow: '<button type="button" class="slick-prev"><svg width="15" height="12"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arw-right"></use></svg></button>',
                // touchThreshold: 8,
                responsive: [
                    {
                        breakpoint: 1600,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 1271,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4
                        }
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 736,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            dots: true,
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 568,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            dots: true,
                            arrows: false
                        }
                    }
                ]
            });
        }
    }
    if ($('.my-room__carousel').length) {
        my_room__Carousel();
    }

    function filter__Carousel() {
        if ($('.filter-product-carousel').length) {
            $('.filter-product-carousel').not('.slick-initialized').slick({
                slidesToShow: 4,
                slidesToScroll: 4,
                // focusOnSelect: true,
                dots: true,
                infinite: true,
                cssEase: 'linear',
                arrows: true,
                nextArrow: '<button type="button" class="slick-next"><svg width="15" height="12"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arw-right"></use></svg></button>',
                prevArrow: '<button type="button" class="slick-prev"><svg width="15" height="12"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arw-right"></use></svg></button>',
                // touchThreshold: 8,
                responsive: [
                    {
                        breakpoint: 1600,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 568,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            dots: true,
                            arrows: false
                        }
                    }
                ]
            });
        }
    }
    function filter__Carousel__filter__hiden() {
        if ($('.filter-product-carousel').length) {
            $('.filter-product-carousel').slick({
                slidesToShow: 5,
                slidesToScroll: 5,
                // focusOnSelect: true,
                dots: true,
                infinite: true,
                cssEase: 'linear',
                arrows: true,
                nextArrow: '<button type="button" class="slick-next"><svg width="15" height="12"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arw-right"></use></svg></button>',
                prevArrow: '<button type="button" class="slick-prev"><svg width="15" height="12"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arw-right"></use></svg></button>',
                // touchThreshold: 8,
                responsive: [
                    {
                        breakpoint: 1600,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4
                        }
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 568,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            dots: true,
                            arrows: false
                        }
                    }
                ]
            });
        }
    }
    if ($('.filter-product-carousel').length) {
        filter__Carousel();
    }

    function product_card__Carousel() {
        if ($('.product-card_product-carousel').length) {
            $('.product-card_product-carousel').not('.slick-initialized').slick({
                slidesToShow: 5,
                slidesToScroll: 5,
                // focusOnSelect: true,
                dots: true,
                infinite: true,
                cssEase: 'linear',
                arrows: true,
                nextArrow: '<button type="button" class="slick-next"><svg width="15" height="12"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arw-right"></use></svg></button>',
                prevArrow: '<button type="button" class="slick-prev"><svg width="15" height="12"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arw-right"></use></svg></button>',
                // touchThreshold: 8,
                responsive: [
                    {
                        breakpoint: 1600,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4
                        }
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        }
                    },
                    {
                        breakpoint: 736,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            dots: true,
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 568,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            dots: true,
                            arrows: false
                        }
                    }
                ]
            });
        }
    }
    function product_card__Carousel__tab_active() {
        if ($('.product-card_product-carousel').length) {
            $('.product-card_product-carousel').slick({
                slidesToShow: 4,
                slidesToScroll: 4,
                // focusOnSelect: true,
                dots: true,
                infinite: true,
                cssEase: 'linear',
                arrows: true,
                nextArrow: '<button type="button" class="slick-next"><svg width="15" height="12"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arw-right"></use></svg></button>',
                prevArrow: '<button type="button" class="slick-prev"><svg width="15" height="12"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arw-right"></use></svg></button>',
                // touchThreshold: 8,
                responsive: [
                    {
                        breakpoint: 1600,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 736,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            dots: true,
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 568,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            dots: true,
                            arrows: false
                        }
                    }
                ]
            });
        }
    }
    if ($('.product-card_product-carousel').length) {
        product_card__Carousel();
    }

    function destroyCarousel() {
        if ($('.product-carousel, .filter-product-carousel, .product-card_product-carousel').length) {
            $('.product-carousel, .filter-product-carousel, .product-card_product-carousel').slick('unslick');
        }
    }


    //------ sliders and carousels end -------------------------------


    //----------------  accordions begin
    $.fn.togglepanels = function(){
        return this.each(function(){
            $(this).addClass("ui-accordion ui-accordion-icons ui-widget ui-helper-reset")
                .find(".accordion-name")
                .addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-top ui-corner-bottom")
                .hover(function() { $(this).toggleClass("ui-state-hover"); })
                .append('<span class="ui-icon ui-icon-triangle-1-e"></span>')
                .click(function() {
                    $(this)
                        .toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom")
                        .find("> .ui-icon").toggleClass("ui-icon-triangle-1-e ui-icon-triangle-1-s").end()
                        .next().slideToggle();
                    $(this).closest('.line-accordion').toggleClass("accordion-active");
                    $(this).next()
                        .toggleClass("ui-state-active");
                    return false;

                })
                .next()
                .addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom")
                .not('.in').hide();

        });
    };

    $(".filter__list-group, .room-section__your-orders").togglepanels();

    //----------------   accordions end

    //---------------------          jQuery UI Slider begin

    if ($('.sliders').length) {
        $(".sliders").slider({
            range: true,
            min: 0,
            max: 9999,
            values: [ 0, 9999 ],
            slide: function( event, ui ) {
                $( "#amount11" ).val( ui.values[ 0 ] );
                $( "#amount12" ).val( ui.values[ 1 ] );
            }
        });
        $( "#amount11" ).val( $( ".sliders" ).slider( "values", 0 ) );
        $( "#amount12" ).val($( ".sliders" ).slider( "values", 1 ) );
    }

    //-----------------------         jQuery UI Slider end


    //--------------------------      select begin
    if ($('select').length) {
        $(function () {
            $('select').selectric();
        });
        $('select').on('eventname', function (event, element, selectric) {
        });
    }
    //-----------------------------       select end



    //------ modal-window begin -------------------------------
    $('.link-to-window').on('click', function(event){

        event.preventDefault();
        $('.modal-window').removeClass('active');

        if($(this).data('type') == 'ajax'){
            var id = $(this).data('id');
            $(id).load($(this).attr('href'), function (){
                $(id).addClass('active');
                $('body').addClass('modal-window-open');
            });

        } else {
            var id = $(this).attr('href');
            $(id).addClass('active');
            $('body').addClass('modal-window-open');
        }
    });

    $(document).on('click', '.modal-window-close', function(event){
        event.preventDefault();
        $(this).closest('.modal-window').removeClass('active');
        $('body').removeClass('modal-window-open');
    });

    $(document).mouseup(function (e){
        var div = $(".modal-window .window__wrap");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $('.modal-window').removeClass('active');
            $('body').removeClass('modal-window-open');
            $('.modal-window').removeClass('mod-vertical-align-top');
        }
    });


    //------ modal-window end -------------------------------



    // ------------------ pc menu begin
    $("header .main-menu__item").hover(function(){
        if ($(this).hasClass('open')) {
        }
        else {
            $('header .main-menu__item').removeClass("open");
            $(this).addClass("open");
        }
    });
    $(document).on('click', '.catalog-btn', function (event) {
        event.preventDefault();
        $('header .main-menu__item').removeClass("open");
        $('header .main-menu__item:first-child').addClass('open');

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.main-menu-nav').slideUp(350 );
            setTimeout(function () {
                $('body').removeClass('menu-open');
            }, 350);
        } else {
            $(this).addClass('active');
            $('.main-menu-nav').addClass('before-load');
            $('.main-menu').each(function() {
                $(this).css('min-height', '');
                $(this).addClass('before-load');
                var maxHeight = -1;

                $(this).find($('.second-level-menu')).each(function() {
                    $(this).addClass('before-load');
                    maxHeight = maxHeight > $(this).outerHeight() ? maxHeight : $(this).outerHeight();
                    $(this).removeClass('before-load');
                });

                var Height = $(this).outerHeight();

                if (Height > maxHeight) {
                    maxHeight = Height;
                }

                $(this).css('min-height', maxHeight);
                $(this).removeClass('before-load');
            });
            $('body').addClass('menu-open');
            $('.main-menu-nav').removeClass('before-load');
            $('.main-menu-nav').slideDown(350);
        }
        return false;
    });

    $(document).mouseup(function (e){
        var main_menu = $(".main-menu-nav__content, .catalog-btn");
        if (!main_menu.is(e.target)
            && main_menu.has(e.target).length === 0) {
            $('.catalog-btn').removeClass('active');
            $('.main-menu-nav').slideUp(350);
            setTimeout(function () {
                $('body').removeClass('menu-open');
            }, 350);
        }
    });

    // ------------------ pc menu end


    // ------------------ mobile menu begin
    $(document).on('click', '.mobile-menu__btn', function (event) {
        $('.mobile-menu').addClass('active');
        $('body').addClass('mobile-menu-open');
        event.preventDefault();
    });
    $(document).mouseup(function (e){
        var mobile_menu = $(".mobile-menu, .mobile-category, .mobile-menu__btn, .mobile-fixed-category-btn");
        if (!mobile_menu.is(e.target)
            && mobile_menu.has(e.target).length === 0) {
            $('.mobile-menu').removeClass('active');
            // $('body').removeClass('menu-open');
            setTimeout(function () {
                $('body').removeClass('mobile-menu-open');
            }, 350);
            $('.mobile-category').removeClass('mod-open');
        }
    });
    $(document).on('click', '.mobile-menu__close', function (e) {
        e.preventDefault();
        $('.mobile-menu').removeClass('active');
        $('body').removeClass('mobile-menu-open');
        $('.mobile-category').removeClass('mod-open');

    });
    $(document).on('click', '.category-menu-btn', function (e) {
        e.preventDefault();
        $('.mobile-menu').removeClass('active');
        $('.mobile-category').addClass('mod-open');
    });
    $(document).on('click', '.mobile-fixed-category-btn', function (e) {
        e.preventDefault();
        $('body').addClass('mobile-menu-open');
        $('.mobile-category').addClass('mod-open');
    });
    $(document).on('click', '.mobile-category .main-menu__link-arrow', function (event) {
        event.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).closest('.main-menu__item').find('.second-level-menu').slideUp(350);
            $(this).closest('.main-menu__item').removeClass("mod-open");
            $(this).removeClass("active");
        } else {
            $('.mobile-category .second-level-menu').slideUp(350);
            $('.mobile-category .main-menu__item').removeClass("mod-open");
            $('.mobile-menu__item-btn').removeClass("active");
            $(this).addClass("active");
            $(this).closest('.main-menu__item').addClass("mod-open");
            $(this).closest('.main-menu__item').find('.second-level-menu').slideDown(350);
        }
    });
    $(document).on('click', '.mobile-category__top-title.mod-first-level', function (e) {
        e.preventDefault();
        $('.mobile-menu').addClass('active');
        $('.mobile-category').removeClass('mod-open');
    });

    // ------------------ mobile menu end


    // ------------------ fancybox-zoom begin

    if ($(".fancybox-zoom").length) {
        var imgOpts = $.extend(true, {}, $.fancybox.defaults, {   slideShow  : true,
            fullScreen : false,
            buttons: [
                "zoom",
            ],
            infobar: false,
            loop: true,
            thumbs : {
                autoStart : true,
                axis      : 'x'
            },
            baseTpl	:
                '<div class="fancybox-container" role="dialog" tabindex="-1">' +
                '<div class="fancybox-bg"></div>' +
                '<div class="fancybox-toolbar">' +
                '{{buttons}}' +
                '</div>' +

                '<div class="fancybox-inner">' +
                '<div class="fancybox-navigation">' +
                '<button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left"><svg width="15" height="12"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arw-right"></use></svg></button>' +
                '<button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right"><svg width="15" height="12"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arw-right"></use></svg></button>' +
                '</div>' +
                '<div class="fancybox-stage"></div>' +
                '<div class="fancybox-caption-wrap">' +
                '<div class="fancybox-caption"></div>' +
                '</div>' +
                '</div>' +
                '</div>',
            afterLoad : function() {
            }
        });
        $('.fancybox-zoom').fancybox(imgOpts);
    }

    // ------------------ fancybox-zoom end


   //-------------------  amount begin
    $(document).on('click', '.button_minus', function () {
        var quantity_id = parseInt($(this).attr('data-quantity-id'));
        var value = parseInt($('#quantity-' + quantity_id).val()) - 1;
        if (value == 0) return false;
        $('#quantity-' + quantity_id).val(value);
        //$('#cart-table').submit();
        return false;
    });
    $(document).on('click', '.button_plus', function () {
        var quantity_id = parseInt($(this).attr('data-quantity-id'));
        var value = parseInt($('#quantity-' + quantity_id).val()) + 1;
        $('#quantity-' + quantity_id).val(value);
        //$('#cart-table').submit();
    });

    //------------------    amount end


    //scroll_top begin
    $('.scroll_top').click(function () {
        $('html, body').animate({scrollTop: 0}, {duration: '2000', easing: 'swing'});
        return false;
    });

    var up_btn_animated = 0;
    $(window).scroll(function () {
        var w_pos = $(window).scrollTop();
        if (( w_pos >= 20 )) {
            if (up_btn_animated == 0) {
                $('.scroll_top').animate({bottom: "100", opacity: 1}, 600).addClass('pointer-events');;
                up_btn_animated = 1;
            }
        }

        else {
            if (up_btn_animated == 1) {
                $('.scroll_top').animate({opacity: 0}, 600).removeClass('pointer-events');
                up_btn_animated = 0;
            }
        }
    });

    //scroll_top end


    //----------------------    filter begin

    $(document).on('click', '.filter-category__btn', function (event){
        event.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass("active");
            $('.filter-category__item:nth-child(n+5)').slideToggle({
                duration: 200,
                start: function() {
                    $(this).css('display','flex');
                }
            });
        }
        else {
            $(this).addClass("active");
            $('.filter-category__item:nth-child(n+5)').slideToggle({
                duration: 200,
                start: function() {
                    $(this).css('display','flex');
                }
            });
        }
    });
    $(document).on('click', '.filter-btn', function (event) {
        event.preventDefault();
        if ($(this).hasClass('active')) {
            $('.filter-page').removeClass('filter-hidden');
            $(this).removeClass("active");
            destroyCarousel();
            filter__Carousel();
        } else {
            $('.filter-page').addClass('filter-hidden');
            $(this).addClass("active");
            destroyCarousel();
            filter__Carousel__filter__hiden();
        }
    });
    $(document).on('click', '.mobile-filter-btn, .filter-close-btn', function (event) {
        event.preventDefault();
        if ($('.filter-aside').hasClass('active')) {
            $('.filter-aside__background').animate({opacity: 0}, 600);
            $('.filter-close-btn').removeClass('mod-fixed');
            $('.filter-form').animate({ "right": "-480px" }, 700, function() {
                $('.filter-aside').removeClass("active");
            });
            $('body').removeClass("filter-open");
        } else {
            $('.filter-aside').addClass("active");
            $('.filter-aside__background').animate({opacity: 1}, 600);
            $('.filter-form').animate({ "right": "0" }, 700, function() {
                $('.filter-close-btn').addClass('mod-fixed');
            });
            $('body').addClass("filter-open");
        };
    });

    //-----------------------     filter end


    //----------------------------  order begin
    $(document).on('click', '.checkout__box', function (event) {
        if ($(this).hasClass('active')) {

        } else {
            $(this).closest('.checkout__boxes').find('.checkout__option-link.active input').click();
            $(this).closest('.checkout__boxes').find('.checkout__box.active').removeClass('active');
            $(this).addClass("active");
            $(this).find('.checkout__option-link input').click();
        };

    });
    $( ".products-tab" ).tabs({
        activate: function( event, ui ) {
            destroyCarousel()
            slickCarousel();
        }
    });

    //-----------------------------  order end


    //--------------------------     different clicks begin

    $(document).on('click', '.share-link-btn, .share-link__close', function (event) {
        event.preventDefault();
        if ($('.share-link').hasClass('active')) {
            $('.share-link').removeClass("active");
            $('.share-link__box').slideUp(350);
        } else {
            $('.share-link').addClass("active");
            $('.share-link__box').slideDown(350);
        }
    });

    $(document).on('click', '.window-reg__btn', function(event){
        event.preventDefault();
        $('.window-reg').addClass('mod-form-open');
    });

    $(document).on('click', '.total-order-promo__link', function (event) {
        event.preventDefault();
        if ($(this).hasClass('active')) {
            $('.total-order-promo__inputs').slideUp(350);
            $(this).removeClass("active");
        } else {
            $('.total-order-promo__inputs').slideDown(350);
            $(this).addClass("active");
        }
    });

    $(document).on('click', '.catalogue_lv2__btn', function(event){
        event.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).closest('.catalogue_lv2').find('.catalogue_lv2__list.mod-hidden-list').slideUp(350);
            $(this).removeClass("active");
        } else {
            $(this).closest('.catalogue_lv2').find('.catalogue_lv2__list.mod-hidden-list').slideDown(350);
            $(this).addClass("active");
        }
    });


    //---------------------------   different clicks end


    //------ product-card begin -------------------------------

    if ( $(".product-cart").length ) {
        $('.product-cart').easyResponsiveTabs({
                // closed: true
            }
        );
    }

    $(document).on('click', '.product-preview-video__btn, .video-close-btn', function (event) {
        if ($('.product-preview-video').hasClass('active')) {
            $('.product-preview-video').removeClass("active");
            $(".product-preview-video__iframe iframe")[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
        } else {
            $('.product-preview-video').addClass("active");
            // $(".product-preview-video__iframe iframe")[0].src += "&autoplay=1";
            $(".product-preview-video__iframe iframe")[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }
        event.preventDefault();

    });

    if ($('.box-big-img-slider').length) {
        $('.box-big-img-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            asNavFor: '.small-img-slider',
            cssEase: 'linear',
            arrows: false,
            responsive: [
                {
                    breakpoint: 736,
                    settings: {
                        dots: true
                    }
                }
            ]
        });
    };

    if ($('.small-img-slider').length) {
        $('.small-img-slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            asNavFor: '.box-big-img-slider',
            dots: false,
            focusOnSelect: true,
            arrows: true,
            vertical: true,
            verticalSwiping: true,
            centerMode: true,
            nextArrow: '<button type="button" class="slick-next"><svg width="15" height="12"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arw-right"></use></svg></button>',
            prevArrow: '<button type="button" class="slick-prev"><svg width="15" height="12"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arw-right"></use></svg></button>',
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        vertical: false,
                        centerMode: false
                    }
                },
                {
                    breakpoint: 1271,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        vertical: false,
                        centerMode: false
                    }
                },
                // {
                //         breakpoint: 1024,
                //         settings: {
                //             slidesToShow: 4,
                //             slidesToScroll: 4,
                //             vertical: false,
                //             verticalSwiping: true,
                //         }
                //     },
                //     {
                //         breakpoint: 736,
                //         settings: {
                //             slidesToShow: 5,
                //             slidesToScroll: 5,
                //             vertical: false,
                //             verticalSwiping: true,
                //         }
                //     },
                //     {
                //         breakpoint: 568,
                //         settings: {
                //             slidesToShow: 3,
                //             slidesToScroll: 3,
                //             vertical: false
                //         }
                //     }
            ]
        });

    };

    $(document).on('click', '#accessories-link', function (event){
        $('.product-cart').removeClass('mod-info-hidden');
        destroyCarousel();
        product_card__Carousel();
        // if ($(window).width() + getScrollBarWidth() < 736) {
        //     $('html,body').animate({
        //             scrollTop: $('.accessories-section').offset().top - 110},
        //         'slow');
        // }
        // else {
        //     $('html,body').animate({
        //             scrollTop: $('.accessories-section').offset().top - 20},
        //         'slow');
        // }
        $('html,body').animate({
                scrollTop: $('.accessories-section').offset().top - 20},
            'slow');
        event.preventDefault();
        event.stopPropagation();
        return false;
    });

    $(document).on('click', '#similar-link', function (event){
        $('.product-cart').removeClass('mod-info-hidden');
        destroyCarousel();
        product_card__Carousel();
        // if ($(window).width() + getScrollBarWidth() < 736) {
        //     $('html,body').animate({
        //             scrollTop: $('.similar-products-section').offset().top - 110},
        //         'slow');
        // }
        // else {
        //     $('html,body').animate({
        //             scrollTop: $('.similar-products-section').offset().top - 20},
        //         'slow');
        // }
        $('html,body').animate({
                scrollTop: $('.similar-products-section').offset().top - 20},
            'slow');
        event.preventDefault();
        event.stopPropagation();
        return false;
    });

    $(document).on('click', '#all-characteristics-link, #all-comments-link', function (event){
        $('.product-cart').addClass('mod-info-hidden');
        destroyCarousel();
        product_card__Carousel__tab_active();
        event.preventDefault();
    });

    $(document).on('click', '#about-product-link', function (event){
        $('.product-cart').removeClass('mod-info-hidden');
        destroyCarousel();
        product_card__Carousel();
        event.preventDefault();
    });

    $(document).on('click', '.line-for-small-img-slider .link-for-video-box', function (event){
        event.preventDefault();
        document.getElementById('about-product-link').click();
        $('html,body').animate({
                scrollTop: $('#product-preview-video').offset().top},
            'slow');
    });

    $(document).on('click', '.comments-form-btn', function (event){
        event.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass("active");
            $('.comments-form').slideUp(350);
        } else {
            $(this).addClass("active");
            $('.comments-form').slideDown(350);
        }
    });

    $(document).on('click', '.all-comments-form-btn', function (event){
        document.getElementById('all-comments-link').click();
        $('.comments-form-btn').addClass("active");
        $('.comments-form').slideDown(350);
        event.preventDefault();
    });

    $(document).on('click', '.all-characteristics', function (event){
        document.getElementById('all-characteristics-link').click();
        event.preventDefault();
    });

    $(document).on('click', '.all-comments', function (event){
        document.getElementById('all-comments-link').click();
        event.preventDefault();
    });

    $(document).on('click', '#all-characteristics-link, #all-comments-link', function (event){
        if ($(window).width() + getScrollBarWidth() < 736) {
            $('html,body').animate({
                    scrollTop: 0},
                'slow');
        }
        else {
            $('html,body').animate({
                    scrollTop: $('.tab-section__info').offset().top - 20},
                'slow');
        }
        event.preventDefault();
    });

    //------ product-card end -------------------------------


    $(window).resize(function () {
        $('.main-menu').each(function() {
            $(this).css('min-height', '');
            $(this).addClass('before-load');
            var maxHeight = -1;
            $(this).find($('.second-level-menu')).each(function() {
                $(this).addClass('before-load');
                maxHeight = maxHeight > $(this).outerHeight() ? maxHeight : $(this).outerHeight();
                $(this).removeClass('before-load');
            });
            var Height = $(this).outerHeight();
            if (Height > maxHeight) {
                maxHeight = Height;
            }
            $(this).css('min-height', maxHeight);
            $(this).removeClass('before-load');
        });



        $('.text table').each(function(){
            if($(this).width() > $(".wrap").width()){
                if($(this).hasClass('mod-long')){}
                else {
                    $(this).addClass('mod-long');
                    $(this).wrap("<div class='text-table-overflow'></div>");
                }
            }
            else {
                if ($(this).hasClass('mod-long')) {
                    $(this).unwrap();
                    $(this).removeClass('mod-long');
                }
                else {
                }
            }
        });


    }).resize();

});

