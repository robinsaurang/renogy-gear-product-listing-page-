$(document).ready(function() {
    if($('.back-to-top').length) {
        $('.back-to-top').click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        });
    }
});