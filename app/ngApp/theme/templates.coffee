module = angular.module 'docflow.theme.templates', []

module.run ['$templateCache', (($templateCache)->

#  $templateCache.put("template/modal/window.html",
#    '''
#      <div class="modal fade {{ windowClass }}" ng-class="{in: animate}" ng-style="{'z-index': 1050 + index*10}" ng-transclude>
#      </div>
#      '''
#  )
#
#  $templateCache.put("template/pagination/pagination.html",
#    '''
#      <ul class="pagination">
#        <li ng-repeat="page in pages" ng-class="{active: page.active, disabled: page.disabled}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>
#      </ul>
#    '''
#  )

  return)
]

