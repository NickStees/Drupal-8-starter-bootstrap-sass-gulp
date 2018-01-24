/**
 * @file
 * Javascript for front page specific behaviors
 */

(function ($, Drupal, drupalSettings) {

  /**
   * Adding a cool func when a link is clicked.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.inetPageLinks = {
    attach: function (context, settings) {
      $(context).find('a.cool-link').on('click', function () {
        // Do something cool when the link is clicked.
        console.log('You clicked a cool link');
      });
    }
  };

}(jQuery, Drupal, drupalSettings));