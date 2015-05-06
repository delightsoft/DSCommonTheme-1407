(function() {
  var module;

  module = angular.module('docflow.theme.dfLabel', []);

  module.directive('dfLabel', [
    (function() {
      return {
        restrict: 'C',
        link: (function($scope, element, attrs) {
          var classes;
          classes = attrs["class"].split(/\s+/);
          if (element.html().length > 19 && !_.contains(classes, 'df-header')) {
            element.addClass('double-row');
          }
          if (attrs.hasOwnProperty('required')) {
            element.append('<sup>*</sup>');
          }
        })
      };
    })
  ]);

}).call(this);
