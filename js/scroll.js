$(document).ready(function(){
    $(document).on('scroll', onScroll);

    $('a[href^="#"]').on('click',function (e) {
        $('.product_name').removeClass('active');
        $(this).toggleClass('active');
        e.preventDefault();

        var target = this.hash;
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top - 150
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    var parallax = document.querySelectorAll(".slide"),
        speed = 0.5;

    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
          $('#horizontal_nav > nav').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 501) {
          $('#horizontal_nav > nav').removeClass('navbar-fixed');
        }

        [].slice.call(parallax).forEach(function(el) {
            var windowYOffset = window.pageYOffset,
                elBackgrounPos = "0% " + (windowYOffset * speed) + "px";

            el.style.backgroundPosition = elBackgrounPos;
        });
    });

    function offsetAnchor () {
        if (location.hash.length !== 0) {
            window.scrollTo(window.scrollX, window.scrollY - 150);
        }
    }
    window.setTimeout(offsetAnchor, 0);

});

function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    $('.product_name').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('.product_name').removeClass("active");
            currentLink.addClass("active");
        }
        else{
            currentLink.removeClass("active");
        }
    });
}