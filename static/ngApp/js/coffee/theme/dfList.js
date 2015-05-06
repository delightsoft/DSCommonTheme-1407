(function() {
  var module;

  module = angular.module('docflow.theme.dfList', []);

  module.directive('dfList', [
    '$window', '$timeout', (function($window, $timeout) {
      return {
        restrict: 'C',
        link: (function($scope, element, attrs) {
          var $dfFooter, $dfHeader, $header, fixContentHeight;
          $window = $(window);
          $header = $('header').first();
          $dfHeader = $('.df-header').first();
          $dfFooter = $('.df-block-pagination').first();
          (fixContentHeight = (function() {
            element.height("" + ($window.height() - $(element).position().top) + "px");
          }))();
          $window.resize((function() {
            fixContentHeight();
          }));
        })
      };
    })
  ]);

}).call(this);
