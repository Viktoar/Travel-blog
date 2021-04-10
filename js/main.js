$(function () {

    $('.articles__slider').slick({
        arrows: false,
        dots: true,
        autoplay: false,
        fade: true,
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
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