$(document).ready(function() {
  /** Top Button **/
  /* Top Button einblenden */
  function topButtonFunctionality() {

    var topButton = $('.button--top');
    var elOffScreenHeight = $(window).height() / 1.5;

    $(window).scroll(function () {
      if ($(window).scrollTop() > elOffScreenHeight) {
        topButton.addClass('button--top--visible');
      } else {
        topButton.removeClass('button--top--visible');
      }
    });
  }

  topButtonFunctionality();

  /** One Page Nav **/
  window.onscroll = function () {
    var scrollPos = $(document).scrollTop();
    $('.navigation__main .navigation__item--one-page .navigation__link').each(function () {
      var currLink = $(this);
      var anchor = $(currLink.attr("href").slice(1));
      var refElement = anchor.parent();
      if (anchor.position().top - 20 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('.navigation__main .navigation__item--one-page .navigation__link').removeClass("navigation__link--active");
        currLink.addClass("navigation__link--active");
      }
      else{
        currLink.removeClass("navigation__link--active");
      }
    });
  };

  $('.navigation__mobile .navigation__link').click(function (){
    $('.navigation__mobile__burger--input').prop( "checked", false );
  });

  /** Language Switcher **/
  const languageWrap = $('.navigation--language');
  const languageSwitcher = languageWrap.find('.navigation__button');
  languageSwitcher.click(function() {
    $(this).toggleClass('navigation__button--clicked');
    languageWrap.toggleClass('navigation--open');
  })

  /** Anchor Links **/
  var pathname = window.location.href.split('#')[0];
  $('a[href^="#"]').each(function() {
    var $this = $(this),
      link = $this.attr('href');
    $this.attr('href', pathname + link);
  });

  /** Add text to news images **/
  const newsSections = $('.newsdetail__content-elements > div');
  newsSections.each(function(i) {
    const media = $(this).find('figure');
    if (media.length > 0) {
      const mediaCaption = media.find('figcaption');
      mediaCaption.each(function(j) {
        $(this).prepend('<span class="newsdetail__media__caption--number">' + (i + 1) + '.' + (j + 1) + '</span>');
        const mediaType = $(this).attr('data-media-type');
        $(this).append('<span class="newsdetail__media__caption--type">' + mediaType + '</span>');
      });
    }
  });

  /** News Content Navigation **/
  window.onscroll = function () {
    var scrollPos = $(document).scrollTop();
    $('.newsdetail__navigation__link').each(function () {
      var currLink = $(this);
      var currLinkHref = currLink.attr("href");
      var anchor = $(currLinkHref.substring(currLinkHref.lastIndexOf('#')));
      var refElement = anchor.parent();
      if (anchor.position().top - 20 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('.newsdetail__navigation__link').removeClass("newsdetail__navigation__link--active");
        currLink.addClass("newsdetail__navigation__link--active");
      }
      else{
        currLink.removeClass("newsdetail__navigation__link--active");
      }
    });
  };
});

window.addEventListener('load', function() {
  if (document.documentElement.scrollTop > $(window).height() / 1.5) {
    // show top button if scroll position is grater than 0
    $('.button--top').addClass('button--top--visible');
  }
});
