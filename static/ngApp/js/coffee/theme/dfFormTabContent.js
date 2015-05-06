(function() {
  var module;

  module = angular.module('docflow.theme.dfFormTabContent', []);

  module.directive('dfFormTabContent', [
    '$window', (function($window) {
      return {
        restrict: 'C',
        link: (function($scope, element, attrs) {
          var $bottom, $content, fixContentHeight;
          $window = $($window);
          $bottom = $('.df-footer', element).first();
          $content = $('.df-form', element).first();
          (fixContentHeight = (function() {
            $content.height("" + ($bottom.offsetTop - $content.offsetTop - 20) + "px");
          }))();
          $window.resize((function() {
            fixContentHeight();
          }));
        })
      };
    })
  ]);

}).call(this);
