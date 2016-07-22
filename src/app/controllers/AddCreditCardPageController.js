angular
  .module('app')
  .controller('addCreditCardPageController', AddCreditCardPageController);

/** @ngInject */
function AddCreditCardPageController($scope, $state, setToolbarService) {
  setToolbarService('', false, false, 'tool-login');
  $scope.ccDate = '';
}
