angular
  .module('app')
  .component('sidebar', {
    templateUrl: 'app/components/Sidebar/Sidebar.html',
    controller: SidebarController
  });

/**
 * Toolbar Directive
 */
/** @ngInject */
function SidebarController($scope) {
  $scope.click = function () {
    $scope.$parent.sideBarOpen = false;
  };
}
