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
});