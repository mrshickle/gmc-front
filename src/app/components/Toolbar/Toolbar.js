angular
  .module('app')
  .component('shuttleToolbar', {
    templateUrl: 'app/components/Toolbar/Toolbar.html',
    controller: ShuttleToolbarController
  })
  .factory('setToolbarService', ToolbarFactory);

/**
 * Toolbar Directive
 */
/** @ngInject */
function ShuttleToolbarController($scope) {
  $scope.toggleSideBar = function () {
    $scope.$parent.sideBarOpen = true;
  };
}

/** @ngInject */
function ToolbarFactory($rootScope) {
  function setToolbarValues(title, material, action, extraClass) {
    var toolbar = {
      title: title,
      material: material,
      action: action,
      class: extraClass
    };
    $rootScope.$broadcast('setTitleEvent', toolbar);
  }
  return setToolbarValues;
}
