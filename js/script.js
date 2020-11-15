$(document).ready(function() {
    
    'use strict';
    
    $('#nav_btn').click(function() {
        event.preventDefault();
        $('.nav_line').toggleClass('nav_open');
        $('#nav_mobile').toggleClass('nav_left');
        $('.language_tab_mob').toggleClass('nav_sub_top');
        $('header').toggleClass('fixed');
    });
    
    $('.language_tab_mob > article:nth-child(1)').click(function() {
        event.preventDefault();
        $('.language_tab_mob').toggleClass('nav_top');
    });

    $('.sub_tap').click( function(e) {
        e.preventDefault();
        $(this).parent().toggleClass('tap');
    });
    
    $('.nav_block:nth-child(1)').on('click', function () {
        $('.nav_block:nth-child(1)').animate({right:'50vw'}, function() {
            $('.nav_block:nth-child(1)').css({opacity: '0'});
        });
        $('.nav_block_sub').animate({right:'50vw'});
    });
    
    $('#slider').each(function () {
        var $this = $(this);
        var $group = $this.find('.slide_group');
        var $slides = $this.find('.slide');
        var buttonArray = [];
        var currentIndex = 0;
        var timeout;
    
        function move(newIndex) {
            var animateLeft, slideLeft;

            advance();

            if ($group.is(':animated') || currentIndex === newIndex) {
                return;
            }

            buttonArray[currentIndex].removeClass('active_btn');
            buttonArray[newIndex].addClass('active_btn');

            if (newIndex > currentIndex) {
                slideLeft = '100%';
                animateLeft = '-100%';
            } else {
                slideLeft = '-100%';
                animateLeft = '100%';
            }

            $slides.eq(newIndex).css({left: slideLeft, display: 'flex'});
            $group.animate({left: animateLeft}, function () {
                $slides.eq(currentIndex).css({display: 'none'});
                $slides.eq(newIndex).css({left: 0});
                $group.css({left: 0});
                currentIndex = newIndex;
            });
        }
    
        function advance() {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                if (currentIndex < ($slides.length - 1)) {
                    move(currentIndex + 1);
                } else {
                    move(0);
                }
            }, 10000);
        }
    
        $.each($slides, function (index) {
            var $button = $('<button class="slide_btn"></button>');
            if (index === currentIndex) {
                $button.addClass('active_btn');
            } 
            $button.on('click', function() {
                move(index);
            }).appendTo('.slide_buttons');
            buttonArray.push($button);
        });
    
        advance(); 
    });

    $('#about_slider > article:gt(0)').hide();

    setInterval(function () {
        $('#about_slider > article:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#about_slider')
    }, 3000);

    (function() {
        $('.input_box').keyup(function() {

            var empty = false;
            $('.input_box').each(function() {
                if ($(this).val() == '') {
                    empty = true;
                }
            });

            if (empty) {
                $('#btn_sub').attr('disabled', 'disabled');
                $('#btn_sub').removeClass('enable');
            } else {
                $('#btn_sub').removeAttr('disabled');
                $('#btn_sub').addClass('enable');   
            }
        });
    })()

    $(window).scroll(function() {
        if ($(window).scrollTop() > 500) {
            $('#to_top').show(150);
        } else {
            $('#to_top').hide(150);
        }
    });

    $('#to_top').click(function () {
        $('html, body').animate({scrollTop:0},500);
        return false;
    });

});

var acc = document.getElementsByClassName('acc_row');
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        this.classList.toggle('active_row');
        var panel = this.nextElementSibling;
        if (panel.style.height) {
            panel.style.height = null;
        } else {
            panel.style.height = panel.scrollHeight + 3 + 'px';
        }
    }
}