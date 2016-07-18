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

}
/** @ngInject */
function ToolbarFactory($rootScope) {
  function setToolbarValues(title, material, user, extraClass) {
    var toolbar = {
      title: title,
      material: material,
      user: user,
      class: extraClass
    };
    $rootScope.$broadcast('setTitleEvent', toolbar);
  }
  return setToolbarValues;
}
