angular
  .module('app')
  .component('shuttleToolbar', {
    templateUrl: 'app/components/Toolbar/Toolbar.html',
    controller: ShuttleToolbarController
  });

/** @ngInject */
function ShuttleToolbarController() {
  this.title = "Test Title";
}
