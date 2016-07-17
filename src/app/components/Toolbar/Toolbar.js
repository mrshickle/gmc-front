angular
  .module('app')
  .component('shuttleToolbar', {
    templateUrl: 'app/components/Toolbar/Toolbar.html',
    controller: ShuttleToolbarController
  });

/** @ngInject */
function ShuttleToolbarController($state, $scope, $rootScope) {
  $scope.activeState = $state.getCurrent;
  this.title = "Test Title";
}
