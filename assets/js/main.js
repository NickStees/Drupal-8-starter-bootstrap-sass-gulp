/**
 * @file
 * Javascript for all pages on site
 */

(function ($, Drupal, drupalSettings) {

  /**
   * Basically this is on page load tasks
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.inetPageLinks = {
    attach: function (context, settings) {
      $('#dynamic-title').text('This title is set by javascript');

      // ##########################################
      // ######### Overlay Mobile Menu Logic ######
      // ##########################################
      $('.btn-toggle-overlay-menu').click(function (e) {
        $('body').toggleClass('overlay-menu-active');
      });

    }
  };

}(jQuery, Drupal, drupalSettings));
