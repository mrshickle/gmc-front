angular
  .module('app')
  .controller('categoryPageController', CategoryPageController);

/** @ngInject */
function CategoryPageController($scope, $state, setToolbarService) {
  setToolbarService('', false, false, '');
}
