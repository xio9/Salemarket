document.addEventListener('DOMContentLoaded', () => {
    function initMenu() {
        $(".sub-menu").hide();
        $(".current_page_item .sub-menu").show();
        $('#menu li a').click(

            function () {
                var checkElement = $(this).next();
                if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
                    return false;
                }
                if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
                    console.log(checkElement.parentsUntil('#menu'));
                    $('#menu ul:visible').not(checkElement.parentsUntil('#menu')).slideUp('normal');
                    checkElement.slideDown('normal');
                    return false;
                }
            });
    }
    $(function () {
        initMenu();
    });

    (function ($) {

        $('.menu a').click(function (e) {
            e.preventDefault();
            $(this).parent('li').find('ul:first').slideToggle();
        });

    })(jQuery);

    const swiper = new Swiper('.clothes-slider', {
        // Optional parameters
        direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
});