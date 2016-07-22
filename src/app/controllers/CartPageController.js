angular
  .module('app')
  .controller('cartPageController', CartPageController);

/** @ngInject */
function CartPageController($scope, $state, setToolbarService) {
  setToolbarService('', false, false, '');
}
