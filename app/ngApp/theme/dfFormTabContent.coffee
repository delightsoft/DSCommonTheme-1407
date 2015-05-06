module = angular.module 'docflow.theme.dfFormTabContent', []

module.directive 'dfFormTabContent', [
  '$window',
  (($window) ->
    restrict: 'C'
    link: (($scope, element, attrs) ->
      $window = $($window)
      $bottom = $('.df-footer', element).first()
      $content = $('.df-form', element).first()
      (fixContentHeight = (->
        $content.height "#{$bottom.offsetTop - $content.offsetTop - 20}px"
        return))()
      $window.resize (->
        fixContentHeight()
        return)
      return)
  )]
