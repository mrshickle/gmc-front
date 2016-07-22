angular
  .module('app')
  .controller('cartPageController', CartPageController);

/** @ngInject */
function CartPageController($scope, $state, setToolbarService, $stateParams) {
  setToolbarService('Cart', false, false, '');
  $scope.products = [];

  $scope.products.push($stateParams.product);


}
