module = angular.module 'docflow.theme.dfList', []

module.directive 'dfList',
  ['$window', '$timeout',
  (($window, $timeout)->
    restrict: 'C'
    link: (($scope, element, attrs) ->
      $window = $(window)
      $header = $('header').first()
      $dfHeader = $('.df-header').first()
      $dfFooter = $('.df-block-pagination').first()
      (fixContentHeight =(->
        element.height "#{$window.height() - $(element).position().top}px"
        return))()
      $window.resize (->
        fixContentHeight()
        return)
      return)
  )]
