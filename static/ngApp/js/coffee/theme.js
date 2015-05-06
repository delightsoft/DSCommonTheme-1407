(function() {
  var module;

  module = angular.module('theme', ['template/pagination/pager.html', 'template/pagination/pagination.html', 'ui.bootstrap.dropdownToggle', 'docflow.theme.dfFormTabContent', 'docflow.theme.dfLabel', 'docflow.theme.dfList', 'docflow.theme.templates']);

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

  module.directive('dfFormTabContent', [
    (function() {
      return {
        restrict: 'C',
        link: (function($scope, element, attrs) {
          var bottom, content, fixContentHeight;
          bottom = element.find('.df-footer')[0];
          content = element.find('.df-form')[0];
          fixContentHeight = (function() {
            var bottomTop, height;
            bottomTop = bottom.getBoundingClientRect().top;
            height = bottomTop - content.getBoundingClientRect().top - 20;
            $(content).css('height', height);
          });
          fixContentHeight();
          $(window).resize(function() {
            fixContentHeight();
          });
        })
      };
    })
  ]);

}).call(this);
