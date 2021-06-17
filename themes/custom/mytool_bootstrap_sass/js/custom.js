/**
 * @file
 * Global utilities.
 *
 */
(function($, Drupal) {

  'use strict';

  Drupal.behaviors.mytool_bootstrap_sass = {
    attach: function(context, settings) {
      // Custom code here
      // open filters
      $('#block-views-block-filtro-por-categorias-menu li div').once("mytool_bootstrap_sass").click(function (e) {
        // e.preventDefault();
        // e.stopPropagation();
        let currentSpan = $(this).find('span');
        let currentSVG = $(this).find('svg');
        currentSVG.toggleClass('active');
        $('#block-views-block-filtro-por-categorias-menu li span').not(currentSpan).removeClass('active').parent().next().slideUp();
        $('#block-views-block-filtro-por-categorias-menu li svg').not(currentSVG).removeClass('fa-caret-down active').addClass('fa-caret-right');
        $('#block-views-block-filtro-por-categorias-menu li', currentSVG).toggleClass('active');
        currentSpan.toggleClass('active').parent().next().slideToggle();
        // currentSpan.siblings().removeClass('fa-caret-right').addClass('fa-caret-down active');
      });
      $('.messages-dismiss').first().once("mytool_bootstrap_sass").click(function (e) {
        $('.alert').removeClass('show').addClass('hidden');
        $(this).removeClass('show').addClass('hidden');
        $('.messages-wrapper').removeClass('show').addClass('hidden');
      });
      $
      $('.alert.show .close').once("mytool_bootstrap_sass").click(function (e) {
        if ($('.alert.show').length <= 3){
          $('.alert.show').each(function () {
            $(this).removeClass('show').addClass('hidden');
          });
          $('.messages-dismiss').removeClass('show').addClass('hidden');
          $('.messages-wrapper').removeClass('show').addClass('hidden');
        }
      });
    }
  };

})(jQuery, Drupal);
