angular
  .module('app')
  .controller('homePageController', HomePageController);

/** @ngInject */
function HomePageController($scope, $state, setToolbarService) {
  setToolbarService('', true, false, '');
}
