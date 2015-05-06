module = angular.module 'docflow.theme.dfLabel', []

module.directive 'dfLabel', [
  (() ->
    restrict: 'C'
    link: (($scope, element, attrs) ->

      classes = attrs.class.split(/\s+/)
      if element.html().length > 19 && !_.contains(classes, 'df-header')
        element.addClass('double-row')

      if attrs.hasOwnProperty('required')
        element.append('<sup>*</sup>')

      return)
  )]
