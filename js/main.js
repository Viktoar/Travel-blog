$(function () {

    $('.articles__slider').slick({
        arrows: false,
        dots: true,
        autoplay: false,
        fade: true,
    });

    $('.menu__btn').on('click', function () {
        const menuList = document.querySelectorAll('.menu__item');
        console.log('11');
        if (menuList[0].style.transform === "translateX(300px)") {
            for (let i = 0; i < menuList.length; i++) {
                setTimeout(function () {
                    menuList[i].style.transform = "translateX(0px)";
                }, 250 * i)
            }
        } else {
            for (let i = 0; i < menuList.length; i++) {
                setTimeout(function () {
                    menuList[i].style.transform = "translateX(300px)";
                }, 250 * i)
            }
        }

    });
    $('.categories__title').on('click', function () {
        $('.categories__list').toggleClass('categories__list--active');
    });
    $('.subscribe-form__title').on('click', function () {
        $('.subscribe-form__text').toggleClass('subscribe-form__text--active');
        $('.subscribe-form__label').toggleClass('subscribe-form__label--active');
    });
    $('.posts__title').on('click', function () {
        $('.posts__items').toggleClass('posts__items--active');
    });
    $('.instagram__title').on('click', function () {
        $('.instagram__items').toggleClass('instagram__items--active');
    });


})