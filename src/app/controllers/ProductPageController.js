angular
  .module('app')
  .controller('productPageController', ProductPageController);

/** @ngInject */
function ProductPageController($scope, $state, setToolbarService) {
  setToolbarService('', false, false, '');
}
