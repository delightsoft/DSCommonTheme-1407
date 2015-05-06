module = angular.module 'theme', [

  # angular.bootstrap-ui html templates, to be used by 'docflow.ui.table'
  'template/pagination/pager.html'
  'template/pagination/pagination.html'

  # angular.bootstrap-ui brings 'dropdown-toggle' directive, which is used in views/tags/ngApp/std/form-action-buttons.html
  'ui.bootstrap.dropdownToggle'

  'docflow.theme.dfFormTabContent'
  'docflow.theme.dfLabel'
  'docflow.theme.dfList'
  'docflow.theme.templates'
]

module.directive 'dfLabel', [
  (() ->
    restrict: 'C'
    link: (($scope, element, attrs) ->

      classes = attrs.class.split(/\s+/)
      if element.html().length > 19 && !_.contains(classes, 'df-header')
        # TODO: Replace hardcoded rems by a class
#        element.css('line-height', '1.5rem')
        element.addClass('double-row')

      if attrs.hasOwnProperty('required')
        element.append('<sup>*</sup>')

      return)
  )]

module.directive 'dfFormTabContent', [
  (() ->
    restrict: 'C'
    link: (($scope, element, attrs) ->
      bottom = element.find('.df-footer')[0]
      content = element.find('.df-form')[0]
      fixContentHeight =(->
        bottomTop = bottom.getBoundingClientRect().top
        height = bottomTop - content.getBoundingClientRect().top - 20
        $(content).css('height', height)
        return)
      fixContentHeight()
      $(window).resize -> fixContentHeight(); return
      return)
  )]

