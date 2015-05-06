/*! DSCommonTheme-Bootstrap3 0.1.0 */
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

(function() {
  var module;

  module = angular.module('docflow.theme.templates', []);

  module.run(['$templateCache', (function($templateCache) {})]);

}).call(this);
